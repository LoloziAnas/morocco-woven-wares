import { useState } from 'react';
import { CreditCard, MapPin, Phone, Mail, User, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

// Import product images
import caftanImage from '@/assets/caftan-1.jpg';
import takchitaImage from '@/assets/takchita-1.jpg';

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('cod');
  
  // Mock cart items
  const cartItems = [
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
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 50;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Order submitted');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Cart', href: '/cart' },
          { label: 'Checkout' }
        ]} />
        
        <div className="mb-8">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
            Checkout
          </h1>
          <p className="text-muted-foreground">
            Complete your order details below
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Checkout Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Shipping Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    Shipping Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter first name" required />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter last name" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="your@email.com" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+212 600 000 000" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="address">Street Address *</Label>
                    <Textarea id="address" placeholder="Enter your full address" required />
                  </div>
                  
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div>
                      <Label htmlFor="city">City *</Label>
                      <Input id="city" placeholder="City" required />
                    </div>
                    <div>
                      <Label htmlFor="province">Province</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select province" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="casablanca">Casablanca</SelectItem>
                          <SelectItem value="rabat">Rabat</SelectItem>
                          <SelectItem value="marrakech">Marrakech</SelectItem>
                          <SelectItem value="fez">Fez</SelectItem>
                          <SelectItem value="tangier">Tangier</SelectItem>
                          <SelectItem value="agadir">Agadir</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="postal">Postal Code</Label>
                      <Input id="postal" placeholder="Postal code" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Payment Method */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CreditCard className="h-5 w-5 text-primary" />
                    Payment Method
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label htmlFor="cod" className="flex-1 cursor-pointer">
                        <div className="font-medium">Cash on Delivery</div>
                        <div className="text-sm text-muted-foreground">
                          Pay when you receive your order
                        </div>
                      </Label>
                    </div>
                    
                    <div className="flex items-center space-x-2 p-4 border rounded-lg">
                      <RadioGroupItem value="bank" id="bank" />
                      <Label htmlFor="bank" className="flex-1 cursor-pointer">
                        <div className="font-medium">Bank Transfer</div>
                        <div className="text-sm text-muted-foreground">
                          Transfer payment to our bank account
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                  
                  {paymentMethod === 'bank' && (
                    <div className="mt-4 p-4 bg-muted rounded-lg">
                      <h4 className="font-medium text-foreground mb-2">Bank Details:</h4>
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p>Bank: Attijariwafa Bank</p>
                        <p>Account: 007 640 0001234567890 23</p>
                        <p>SWIFT: BCMAMAMC</p>
                        <p className="mt-2 font-medium text-foreground">
                          Please include your order number in the transfer reference
                        </p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Order Notes */}
              <Card>
                <CardHeader>
                  <CardTitle>Order Notes (Optional)</CardTitle>
                </CardHeader>
                <CardContent>
                  <Textarea
                    placeholder="Any special instructions for your order..."
                    rows={3}
                  />
                </CardContent>
              </Card>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-8">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Cart Items */}
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div key={item.id} className="flex gap-3">
                        <div className="w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-foreground line-clamp-1">
                            {item.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.size} • {item.color} • Qty: {item.quantity}
                          </p>
                          <p className="text-sm font-medium text-foreground">
                            {item.price * item.quantity} MAD
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <Separator />
                  
                  {/* Totals */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-muted-foreground">
                      <span>Subtotal</span>
                      <span>{subtotal} MAD</span>
                    </div>
                    <div className="flex justify-between text-muted-foreground">
                      <span>Shipping</span>
                      <span>{shipping === 0 ? 'Free' : `${shipping} MAD`}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between text-lg font-semibold text-foreground">
                      <span>Total</span>
                      <span>{total} MAD</span>
                    </div>
                  </div>
                  
                  {/* Place Order Button */}
                  <Button type="submit" size="lg" className="w-full btn-moroccan">
                    <Lock className="h-4 w-4 mr-2" />
                    Place Order
                  </Button>
                  
                  <p className="text-xs text-muted-foreground text-center">
                    By placing your order, you agree to our{' '}
                    <Link to="/terms" className="text-primary hover:underline">
                      Terms & Conditions
                    </Link>
                  </p>
                  
                  {/* Security Badge */}
                  <div className="text-center pt-4 border-t border-border">
                    <p className="text-xs text-muted-foreground mb-2">
                      Your information is secure and protected
                    </p>
                    <div className="flex justify-center gap-2 text-xs text-muted-foreground">
                      <span>✓ SSL Encrypted</span>
                      <span>✓ Privacy Protected</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;