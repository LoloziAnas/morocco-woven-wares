import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import Categories from '@/components/Categories';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <FeaturedProducts />
        <Categories />
        <Newsletter />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
