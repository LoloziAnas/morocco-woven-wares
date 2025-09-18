import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  const lastUpdated = "January 15, 2024";

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground mb-2">
              Your privacy and data security are important to us
            </p>
            <p className="text-sm text-muted-foreground">
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Data Protection</h3>
                <p className="text-sm text-muted-foreground">SSL encrypted security</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Eye className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Transparency</h3>
                <p className="text-sm text-muted-foreground">Clear data usage</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Lock className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Secure Storage</h3>
                <p className="text-sm text-muted-foreground">Protected databases</p>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <UserCheck className="h-12 w-12 mx-auto text-primary mb-4" />
                <h3 className="font-semibold mb-2">Your Rights</h3>
                <p className="text-sm text-muted-foreground">Full control over data</p>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Introduction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  Mina ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy 
                  explains how we collect, use, disclose, and safeguard your information when you visit 
                  our website and use our services.
                </p>
                <p className="text-muted-foreground">
                  By using our website, you agree to the collection and use of information in accordance 
                  with this policy.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information We Collect</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3">Personal Information</h4>
                  <p className="text-muted-foreground mb-2">
                    We collect information you provide directly to us, such as when you:
                  </p>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Create an account or make a purchase</li>
                    <li>Subscribe to our newsletter</li>
                    <li>Contact us for customer support</li>
                    <li>Participate in surveys or promotions</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium mb-3">Information Collected Automatically</h4>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-4">
                    <li>Device information (IP address, browser type, operating system)</li>
                    <li>Usage information (pages visited, time spent, click patterns)</li>
                    <li>Location information (with your consent)</li>
                    <li>Cookies and similar tracking technologies</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How We Use Your Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  We use the information we collect for various purposes, including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-3">Service Delivery</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Process and fulfill orders</li>
                      <li>Provide customer support</li>
                      <li>Send order confirmations and updates</li>
                      <li>Handle returns and exchanges</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-3">Communication & Marketing</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Send newsletters and promotions</li>
                      <li>Notify about new products</li>
                      <li>Conduct surveys and research</li>
                      <li>Personalize your experience</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Information Sharing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, 
                  except in the following circumstances:
                </p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium mb-2">Service Providers</h4>
                    <p className="text-sm text-muted-foreground">
                      We may share information with trusted third-party service providers who assist us in 
                      operating our website, conducting business, or serving you (shipping companies, 
                      payment processors, email services).
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Legal Requirements</h4>
                    <p className="text-sm text-muted-foreground">
                      We may disclose information if required by law, regulation, legal process, or 
                      governmental requests.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Business Transfers</h4>
                    <p className="text-sm text-muted-foreground">
                      In the event of a merger, acquisition, or sale of assets, your information may be 
                      transferred as part of that transaction.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Security</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Technical Safeguards</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>SSL encryption for data transmission</li>
                      <li>Secure servers and databases</li>
                      <li>Regular security audits</li>
                      <li>Access controls and authentication</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Operational Safeguards</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside">
                      <li>Employee training on data protection</li>
                      <li>Limited access to personal information</li>
                      <li>Regular security updates</li>
                      <li>Incident response procedures</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Your Rights and Choices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  You have several rights regarding your personal information:
                </p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">1</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Access and Portability</h4>
                      <p className="text-sm text-muted-foreground">
                        Request a copy of the personal information we hold about you
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">2</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Correction</h4>
                      <p className="text-sm text-muted-foreground">
                        Request correction of inaccurate or incomplete information
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">3</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Deletion</h4>
                      <p className="text-sm text-muted-foreground">
                        Request deletion of your personal information (with certain exceptions)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-primary">4</span>
                    </div>
                    <div>
                      <h4 className="font-medium mb-1">Marketing Opt-out</h4>
                      <p className="text-sm text-muted-foreground">
                        Unsubscribe from marketing communications at any time
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cookies and Tracking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium mb-2">Essential Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Required for website functionality and security
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Analytics Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Help us understand how you use our website
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Marketing Cookies</h4>
                    <p className="text-sm text-muted-foreground">
                      Used to personalize ads and content
                    </p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  You can control cookies through your browser settings. Note that disabling certain 
                  cookies may affect website functionality.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Contact Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="bg-muted p-4 rounded-lg">
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h4 className="font-medium mb-2">Contact Information</h4>
                      <div className="space-y-1 text-muted-foreground">
                        <p>📧 privacy@mina.com</p>
                        <p>📱 WhatsApp: +212 600 000 000</p>
                        <p>📍 Marrakech, Morocco</p>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Response Time</h4>
                      <div className="space-y-1 text-muted-foreground">
                        <p>• Privacy requests: 7-14 days</p>
                        <p>• General inquiries: 1-2 business days</p>
                        <p>• Urgent matters: Within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                Policy Updates
              </h3>
              <p className="text-muted-foreground text-sm">
                We may update this Privacy Policy from time to time. We will notify you of any changes 
                by posting the new Privacy Policy on this page and updating the "Last updated" date. 
                We encourage you to review this Privacy Policy periodically for any changes.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;