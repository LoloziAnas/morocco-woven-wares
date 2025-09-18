import { useState } from 'react';
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

// Import product images
import caftanImage from '@/assets/caftan-1.jpg';
import takchitaImage from '@/assets/takchita-1.jpg';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'Emerald Silk Caftan with Gold Embroidery',
      price: 1200,
      quantity: 1,
      size: 'M',
      color: 'Emerald',
      image: caftanImage
    },
    {
      id: '2',
      name: 'Royal Blue Takchita with Silver Threading',
      price: 2800,
      quantity: 2,
      size: 'L',
      color: 'Royal Blue',
      image: takchitaImage
    }
  ]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems(items =>
      items.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />
          
          <div className="text-center py-16">
            <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground/50 mb-6" />
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Discover our beautiful collection of authentic Moroccan clothing
            </p>
            <Button asChild size="lg" className="btn-moroccan">
              <Link to="/shop">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Shopping Cart
          </h1>
          <p className="text-muted-foreground">
            {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-foreground mb-2 line-clamp-2">
                        {item.name}
                      </h3>
                      
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <span>Size: {item.size}</span>
                        <span>Color: {item.color}</span>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-foreground">
                            {item.price * item.quantity} MAD
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:text-destructive"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <CardContent className="p-6">
                <h2 className="text-xl font-serif font-semibold text-foreground mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>{subtotal} MAD</span>
                  </div>
                  
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'Free' : `${shipping} MAD`}</span>
                  </div>
                  
                  {shipping === 0 && (
                    <p className="text-xs text-accent">
                      Free shipping on orders over 500 MAD
                    </p>
                  )}
                  
                  <Separator />
                  
                  <div className="flex justify-between text-lg font-semibold text-foreground">
                    <span>Total</span>
                    <span>{total} MAD</span>
                  </div>
                </div>
                
                <div className="space-y-3 mt-6">
                  <Button asChild size="lg" className="w-full btn-moroccan">
                    <Link to="/checkout">
                      Proceed to Checkout
                    </Link>
                  </Button>
                  
                  <Button asChild variant="outline" size="lg" className="w-full">
                    <Link to="/shop">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>
                
                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-border">
                  <p className="text-xs text-muted-foreground text-center mb-3">
                    Secure checkout guaranteed
                  </p>
                  <div className="flex justify-center gap-2 text-xs text-muted-foreground">
                    <span>✓ Free returns</span>
                    <span>✓ Authenticity guaranteed</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Cart;