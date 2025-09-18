import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulate newsletter subscription
    setIsSubscribed(true);
    toast({
      title: "Successfully subscribed!",
      description: "You'll receive updates about our latest collections and exclusive offers.",
    });
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubscribed(false);
      setEmail('');
    }, 3000);
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-sand">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div className="mb-8">
            <Mail className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto">
              Be the first to know about new arrivals, exclusive collections, and special offers. 
              Join our community of Moroccan fashion enthusiasts.
            </p>
          </div>

          {/* Newsletter Form */}
          <div className="max-w-md mx-auto">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-background/90 border-background/20 placeholder:text-muted-foreground"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 font-medium px-6"
                >
                  Subscribe
                </Button>
              </form>
            ) : (
              <div className="flex items-center justify-center gap-2 text-primary-foreground">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Thank you for subscribing!</span>
              </div>
            )}
          </div>

          {/* Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 pt-8 border-t border-primary-foreground/20">
            <div className="text-center">
              <div className="text-sm font-medium text-primary-foreground/90">Exclusive Access</div>
              <div className="text-xs text-primary-foreground/70 mt-1">First look at new collections</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-primary-foreground/90">Special Offers</div>
              <div className="text-xs text-primary-foreground/70 mt-1">Subscriber-only discounts</div>
            </div>
            <div className="text-center">
              <div className="text-sm font-medium text-primary-foreground/90">Cultural Stories</div>
              <div className="text-xs text-primary-foreground/70 mt-1">Behind-the-scenes insights</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;