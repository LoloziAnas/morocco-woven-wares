import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = [
    {
      name: 'Caftans',
      description: 'Elegant flowing robes perfect for special occasions',
      image: '/api/placeholder/400/300',
      href: '/shop?category=caftans',
      color: 'from-emerald-500 to-emerald-600'
    },
    {
      name: 'Takchitas',
      description: 'Luxurious two-piece formal wear for celebrations',
      image: '/api/placeholder/400/300',
      href: '/shop?category=takchitas',
      color: 'from-blue-600 to-blue-700'
    },
    {
      name: 'Jellabas',
      description: 'Traditional hooded robes for everyday elegance',
      image: '/api/placeholder/400/300',
      href: '/shop?category=jellabas',
      color: 'from-amber-500 to-amber-600'
    },
    {
      name: 'Babouches',
      description: 'Handcrafted leather slippers with intricate details',
      image: '/api/placeholder/400/300',
      href: '/shop?category=babouches',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our diverse collection of authentic Moroccan clothing, 
            each category representing centuries of cultural heritage.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-2xl bg-card card-elegant h-80 flex flex-col justify-end p-6 transition-all duration-300 hover:scale-105"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10 group-hover:opacity-20 transition-opacity duration-300`} />
              
              {/* Pattern Overlay */}
              <div className="absolute inset-0 moroccan-pattern opacity-20" />
              
              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;