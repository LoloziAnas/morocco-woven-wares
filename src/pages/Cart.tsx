import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';

const Cart = () => {
  const { 
    cartItems, 
    updateQuantity, 
    removeFromCart, 
    clearCart, 
    itemCount, 
    totalPrice 
  } = useCart();

  const handleQuantityChange = (id: string, change: number) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      updateQuantity(id, item.quantity + change);
    }
  };

  const handleRemoveItem = (id: string) => {
    removeFromCart(id);
  };

  const shipping = totalPrice > 0 ? 100 : 0; 
  const total = totalPrice + shipping;

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
                            className="h-8 w-8 rounded-full"
                            onClick={() => handleQuantityChange(item.id, -1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8 rounded-full"
                            onClick={() => handleQuantityChange(item.id, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <span className="font-semibold text-foreground">
                            {item.price * item.quantity} MAD
                          </span>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-8 w-8 text-destructive hover:bg-destructive/10"
                            onClick={() => handleRemoveItem(item.id)}
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
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span>{totalPrice} MAD</span>
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