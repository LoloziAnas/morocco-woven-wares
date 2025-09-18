import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Scale, Shield, AlertTriangle } from 'lucide-react';

const TermsConditions = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Terms & Conditions
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Please read these terms and conditions carefully
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Clear Terms</h3>
                <p className="text-sm text-muted-foreground">Easy to understand</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Scale className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Fair Policies</h3>
                <p className="text-sm text-muted-foreground">Balanced approach</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Protection</h3>
                <p className="text-sm text-muted-foreground">Your rights protected</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <AlertTriangle className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Important</h3>
                <p className="text-sm text-muted-foreground">Legally binding</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Agreement to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  By accessing and using the Mina website and services, you agree to be bound by these 
                  Terms and Conditions ("Terms"). If you do not agree to all the terms and conditions, 
                  you may not access the website or use any services.
                </p>
                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800 mb-1">Important Notice</h4>
                      <p className="text-sm text-amber-700">
                        These terms constitute a legally binding agreement between you and Mina. 
                        Please read them carefully.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Use of Website</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Permitted Use</h4>
                  <p className="text-muted-foreground mb-2">You may use our website for:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Browsing and purchasing our products</li>
                    <li>Creating an account and managing orders</li>
                    <li>Subscribing to newsletters and communications</li>
                    <li>Contacting customer support</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Prohibited Use</h4>
                  <p className="text-muted-foreground mb-2">You agree not to:</p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Use the website for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt the website's operation</li>
                    <li>Copy, reproduce, or distribute our content without permission</li>
                    <li>Use automated systems to access the website</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Product Information and Pricing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Product Descriptions</h4>
                  <p className="text-sm text-muted-foreground">
                    We strive to provide accurate product descriptions, images, and specifications. 
                    However, colors may vary due to monitor settings, and slight variations in 
                    handcrafted items are natural and add to their authenticity.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Pricing</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>All prices are in Moroccan Dirhams (MAD) unless otherwise stated</li>
                    <li>Prices are subject to change without notice</li>
                    <li>We reserve the right to correct pricing errors</li>
                    <li>Shipping costs are additional unless otherwise stated</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Availability</h4>
                  <p className="text-sm text-muted-foreground">
                    Product availability is subject to stock levels. We reserve the right to 
                    discontinue products and will notify you if an ordered item becomes unavailable.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Orders and Payment</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Order Acceptance</h4>
                  <p className="text-sm text-muted-foreground">
                    Your order constitutes an offer to purchase. We reserve the right to accept 
                    or decline orders for any reason. Order confirmation does not guarantee acceptance.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Payment Terms</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Payment is required at the time of order or delivery (COD)</li>
                    <li>We accept bank transfers and cash on delivery</li>
                    <li>All payments must be in Moroccan Dirhams</li>
                    <li>You are responsible for any banking fees</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Order Cancellation</h4>
                  <p className="text-sm text-muted-foreground">
                    You may cancel your order within 24 hours of placement, provided it hasn't 
                    been processed for shipping. Custom orders cannot be cancelled once production begins.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Shipping and Delivery</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Delivery Areas</h4>
                  <p className="text-sm text-muted-foreground">
                    We currently deliver within Morocco only. International shipping may be 
                    available upon special request.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Delivery Times</h4>
                  <p className="text-sm text-muted-foreground">
                    Estimated delivery times are provided as guidance only. We are not liable 
                    for delays caused by circumstances beyond our control.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-medium mb-2">Risk of Loss</h4>
                  <p className="text-sm text-muted-foreground">
                    Risk of loss and title to products pass to you upon delivery to the specified address.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Intellectual Property</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  All content on this website, including text, images, logos, designs, and trademarks, 
                  is the property of Mina or our licensors and is protected by intellectual property laws.
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Restrictions</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>You may not reproduce, distribute, or create derivative works</li>
                    <li>Commercial use of our content is prohibited without permission</li>
                    <li>Our trademark and brand names may not be used without authorization</li>
                    <li>Product designs and patterns are proprietary</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Limitation of Liability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  To the maximum extent permitted by law, Mina shall not be liable for any indirect, 
                  incidental, special, consequential, or punitive damages, including but not limited to 
                  loss of profits, data, or business opportunities.
                </p>
                
                <div>
                  <h4 className="font-medium mb-2">Maximum Liability</h4>
                  <p className="text-sm text-muted-foreground">
                    Our total liability for any claim related to our products or services shall not 
                    exceed the amount you paid for the specific product or service giving rise to the claim.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Governing Law</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  These Terms are governed by and construed in accordance with the laws of Morocco. 
                  Any disputes arising from these Terms or your use of our website shall be subject 
                  to the exclusive jurisdiction of the courts of Morocco.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Changes to Terms</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  We reserve the right to modify these Terms at any time. Changes will be effective 
                  immediately upon posting on the website. Your continued use of the website after 
                  changes constitutes acceptance of the revised Terms.
                </p>
                
                <div className="bg-primary/10 p-4 rounded-lg">
                  <h4 className="font-medium text-primary mb-2">Stay Informed</h4>
                  <p className="text-sm text-muted-foreground">
                    We recommend checking this page periodically to stay informed of any updates 
                    to our Terms and Conditions.
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="bg-muted p-6 rounded-lg">
              <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                Contact Information
              </h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms and Conditions, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium mb-2">Legal Department</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>📧 legal@mina.com</p>
                    <p>📱 WhatsApp: +212 600 000 000</p>
                    <p>📍 Marrakech, Morocco</p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Business Hours</h4>
                  <div className="space-y-1 text-muted-foreground">
                    <p>Monday - Friday: 9 AM - 6 PM</p>
                    <p>Saturday: 10 AM - 4 PM</p>
                    <p>Sunday: Closed</p>
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

export default TermsConditions;