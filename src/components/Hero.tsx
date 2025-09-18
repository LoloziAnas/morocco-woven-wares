import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-image.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 moroccan-pattern opacity-30" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
              Mina Collection
              <span className="block text-primary">Authentic</span>
              Moroccan Elegance
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl leading-relaxed">
              Discover handcrafted traditional Moroccan clothing. From luxurious caftans to elegant takchitas, 
              each piece tells a story of heritage and artisanal excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="btn-moroccan">
                <Link to="/shop">
                  Shop Collection
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                <Link to="/about">
                  Our Story
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-border">
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">500+</div>
                <div className="text-sm text-muted-foreground">Handcrafted Items</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">50+</div>
                <div className="text-sm text-muted-foreground">Master Artisans</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-serif font-bold text-primary">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative">
              <img
                src={heroImage}
                alt="Elegant Moroccan woman in traditional caftan"
                className="w-full h-[600px] lg:h-[700px] object-cover rounded-2xl shadow-moroccan"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent rounded-full opacity-20 animate-pulse" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary rounded-full opacity-30 animate-pulse delay-1000" />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;