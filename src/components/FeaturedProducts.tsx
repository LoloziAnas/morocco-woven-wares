import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

// Import product images
import caftanImage from '@/assets/caftan-1.jpg';
import takchitaImage from '@/assets/takchita-1.jpg';
import jellabaImage from '@/assets/jellaba-1.jpg';
import babouchesImage from '@/assets/babouches-1.jpg';

const FeaturedProducts = () => {
  const featuredProducts = [
    {
      id: '1',
      name: 'Emerald Silk Caftan with Gold Embroidery',
      price: 1200,
      originalPrice: 1500,
      image: caftanImage,
      category: 'Caftans',
      isNew: true,
      colors: ['#50C878', '#D4AF37', '#228B22']
    },
    {
      id: '2',
      name: 'Royal Blue Takchita with Silver Threading',
      price: 2800,
      image: takchitaImage,
      category: 'Takchitas',
      colors: ['#003366', '#C0C0C0', '#191970']
    },
    {
      id: '3',
      name: 'Traditional Beige Jellaba with Hood',
      price: 450,
      image: jellabaImage,
      category: 'Jellabas',
      colors: ['#F5F1EB', '#D4B08A', '#8B7355']
    },
    {
      id: '4',
      name: 'Handcrafted Golden Babouches',
      price: 180,
      originalPrice: 220,
      image: babouchesImage,
      category: 'Babouches',
      isNew: true,
      colors: ['#D4AF37', '#CD853F', '#B8860B']
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover our handpicked selection of the finest Moroccan traditional wear, 
            crafted by master artisans with centuries of expertise.
          </p>
          <div className="w-24 h-1 bg-gradient-sand mx-auto rounded-full" />
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Button asChild size="lg" className="btn-moroccan">
            <Link to="/shop">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;