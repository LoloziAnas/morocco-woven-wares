import { useState } from 'react';
import { Heart, ShoppingCart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

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
}

const ProductCard = ({ 
  id, 
  name, 
  price, 
  originalPrice, 
  image, 
  category, 
  isNew = false,
  isFavorite = false,
  colors = []
}: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [favorited, setFavorited] = useState(isFavorite);

  const formatPrice = (price: number) => `${price.toLocaleString()} MAD`;

  return (
    <Card 
      className="product-card card-elegant cursor-pointer group"
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
            {originalPrice && (
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
                setFavorited(!favorited);
              }}
            >
              <Heart 
                className={`h-4 w-4 ${favorited ? 'fill-red-500 text-red-500' : ''}`} 
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
            <Button className="w-full btn-moroccan">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </Button>
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <div className="mb-2">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">
              {category}
            </p>
          </div>
          
          <h3 className="font-serif text-lg font-semibold text-foreground mb-2 line-clamp-2">
            {name}
          </h3>

          {/* Colors */}
          {colors.length > 0 && (
            <div className="flex gap-1 mb-3">
              {colors.slice(0, 4).map((color, index) => (
                <div
                  key={index}
                  className="w-4 h-4 rounded-full border border-border"
                  style={{ backgroundColor: color }}
                />
              ))}
              {colors.length > 4 && (
                <div className="text-xs text-muted-foreground ml-1">
                  +{colors.length - 4}
                </div>
              )}
            </div>
          )}

          {/* Price */}
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-primary">
              {formatPrice(price)}
            </span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;