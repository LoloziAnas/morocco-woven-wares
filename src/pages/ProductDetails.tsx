import { useState, useEffect, useCallback, useRef } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, Minus, Plus, ShoppingBag, ChevronLeft, Share2, Truck, RotateCcw, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';
import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { getProductById, getFeaturedProducts } from '@/api/products';

// Extended Product interface to handle both string and object color formats
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  category: string;
  images: string[];
  colors: string[];
  sizes: string[];
  isNew?: boolean;
  rating?: number;
  reviews?: number;
  inStock: boolean;
  features?: string[];
}

// Product type is now imported from the API module

// Mock features for products
const defaultFeatures = [
  'Premium quality materials',
  'Handcrafted by skilled artisans',
  'Ethically sourced materials',
  'Traditional Moroccan craftsmanship'
];

// Helper function to get related products
const fetchRelatedProducts = async (productId: string): Promise<Product[]> => {
  try {
    return await getFeaturedProducts(4); // Using featured products as related for now
  } catch (error) {
    console.error('Error fetching related products:', error);
    return [];
  }
};

const ProductDetails = () => {
  // Router and Refs
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const galleryRef = useRef<HTMLDivElement>(null);
  const touchStartRef = useRef({ x: 0, y: 0, time: 0 });
  const touchMoveRef = useRef({ x: 0, y: 0 });
  const scaleRef = useRef(1);

  // State
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [mainImage, setMainImage] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isZoomed, setIsZoomed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [youMayAlsoLike, setYouMayAlsoLike] = useState<Product[]>([]);

  // Fetch product data
  useEffect(() => {
    let isMounted = true;
    
    const fetchData = async () => {
      if (!id) {
        setError('No product ID provided');
        setIsLoading(false);
        return;
      }

      try {
        setIsLoading(true);
        setError(null);

        // Fetch product details
        const productData = await getProductById(id);
        
        if (!isMounted) return;
        
        if (!productData) {
          setError('Product not found');
          return;
        }

        setProduct(productData);

        // Set default selections
        if (productData.sizes?.length) {
          setSelectedSize(productData.sizes[0]);
        }
        
        if (productData.colors?.length) {
          setSelectedColor(productData.colors[0] || '');
        }
      } catch (err) {
        console.error('Error fetching product:', err);
        if (isMounted) {
          setError('Failed to load product. Please try again later.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [id]);

  // Handle keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (!product?.images) return;

    switch (e.key) {
      case 'ArrowLeft':
        e.preventDefault();
        setMainImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1));
        break;
      case 'ArrowRight':
        e.preventDefault();
        setMainImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0));
        break;
      case 'Escape':
        if (isFullscreen) {
          document.exitFullscreen().catch(console.error);
          setIsFullscreen(false);
        }
        break;
      case 'f':
      case 'F':
        toggleFullscreen();
        break;
      default:
        break;
    }
  }, [product?.images, isFullscreen]);

  // Toggle fullscreen mode
  const toggleFullscreen = useCallback(() => {
    if (!galleryRef.current) return;

    if (!document.fullscreenElement) {
      galleryRef.current.requestFullscreen().then(() => {
        setIsFullscreen(true);
      }).catch(console.error);
    } else {
      document.exitFullscreen().then(() => {
        setIsFullscreen(false);
      }).catch(console.error);
    }
  }, []);

  // Handle fullscreen change events
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, []);

  // Add keyboard event listeners
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  // Preload next and previous images
  useEffect(() => {
    if (!product?.images) return;

    const preloadImages = [
      product.images[(mainImage - 1 + product.images.length) % product.images.length],
      product.images[(mainImage + 1) % product.images.length]
    ];

    preloadImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, [mainImage, product?.images]);

  // Loading state
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  // Error or not found state
  if (error || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-6 max-w-md">
          <h2 className="text-2xl font-bold text-foreground mb-2">
            {error === 'Product not found' ? 'Product Not Found' : 'Error Loading Product'}
          </h2>
          <p className="text-muted-foreground mb-4">
            {error || 'The requested product could not be loaded.'}
          </p>
          <div className="flex gap-4 justify-center">
            <Button variant="outline" onClick={() => window.location.reload()}>
              Try Again
            </Button>
            <Button asChild>
              <Link to="/shop">Back to Shop</Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  // Image zoom handlers
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    // setZoomPosition({ x, y });
  };

  // Touch gesture handlers

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartRef.current = {
      x: e.touches[0].clientX,
      y: e.touches[0].clientY,
      time: Date.now()
    };
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single touch - track movement for swipe
      touchMoveRef.current = {
        x: e.touches[0].clientX,
        y: e.touches[0].clientY
      };
    } else if (e.touches.length === 2) {
      // Two fingers - handle pinch to zoom
      e.preventDefault();
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dist = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );

      if (scaleRef.current === 1) {
        scaleRef.current = dist / 100;
      } else {
        const newScale = dist / 100;
        if (newScale > 1) {
          setIsZoomed(true);
          scaleRef.current = newScale;
        }
      }
    }
  };

  const handleTouchEnd = () => {
    const { x: startX, y: startY, time } = touchStartRef.current;
    const { x: endX, y: endY } = touchMoveRef.current;
    const deltaX = endX - startX;
    const deltaY = endY - startY;
    const distance = Math.hypot(deltaX, deltaY);
    const elapsed = Date.now() - time;

    // Check if it's a swipe (fast enough and mostly horizontal)
    if (distance > 30 && elapsed < 300 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX > 0) {
        // Swipe right - previous image
        setMainImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1));
      } else {
        // Swipe left - next image
        setMainImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0));
      }
    }

    // Reset zoom if pinched closed
    if (scaleRef.current < 1.2) {
      setIsZoomed(false);
      scaleRef.current = 1;
    }
  };

  const handleBuyNow = () => {
    if (!product) return;

    // In a real app, this would add to cart and redirect to checkout
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      quantity,
      size: selectedSize,
      color: selectedColor
    };

    // Add to cart context
    // Then navigate to checkout
    navigate('/checkout');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs
          items={[
            { label: 'Home', href: '/' },
            { label: 'Shop', href: '/shop' },
            { label: product.name, href: `#` }
          ]}
        />

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div
              ref={galleryRef}
              className={`relative aspect-square overflow-hidden rounded-lg cursor-${isZoomed ? 'zoom-out' : 'zoom-in'} ${
                isFullscreen ? 'bg-black' : 'bg-background'
              }`}
              onMouseEnter={() => !isFullscreen && setIsZoomed(true)}
              onMouseLeave={() => !isFullscreen && setIsZoomed(false)}
              onMouseMove={handleMouseMove}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="w-full h-full transition-transform duration-300"
                style={{
                  transform: isZoomed ? `scale(${isFullscreen ? 2 : 1.5})` : 'scale(1)',
                  transformOrigin: 'center',
                  backgroundImage: `url(${product.images[mainImage]})`,
                  backgroundSize: isFullscreen ? 'contain' : 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                  width: '100%',
                  touchAction: 'none'
                }}
              />

              {/* Fullscreen toggle button */}
              <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                aria-label={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
              >
                {isFullscreen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                  </svg>
                )}
              </button>

              {/* Navigation arrows (visible in fullscreen) */}
              {isFullscreen && (
                <>
                  <button
                    onClick={() => setMainImage(prev => (prev > 0 ? prev - 1 : product.images.length - 1))}
                    className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                    aria-label="Previous image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m15 18-6-6 6-6" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setMainImage(prev => (prev < product.images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors z-10"
                    aria-label="Next image"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </button>
                </>
              )}
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  New
                </Badge>
              )}
            </div>

            {/* Thumbnails with Scroll */}
            <div className="relative">
              <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setMainImage(index)}
                    className={`flex-shrink-0 relative aspect-square w-16 overflow-hidden rounded-md border-2 transition-all ${
                      mainImage === index
                        ? 'border-primary scale-105'
                        : 'border-transparent hover:border-gray-300'
                    }`}
                  >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                    {mainImage === index && (
                      <div className="absolute inset-0 bg-primary/20" />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-serif font-bold text-foreground mb-2">
                {product.name}
              </h1>

              <div className="flex items-center gap-4 mb-4">
                {product.rating !== undefined && product.reviews !== undefined && (
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-moroccan-gold text-moroccan-gold' : 'text-muted-foreground'}`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground ml-2">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-foreground">
                  {product.price} MAD
                </span>
                {product.originalPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    {product.originalPrice} MAD
                  </span>
                )}
                {product.originalPrice && (
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    Save {product.originalPrice - product.price} MAD
                  </Badge>
                )}
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Color Selection */}
            <div className="space-y-3">
              <div className="text-sm text-muted-foreground">
                Color: {selectedColor && (
                  <span className="text-muted-foreground ml-1 capitalize">{selectedColor}</span>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setSelectedColor(color)}
                    className={`h-10 w-10 rounded-full border-2 transition-all ${
                      selectedColor === color 
                        ? 'border-primary scale-110' 
                        : 'border-transparent hover:border-gray-300'
                    }`}
                    style={{ backgroundColor: color }}
                    aria-label={`Color ${color}`}
                    title={color}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-foreground">Size</label>
                <Button variant="link" className="text-xs h-auto p-0 text-primary">
                  Size Guide
                </Button>
              </div>
              <Select value={selectedSize} onValueChange={setSelectedSize}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select size" />
                </SelectTrigger>
                <SelectContent>
                  {product.sizes.map((size) => (
                    <SelectItem key={size} value={size}>
                      {size}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-foreground">Quantity</label>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(-1)}
                  disabled={quantity <= 1}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => updateQuantity(1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <Button
                size="lg"
                className="w-full btn-moroccan"
                disabled={!selectedSize || !selectedColor}
              >
                Add to Cart - {product.price * quantity} MAD
              </Button>
              <Button
                variant="outline"
                className="w-full py-6 text-lg font-medium border-2 border-primary text-primary hover:bg-primary/10"
                onClick={handleBuyNow}
              >
                <ShoppingBag className="mr-2 h-5 w-5" />
                Buy Now
              </Button>
              <div className="flex gap-3">
                <Button variant="outline" size="lg" className="flex-1">
                  <Heart className="h-5 w-5 mr-2" />
                  Save
                </Button>
                <Button variant="outline" size="lg" className="flex-1">
                  <Share2 className="h-5 w-5 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="space-y-4 border-t border-border pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="space-y-2">
                  <Truck className="h-6 w-6 mx-auto text-primary" />
                  <div className="text-xs text-muted-foreground">Free Shipping</div>
                </div>
                <div className="space-y-2">
                  <RotateCcw className="h-6 w-6 mx-auto text-primary" />
                  <div className="text-xs text-muted-foreground">30-Day Returns</div>
                </div>
                <div className="space-y-2">
                  <Shield className="h-6 w-6 mx-auto text-primary" />
                  <div className="text-xs text-muted-foreground">Authenticity Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <Tabs defaultValue="details" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="reviews">Reviews ({product.reviews})</TabsTrigger>
              <TabsTrigger value="care">Care Instructions</TabsTrigger>
            </TabsList>

            <TabsContent value="details" className="mt-6 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Product Features</h3>
              <ul className="space-y-2">
                {((product.features && product.features.length > 0) ? product.features : defaultFeatures).map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="text-center py-12">
                <p className="text-muted-foreground">Reviews feature coming soon</p>
              </div>
            </TabsContent>

            <TabsContent value="care" className="mt-6 space-y-4">
              <h3 className="font-serif text-xl font-semibold text-foreground">Care Instructions</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Dry clean only</li>
                <li>• Store hanging to maintain shape</li>
                <li>• Avoid direct sunlight when storing</li>
                <li>• Handle embroidery with care</li>
                <li>• Iron on low heat if needed</li>
              </ul>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-serif font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.images[0]}
                  category={product.category}
                  isNew={product.isNew}
                  colors={product.colors}
                  sizes={product.sizes}
                />
              ))}
            </div>
          </section>
        )}

        {/* You May Also Like */}
        {youMayAlsoLike.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-serif font-bold mb-8">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {youMayAlsoLike.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  price={product.price}
                  originalPrice={product.originalPrice}
                  image={product.images[0]}
                  category={product.category}
                  isNew={product.isNew}
                  colors={product.colors}
                  sizes={product.sizes}
                />
              ))}
            </div>
          </section>
        )}
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default ProductDetails;