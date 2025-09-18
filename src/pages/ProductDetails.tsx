import { useState } from 'react';
import { Heart, Share2, Minus, Plus, Star, Shield, Truck, RotateCcw } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

// Import product images
import caftanImage from '@/assets/caftan-1.jpg';
import takchitaImage from '@/assets/takchita-1.jpg';
import jellabaImage from '@/assets/jellaba-1.jpg';
import babouchesImage from '@/assets/babouches-1.jpg';

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [mainImage, setMainImage] = useState(0);

  // Mock product data
  const product = {
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
  };

  const relatedProducts = [
    {
      id: '2',
      name: 'Royal Blue Takchita',
      price: 2800,
      image: takchitaImage,
      category: 'Takchitas',
      colors: ['#003366', '#C0C0C0']
    },
    {
      id: '3',
      name: 'Traditional Jellaba',
      price: 450,
      image: jellabaImage,
      category: 'Jellabas',
      colors: ['#F5F1EB', '#D4B08A']
    }
  ];

  const updateQuantity = (change: number) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Shop', href: '/shop' },
          { label: product.category, href: `/shop?category=${product.category.toLowerCase()}` },
          { label: product.name }
        ]} />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-lg">
              <img
                src={product.images[mainImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              {product.isNew && (
                <Badge className="absolute top-4 left-4 bg-accent text-accent-foreground">
                  New
                </Badge>
              )}
            </div>
            
            <div className="flex gap-4 overflow-x-auto">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-colors ${
                    mainImage === index ? 'border-primary' : 'border-border'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
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
          <h2 className="text-2xl font-serif font-bold text-foreground mb-8">You Might Also Like</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct.id} {...relatedProduct} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default ProductDetails;