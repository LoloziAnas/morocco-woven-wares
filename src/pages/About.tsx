import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Heart, Award, Users, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Authentic Heritage',
      description: 'Every piece we create honors centuries of Moroccan craftsmanship and cultural tradition.'
    },
    {
      icon: Award,
      title: 'Master Artisans',
      description: 'Our skilled craftspeople are the guardians of traditional techniques passed down through generations.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'We support local communities by providing fair wages and preserving traditional livelihoods.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Bringing the beauty of Moroccan fashion to customers worldwide while respecting our roots.'
    }
  ];

  const timeline = [
    {
      year: '2008',
      title: 'The Beginning',
      description: 'Founded in the heart of Marrakech with a vision to preserve traditional Moroccan craftsmanship.'
    },
    {
      year: '2012',
      title: 'Master Artisan Network',
      description: 'Established partnerships with over 20 master artisans across Morocco.'
    },
    {
      year: '2016',
      title: 'Global Expansion',
      description: 'Launched international shipping, bringing authentic Moroccan fashion to the world.'
    },
    {
      year: '2020',
      title: 'Digital Innovation',
      description: 'Embraced e-commerce while maintaining our commitment to traditional craftsmanship.'
    },
    {
      year: '2024',
      title: 'Sustainable Future',
      description: 'Leading initiatives in sustainable fashion and cultural preservation.'
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
                Our Story
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Marocaine was born from a deep love for Moroccan culture and a commitment 
                to preserving the ancient art of traditional clothing craftsmanship. 
                Every stitch tells a story, every pattern carries history.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                  Preserving Tradition, Embracing Modernity
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our mission is to bridge the gap between Morocco's rich textile heritage 
                  and contemporary fashion needs. We work directly with master artisans 
                  who have spent decades perfecting their craft, ensuring that every piece 
                  we offer is authentic, high-quality, and culturally respectful.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  From the bustling souks of Marrakech to the coastal workshops of Casablanca, 
                  we source our materials and partner with craftspeople who share our vision 
                  of keeping Moroccan fashion traditions alive for future generations.
                </p>
                <Button asChild size="lg" className="btn-moroccan">
                  <Link to="/shop">
                    Explore Our Collection
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-sand rounded-2xl shadow-elegant p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-serif font-bold text-primary-foreground mb-2">15+</div>
                    <div className="text-primary-foreground/90 text-sm uppercase tracking-wide mb-4">Years of Excellence</div>
                    <div className="text-3xl font-serif font-bold text-primary-foreground mb-2">50+</div>
                    <div className="text-primary-foreground/90 text-sm uppercase tracking-wide mb-4">Master Artisans</div>
                    <div className="text-3xl font-serif font-bold text-primary-foreground mb-2">500+</div>
                    <div className="text-primary-foreground/90 text-sm uppercase tracking-wide">Unique Pieces</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do, from sourcing materials 
                to crafting each piece with care and respect.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-card card-elegant p-6 rounded-2xl h-full flex flex-col items-center">
                    <div className="mb-4 p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-foreground mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 lg:py-20 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to becoming a trusted name in authentic Moroccan fashion.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                        {item.year}
                      </div>
                      {index < timeline.length - 1 && (
                        <div className="w-0.5 h-16 bg-border mt-4" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-serif font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-sand">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-primary-foreground mb-4">
              Join Our Story
            </h2>
            <p className="text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Be part of preserving Moroccan heritage while wearing authentic, 
              handcrafted pieces that celebrate centuries of artisanal excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-foreground text-primary hover:bg-primary-foreground/90">
                <Link to="/shop">
                  Shop Now
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default About;