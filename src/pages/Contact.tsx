import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    setIsSubmitting(false);
  };

  const handleWhatsApp = () => {
    const message = 'Hello! I would like to get in touch regarding your Moroccan clothing collection.';
    const url = `https://wa.me/+212600000000?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Our Showroom',
      details: ['Medina Quarter, Marrakech', 'Morocco 40000'],
      color: 'text-red-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+212 600 000 000', '+212 500 000 000'],
      color: 'text-blue-500'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@marocaine.com', 'support@marocaine.com'],
      color: 'text-green-500'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 4:00 PM'],
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-24 hero-gradient">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Have questions about our collection? Need styling advice? 
                We're here to help you find the perfect Moroccan piece.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactInfo.map((info, index) => (
                <Card key={index} className="card-elegant text-center group hover:scale-105 transition-transform duration-300">
                  <CardContent className="p-6">
                    <div className={`inline-flex p-3 rounded-full bg-muted mb-4 group-hover:bg-primary/10 transition-colors duration-300`}>
                      <info.icon className={`h-6 w-6 ${info.color}`} />
                    </div>
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-muted-foreground text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form & Quick Actions */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="card-elegant">
                <CardHeader>
                  <CardTitle className="font-serif text-2xl text-foreground">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+212 600 000 000"
                        />
                      </div>
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                          Subject *
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          required
                          placeholder="How can we help?"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        placeholder="Tell us more about your inquiry..."
                        className="resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full btn-moroccan" 
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Need Immediate Help?
                </h2>
                <div className="space-y-6">
                  {/* WhatsApp */}
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-green-100 rounded-full">
                          <MessageCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-serif text-lg font-semibold text-foreground mb-2">
                            WhatsApp Support
                          </h3>
                          <p className="text-muted-foreground mb-4 text-sm">
                            Get instant help from our team. Perfect for quick questions 
                            about sizing, availability, or order status.
                          </p>
                          <Button onClick={handleWhatsApp} className="whatsapp-btn">
                            <MessageCircle className="mr-2 h-4 w-4" />
                            Chat on WhatsApp
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* FAQs */}
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                        Frequently Asked Questions
                      </h3>
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-medium text-foreground text-sm">Shipping & Delivery</h4>
                          <p className="text-muted-foreground text-xs">
                            We ship worldwide with tracking included
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">Size Guide</h4>
                          <p className="text-muted-foreground text-xs">
                            Detailed measurements for all our pieces
                          </p>
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground text-sm">Custom Orders</h4>
                          <p className="text-muted-foreground text-xs">
                            Bespoke pieces made to your specifications
                          </p>
                        </div>
                      </div>
                      <Button variant="outline" className="w-full mt-4">
                        View All FAQs
                      </Button>
                    </CardContent>
                  </Card>

                  {/* Operating Hours */}
                  <Card className="card-elegant">
                    <CardContent className="p-6">
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-4">
                        Response Times
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Email:</span>
                          <span className="text-foreground font-medium">Within 24 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">WhatsApp:</span>
                          <span className="text-foreground font-medium">Within 2 hours</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Phone:</span>
                          <span className="text-foreground font-medium">Immediate</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Contact;