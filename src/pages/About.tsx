import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Heart, Award, Users, Globe, Sparkles, Leaf, Handshake } from 'lucide-react';
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
    { year: '2008', title: 'The Beginning', description: 'Founded in Marrakech to preserve traditional Moroccan craftsmanship.' },
    { year: '2012', title: 'Artisan Network', description: 'Established partnerships with master artisans across Morocco.' },
    { year: '2016', title: 'Global Expansion', description: 'Launched international shipping worldwide.' },
    { year: '2020', title: 'Digital Innovation', description: 'Embraced e-commerce while maintaining traditional values.' },
    { year: '2024', title: 'Sustainable Future', description: 'Leading initiatives in sustainable fashion.' }
  ];

  const teamMembers = [
    {
      name: 'Fatima Zahra',
      role: 'Founder & Creative Director',
      bio: '15+ years in traditional Moroccan textiles, leading our creative vision.'
    },
    {
      name: 'Karim Alami',
      role: 'Master Artisan',
      bio: 'Third-generation craftsman specializing in traditional embroidery.'
    },
    {
      name: 'Amina Benjelloun',
      role: 'Sustainability Officer',
      bio: 'Ensuring our practices respect people and the environment.'
    },
    {
      name: 'Youssef El Mansouri',
      role: 'Customer Experience',
      bio: 'Dedicated to exceptional service for our global community.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">Our Story</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Preserving Moroccan heritage through authentic craftsmanship and sustainable fashion
          </p>
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground leading-relaxed mb-12">
              Mina was born from a deep love for Moroccan culture and a commitment to preserving the ancient art of traditional clothing craftsmanship. Every stitch tells a story, every pattern carries history.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="bg-primary/5 p-8 rounded-2xl">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h2 className="text-3xl font-serif font-semibold text-foreground mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-8">
                To celebrate and preserve Moroccan craftsmanship by creating authentic, high-quality traditional clothing while supporting local artisans and promoting sustainable practices.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mt-10">
                <div className="bg-background p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Sustainability</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Eco-friendly materials and processes that respect our planet.</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Handshake className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Fair Trade</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Fair wages and good working conditions for all artisans.</p>
                </div>
                <div className="bg-background p-6 rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Award className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-medium">Quality</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">Handcrafted with traditional techniques and attention to detail.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-semibold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A passionate group dedicated to preserving Moroccan craftsmanship
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="group">
                <div className="aspect-square overflow-hidden rounded-xl mb-4 bg-gray-100 flex items-center justify-center text-gray-400">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-medium text-foreground">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-20 bg-muted/30 mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Guiding principles that shape our work and relationships
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-card p-6 rounded-2xl h-full flex flex-col items-center">
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

        {/* Timeline Section */}
        <section className="py-16 lg:py-20 bg-background mb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">Our Journey</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Milestones in our story of preserving Moroccan craftsmanship
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
        <section className="py-16 bg-gradient-to-r from-amber-50 to-amber-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-900 mb-4">
              Join Our Story
            </h2>
            <p className="text-amber-800/90 mb-8 max-w-2xl mx-auto">
              Be part of preserving Moroccan heritage with authentic, handcrafted pieces that celebrate centuries of artisanal excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-amber-900 text-amber-50 hover:bg-amber-900/90">
                <Link to="/shop">Shop Now</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-amber-900 text-amber-900 hover:bg-amber-900/10">
                <Link to="/contact">Get in Touch</Link>
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
