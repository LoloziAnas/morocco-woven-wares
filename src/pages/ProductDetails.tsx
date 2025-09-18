import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import '@/styles/product-gallery.css';
import { Heart, Share2, Minus, Plus, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import Navigation from '@/components/Navigation';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from '@/components/ui/use-toast';

// Import product images
import caftanImage from '@/assets/caftan-1.jpg';
import takchitaImage from '@/assets/takchita-1.jpg';
import jellabaImage from '@/assets/jellaba-1.jpg';
import babouchesImage from '@/assets/babouches-1.jpg';

// Mock product data - in a real app, this would come from an API
const mockProducts = [
  {
    id: '1',
    name: 'Emerald Silk Caftan with Gold Embroidery',
    price: 1200,
    originalPrice: 1500,
    images: [caftanImage, takchitaImage, jellabaImage, babouchesImage],
    category: 'Caftans',
    description: 'This exquisite emerald silk caftan features intricate gold embroidery handcrafted by master artisans in Fez. The flowing silhouette and luxurious fabric make it perfect for special occasions and celebrations.',
    features: [
      'Hand-embroidered with 24k gold thread',
      'Premium silk fabric from Morocco',
      'Traditional Fez craftsmanship',
      'Flowing, comfortable fit',
      'Dry clean only'
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: [
      { name: 'Emerald', value: '#50C878' },
      { name: 'Royal Blue', value: '#003366' },
      { name: 'Gold', value: '#D4AF37' }
    ],
    isNew: true,
    rating: 4.8,
    reviews: 24
  },
  // Add more mock products as needed
];

const ProductDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real app, you would fetch the product data from an API
    const fetchProduct = async () => {
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const foundProduct = mockProducts.find((p: any) => p.id === id);
        if (foundProduct) {
          setProduct(foundProduct);
          setSelectedSize(foundProduct.sizes?.[0] || '');
          setSelectedColor(foundProduct.colors?.[0]?.value || '');
        } else {
          throw new Error('Product not found');
        }
      } catch (err: any) {
        setError(err.message);
        toast({
          variant: 'destructive',
          title: 'Error',
          description: 'Failed to load product details. Please try again later.'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link to="/shop">Continue Shopping</Link>
        </Button>
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
    setZoomPosition({ x, y });
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
              className={`relative aspect-square overflow-hidden rounded-lg cursor-${isZoomed ? 'zoom-in' : 'zoom-out'}`}
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <div 
                className="w-full h-full transition-transform duration-300"
                style={{
                  transform: isZoomed ? 'scale(1.5)' : 'scale(1)',
                  transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                  backgroundImage: `url(${product.images[mainImage]})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  height: '100%',
                  width: '100%'
                }}
              />
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
                        : 'border-transparent hover:border-border hover:scale-105'
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
              <label className="text-sm font-medium text-foreground">
                Color: {selectedColor && <span className="text-muted-foreground">{selectedColor}</span>}
              </label>
              <div className="flex gap-3">
                {product.colors.map((color) => (
                  <button
                    key={color.name}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 transition-all ${
                      selectedColor === color.name ? 'border-primary scale-110' : 'border-border'
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
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
                {product.features.map((feature, index) => (
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
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-8">You May Also Like</h2>
          <p className="text-muted-foreground">Related products will be shown here.</p>
        </div>
      </main>

      <WhatsAppButton />
    </div>
  );
};

export default ProductDetails;