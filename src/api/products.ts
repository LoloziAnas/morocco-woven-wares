// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Emerald Silk Caftan with Gold Embroidery',
    price: 1200,
    originalPrice: 1500,
    description: 'Luxurious emerald green silk caftan featuring intricate gold embroidery. Perfect for special occasions.',
    category: 'caftan',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    colors: ['#15803d'],
    sizes: ['S', 'M', 'L', 'XL'],
    isNew: true,
    rating: 4.8,
    reviews: 24,
    inStock: true,
  },
  {
    id: '2',
    name: 'Royal Blue Takchita Set',
    price: 1800,
    originalPrice: 2200,
    description: 'Elegant royal blue takchita set with silver embroidery, perfect for weddings and special events.',
    category: 'takchita',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    colors: ['#1e40af'],
    sizes: ['S', 'M', 'L'],
    isNew: true,
    rating: 4.9,
    reviews: 18,
    inStock: true,
  },
  {
    id: '3',
    name: 'Traditional Jellaba with Hood',
    price: 850,
    description: 'Comfortable and stylish traditional jellaba with hood, perfect for daily wear.',
    category: 'jellaba',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    colors: ['#1c1917', '#713f12'],
    sizes: ['S', 'M', 'L', 'XL', 'XXL'],
    rating: 4.6,
    reviews: 32,
    inStock: true,
  },
  {
    id: '4',
    name: 'Handmade Leather Babouches',
    price: 350,
    description: 'Authentic handmade leather babouches, available in multiple colors.',
    category: 'shoes',
    images: [
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
    ],
    colors: ['#b91c1c', '#1e3a8a', '#1a2e05'],
    sizes: ['36', '37', '38', '39', '40', '41', '42'],
    rating: 4.7,
    reviews: 45,
    inStock: true,
  },
];

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Get all products
export const getProducts = async () => {
  await delay(300); // Simulate network delay
  return [...mockProducts];
};

// Get product by ID
export const getProductById = async (id: string) => {
  await delay(200); // Simulate network delay
  const product = mockProducts.find(p => p.id === id);
  return product ? { ...product } : null;
};

// Get products by category
export const getProductsByCategory = async (category: string) => {
  await delay(300);
  return mockProducts.filter(p => p.category === category);
};

// Get related products
export const getRelatedProducts = async (productId: string, limit = 4) => {
  await delay(200);
  const product = mockProducts.find(p => p.id === productId);
  if (!product) return [];
  
  return mockProducts
    .filter(p => p.id !== productId && p.category === product.category)
    .slice(0, limit);
};

// Get featured products
export const getFeaturedProducts = async (limit = 4) => {
  await delay(300);
  return [...mockProducts].sort(() => 0.5 - Math.random()).slice(0, limit);
};

// Get new arrivals
export const getNewArrivals = async (limit = 4) => {
  await delay(300);
  return [...mockProducts]
    .filter(p => p.isNew)
    .sort(() => 0.5 - Math.random())
    .slice(0, limit);
};
