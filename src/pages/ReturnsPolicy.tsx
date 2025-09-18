import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Clock, CheckCircle, XCircle } from 'lucide-react';

const ReturnsPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Returns & Exchanges
            </h1>
            <p className="text-lg text-muted-foreground">
              Your satisfaction is our priority. Learn about our return and exchange policy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <RotateCcw className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">30-Day Returns</h3>
                <p className="text-sm text-muted-foreground">Easy returns within 30 days</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Quick Processing</h3>
                <p className="text-sm text-muted-foreground">Returns processed in 3-5 days</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Full Refund</h3>
                <p className="text-sm text-muted-foreground">Complete refund guarantee</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Return Policy Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We want you to be completely satisfied with your Mina purchase. If for any reason 
                  you're not happy with your order, we offer a comprehensive return and exchange policy.
                </p>
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Important Note</h4>
                  <p className="text-sm text-muted-foreground">
                    All returns must be initiated within 30 days of delivery. Items must be in 
                    original condition with all tags attached.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  What Can Be Returned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    Unworn items with original tags attached
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    Items in original packaging
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    Items without damage, stains, or alterations
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0" />
                    Standard collection items (non-custom)
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-600" />
                  What Cannot Be Returned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    Custom-made items or special orders
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    Items worn or used
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    Items damaged by customer
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    Items returned after 30 days
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0" />
                    Sale items marked "Final Sale"
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How to Return an Item</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    <h4 className="font-medium mb-2">Initiate Return</h4>
                    <p className="text-sm text-muted-foreground">
                      Contact us via WhatsApp or email within 30 days
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    <h4 className="font-medium mb-2">Package Item</h4>
                    <p className="text-sm text-muted-foreground">
                      Pack item in original packaging with tags
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    <h4 className="font-medium mb-2">Ship or Schedule</h4>
                    <p className="text-sm text-muted-foreground">
                      We'll arrange pickup or provide return address
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Exchanges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We're happy to exchange items for a different size or color, subject to availability.
                </p>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-medium mb-2">Size Exchanges</h4>
                    <p className="text-sm text-muted-foreground">
                      Free exchanges for different sizes within 30 days. We'll cover return shipping 
                      if the size doesn't fit as expected.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Color Exchanges</h4>
                    <p className="text-sm text-muted-foreground">
                      Exchange for different colors subject to availability. Standard return 
                      shipping rates apply.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Refund Process</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Processing Time</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Returns processed within 3-5 business days</li>
                      <li>• Refunds issued to original payment method</li>
                      <li>• Bank transfers may take 5-7 business days</li>
                      <li>• You'll receive email confirmation</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Return Shipping</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Customer pays return shipping (unless defective)</li>
                      <li>• We provide prepaid labels for exchanges</li>
                      <li>• Free pickup available in major cities</li>
                      <li>• Insurance included on all returns</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Need Help with Returns?
              </h3>
              <p className="text-muted-foreground mb-4">
                Our customer service team is here to help make your return process as smooth as possible.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Contact Information</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>📧 returns@mina.com</p>
                    <p>📱 WhatsApp: +212 600 000 000</p>
                    <p>🕒 Monday-Friday, 9 AM - 6 PM</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">What to Include</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>• Order number</p>
                    <p>• Reason for return</p>
                    <p>• Photos if item is defective</p>
                    <p>• Preferred resolution</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ReturnsPolicy;