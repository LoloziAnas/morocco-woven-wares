import { Link } from 'react-router-dom';
import { Heart, ArrowLeft } from 'lucide-react';
import { useFavorites } from '@/contexts/FavoritesContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import Breadcrumbs from '@/components/Breadcrumbs';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';

const Favorites = () => {
  const { favorites, removeFromFavorites } = useFavorites();

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Breadcrumbs />
          
          <div className="text-center py-16">
            <Heart className="h-24 w-24 mx-auto text-muted-foreground/50 mb-6" />
            <h1 className="text-3xl font-serif font-bold text-foreground mb-4">
              Your Favorites is Empty
            </h1>
            <p className="text-muted-foreground mb-8 max-w-md mx-auto">
              Save items you love to your favorites
            </p>
            <Button asChild size="lg" className="btn-moroccan">
              <Link to="/shop">
                Continue Shopping
              </Link>
            </Button>
          </div>
        </main>

        <Footer />
        <WhatsAppButton />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs />
        
        <div className="mb-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-serif font-bold text-foreground">
              Your Favorites
            </h1>
            <Button variant="outline" asChild>
              <Link to="/shop" className="flex items-center">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Continue Shopping
              </Link>
            </Button>
          </div>
          <p className="text-muted-foreground mt-2">
            {favorites.length} {favorites.length === 1 ? 'item' : 'items'} in your favorites
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {favorites.map((item) => (
            <Card key={item.id} className="group relative overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2 h-9 w-9 rounded-full bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => removeFromFavorites(item.id)}
                >
                  <Heart className="h-5 w-5 fill-red-500 text-red-500" />
                </Button>
              </div>
              <CardContent className="p-4">
                <h3 className="font-medium text-foreground line-clamp-2 mb-1">
                  {item.name}
                </h3>
                <p className="font-medium text-foreground">
                  {formatPrice(item.price)}
                </p>
                <Button variant="outline" className="w-full mt-3" asChild>
                  <Link to={`/product/${item.id}`}>
                    View Product
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Favorites;
