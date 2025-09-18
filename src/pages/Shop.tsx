import { useState } from 'react';
import { Filter, Grid, List, Search, SlidersHorizontal } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';

// Import product images
import caftanImage from '@/assets/caftan-1.jpg';
import takchitaImage from '@/assets/takchita-1.jpg';
import jellabaImage from '@/assets/jellaba-1.jpg';
import babouchesImage from '@/assets/babouches-1.jpg';

const Shop = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  // Mock products data
  const allProducts = [
    {
      id: '1',
      name: 'Emerald Silk Caftan with Gold Embroidery',
      price: 1200,
      originalPrice: 1500,
      image: caftanImage,
      category: 'caftans',
      isNew: true,
      colors: ['#50C878', '#D4AF37', '#228B22']
    },
    {
      id: '2',
      name: 'Royal Blue Takchita with Silver Threading',
      price: 2800,
      image: takchitaImage,
      category: 'takchitas',
      colors: ['#003366', '#C0C0C0', '#191970']
    },
    {
      id: '3',
      name: 'Traditional Beige Jellaba with Hood',
      price: 450,
      image: jellabaImage,
      category: 'jellabas',
      colors: ['#F5F1EB', '#D4B08A', '#8B7355']
    },
    {
      id: '4',
      name: 'Handcrafted Golden Babouches',
      price: 180,
      originalPrice: 220,
      image: babouchesImage,
      category: 'babouches',
      isNew: true,
      colors: ['#D4AF37', '#CD853F', '#B8860B']
    },
    // Add more duplicate products to show filtering
    {
      id: '5',
      name: 'Burgundy Velvet Caftan',
      price: 1800,
      image: caftanImage,
      category: 'caftans',
      colors: ['#800020', '#D4AF37']
    },
    {
      id: '6',
      name: 'White Wedding Takchita',
      price: 3500,
      image: takchitaImage,
      category: 'takchitas',
      colors: ['#FFFFFF', '#F8F8FF']
    }
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'caftans', label: 'Caftans' },
    { value: 'takchitas', label: 'Takchitas' },
    { value: 'jellabas', label: 'Jellabas' },
    { value: 'babouches', label: 'Babouches' },
    { value: 'accessories', label: 'Accessories' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'newest', label: 'Newest First' },
    { value: 'name', label: 'Name A-Z' }
  ];

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return a.price - b.price;
        case 'price-high':
          return b.price - a.price;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'newest':
          return a.isNew ? -1 : 1;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
            Shop Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Discover our complete collection of authentic Moroccan clothing, 
            handcrafted by skilled artisans using traditional techniques.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            <div className="flex flex-wrap gap-3">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredProducts.length} products
              </span>
              <div className="border-l border-border h-4 mx-2" />
              <Button
                variant={viewMode === 'grid' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? 'default' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Active Filters */}
        {(selectedCategory !== 'all' || searchQuery) && (
          <div className="mb-6 flex flex-wrap gap-2">
            {selectedCategory !== 'all' && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Category: {categories.find(c => c.value === selectedCategory)?.label}
                <button
                  onClick={() => setSelectedCategory('all')}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
            {searchQuery && (
              <Badge variant="secondary" className="flex items-center gap-1">
                Search: "{searchQuery}"
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-1 hover:text-destructive"
                >
                  ×
                </button>
              </Badge>
            )}
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className={`grid gap-6 ${
            viewMode === 'grid' 
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
              : 'grid-cols-1'
          }`}>
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                {...product} 
                category={product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <div className="text-muted-foreground mb-4">
              <SlidersHorizontal className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <h3 className="text-lg font-medium">No products found</h3>
              <p>Try adjusting your search or filter criteria</p>
            </div>
            <Button 
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              variant="outline"
            >
              Clear all filters
            </Button>
          </div>
        )}
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Shop;