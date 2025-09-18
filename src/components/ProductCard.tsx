import { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useCart } from '@/contexts/CartContext';
import { useFavorites } from '@/contexts/FavoritesContext';
import { toast } from '@/components/ui/use-toast';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  isNew?: boolean;
  isFavorite?: boolean;
  colors?: string[];
  sizes?: string[];
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew = false,
  isFavorite: initialFavorite = false,
  colors = [],
  sizes = []
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { addToCart } = useCart();
  const { isFavorite: checkIsFavorite, addToFavorites, removeFromFavorites } = useFavorites();
  const isFavorited = checkIsFavorite(id) || initialFavorite;

  const formatPrice = (price: number) => `${price.toLocaleString()} MAD`;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart({
      id,
      name,
      price,
      image,
      size: sizes[0],
      color: colors[0]
    });
    
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    });
  };

  return (
    <Link to={`/products/${id}`} className="block h-full">
      <Card 
        className="overflow-hidden border-border/40 hover:shadow-md transition-shadow duration-300 h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CardContent className="p-0">
          {/* Image Container */}
          <div className="relative overflow-hidden rounded-t-lg">
            <img
              src={image}
              alt={name}
              className="w-full h-64 sm:h-80 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {isNew && (
                <Badge className="bg-accent text-accent-foreground font-medium">
                  New
                </Badge>
              )}
              {originalPrice && originalPrice > price && (
                <Badge variant="destructive" className="font-medium">
                  -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
                </Badge>
              )}
            </div>

            {/* Action Buttons */}
            <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-opacity duration-300 ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}>
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 bg-background/80 backdrop-blur-sm"
                onClick={(e) => {
                  e.stopPropagation();
                  if (isFavorited) {
                    removeFromFavorites(id);
                    toast({
                      title: "Removed from favorites",
                      description: `${name} has been removed from your favorites.`,
                    });
                  } else {
                    addToFavorites({ id, name, price, image });
                    toast({
                      title: "Added to favorites",
                      description: `${name} has been added to your favorites.`,
                    });
                  }
                }}
              >
                <Heart 
                  className={`h-4 w-4 ${isFavorited ? 'fill-red-500 text-red-500' : ''}`} 
                />
              </Button>
              
              <Button
                size="icon"
                variant="secondary"
                className="h-8 w-8 bg-background/80 backdrop-blur-sm"
              >
                <Eye className="h-4 w-4" />
              </Button>
            </div>

            {/* Quick Add to Cart - appears on hover */}
            <div className={`absolute bottom-3 left-3 right-3 transition-all duration-300 ${
              isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              <Button 
                className="w-full btn-moroccan"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-medium text-foreground line-clamp-1">{name}</h3>
                <p className="text-sm text-muted-foreground capitalize">{category}</p>
              </div>
              <div className="text-right">
                <span className="font-medium text-foreground">{formatPrice(price)}</span>
                {originalPrice && originalPrice > price && (
                  <span className="block text-xs text-muted-foreground line-through">
                    {formatPrice(originalPrice)}
                  </span>
                )}
              </div>
            </div>
            
            {colors.length > 0 && (
              <div className="mt-2 flex items-center gap-1">
                {colors.map((color, index) => (
                  <span 
                    key={index}
                    className="w-4 h-4 rounded-full border border-border"
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductCard;