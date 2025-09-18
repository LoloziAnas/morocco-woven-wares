import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, Clock, MapPin, Package } from 'lucide-react';

const ShippingPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Shipping Policy
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our shipping and delivery process
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Truck className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Free Shipping</h3>
                <p className="text-sm text-muted-foreground">On orders over 500 MAD</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">2-5 business days</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <MapPin className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Nationwide</h3>
                <p className="text-sm text-muted-foreground">All cities in Morocco</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Package className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Secure Packaging</h3>
                <p className="text-sm text-muted-foreground">Premium protection</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Costs</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Major Cities</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Casablanca, Rabat, Marrakech</span>
                        <span className="font-medium">Free over 500 MAD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Standard delivery (2-3 days)</span>
                        <span className="font-medium">40 MAD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Express delivery (24h)</span>
                        <span className="font-medium">80 MAD</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-3">Other Cities</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>All other Moroccan cities</span>
                        <span className="font-medium">Free over 500 MAD</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Standard delivery (3-5 days)</span>
                        <span className="font-medium">60 MAD</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Processing Time</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All orders are processed within 1-2 business days. Orders placed on weekends 
                  or holidays will be processed the next business day.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Ready-to-Ship Items</h4>
                    <p className="text-sm text-muted-foreground">
                      Most items in our regular collection are ready to ship and will be 
                      processed within 1 business day.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Custom Orders</h4>
                    <p className="text-sm text-muted-foreground">
                      Custom-made items or alterations may require 5-10 additional business 
                      days for production.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Delivery Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Delivery Process</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>You will receive a tracking number via SMS and email</li>
                      <li>Our delivery partner will contact you before delivery</li>
                      <li>Delivery is available Monday to Saturday, 9 AM to 6 PM</li>
                      <li>Someone must be present to receive the package</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium mb-2">What to Expect</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>All items are carefully packaged in premium boxes</li>
                      <li>Each garment includes care instructions</li>
                      <li>A certificate of authenticity is included with every purchase</li>
                      <li>Gift wrapping is available upon request</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>International Shipping</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Currently, we only ship within Morocco. We are working on expanding our 
                  shipping options to include international destinations. Please contact us 
                  if you're interested in international shipping.
                </p>
                <p className="text-sm text-muted-foreground">
                  For international inquiries, please email us at{' '}
                  <a href="mailto:international@mina.com" className="text-primary hover:underline">
                    international@mina.com
                  </a>
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Order Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Once your order ships, you'll receive a tracking number that allows you to 
                  monitor your package's progress.
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <h4 className="font-medium mb-2">Need Help?</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you have any questions about your order or need assistance with tracking:
                  </p>
                  <div className="text-sm space-y-1">
                    <p>📧 Email: shipping@mina.com</p>
                    <p>📱 WhatsApp: +212 600 000 000</p>
                    <p>🕒 Support Hours: Monday-Friday, 9 AM - 6 PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ShippingPolicy;