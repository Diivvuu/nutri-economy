'use client';
import React, { useState } from 'react';

const HealthyFoodMarketplace = () => {
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState('all');

  // Sample product data
  const products = [
    {
      id: 1,
      name: 'Organic Quinoa',
      category: 'organic',
      description: 'High-protein ancient grain, perfect for salads and bowls',
      image: '/images/quinoa.jpg', // Replace with actual image path
      brands: [
        { name: "Nature's Path", price: 8.99, available: true },
        { name: "Bob's Red Mill", price: 7.49, available: true },
        { name: 'Whole Foods', price: 9.99, available: false },
      ],
      rating: 4.7,
      reviews: 128,
    },
    {
      id: 2,
      name: 'Spirulina Powder',
      category: 'superfood',
      description:
        'Nutrient-dense blue-green algae with protein and antioxidants',
      image: '/images/spirulina.jpg', // Replace with actual image path
      brands: [
        { name: 'Pure Hawaiian', price: 24.99, available: true },
        { name: 'Organic Burst', price: 19.99, available: true },
        { name: 'Vimergy', price: 29.99, available: true },
      ],
      rating: 4.5,
      reviews: 86,
    },
    {
      id: 3,
      name: 'Vitamin D3 + K2',
      category: 'supplement',
      description: 'Supports bone health and immune function',
      image: '/images/vitamind.jpg', // Replace with actual image path
      brands: [
        { name: 'Thorne', price: 23.99, available: true },
        { name: 'Nordic Naturals', price: 19.99, available: false },
        { name: 'Now Foods', price: 15.99, available: true },
      ],
      rating: 4.8,
      reviews: 203,
    },
    {
      id: 4,
      name: 'Organic Chia Seeds',
      category: 'organic',
      description: 'Rich in omega-3 fatty acids, fiber, and protein',
      image: '/images/chia.jpg', // Replace with actual image path
      brands: [
        { name: 'Navitas Organics', price: 11.99, available: true },
        { name: 'Nutiva', price: 9.99, available: true },
        { name: 'Spectrum', price: 12.99, available: false },
      ],
      rating: 4.6,
      reviews: 157,
    },
    {
      id: 5,
      name: 'Maca Root Powder',
      category: 'superfood',
      description: 'Peruvian root known for energy and hormonal balance',
      image: '/images/maca.jpg', // Replace with actual image path
      brands: [
        { name: 'Sunfood', price: 18.99, available: true },
        { name: 'Terrasoul', price: 16.99, available: true },
        { name: 'Gaia Herbs', price: 21.99, available: false },
      ],
      rating: 4.4,
      reviews: 92,
    },
    {
      id: 6,
      name: 'Magnesium Glycinate',
      category: 'supplement',
      description:
        'Highly absorbable form of magnesium for relaxation and sleep',
      image: '/images/magnesium.jpg', // Replace with actual image path
      brands: [
        { name: 'Pure Encapsulations', price: 27.99, available: true },
        { name: "Doctor's Best", price: 19.99, available: true },
        { name: 'Life Extension', price: 24.99, available: true },
      ],
      rating: 4.9,
      reviews: 176,
    },
  ];

  // Filter products based on active category
  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory);

  return (
    <div className="bg-primary text-secondary py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Healthy Food Marketplace
        </h2>

        {/* Category Filters */}
        <div className="mb-10">
          {/* <h3 className="text-2xl font-semibold mb-6">✅ Category Filters</h3> */}
          <div className="flex flex-wrap gap-4 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === 'all'
                  ? 'bg-green-600 text-white'
                  : 'bg-[#ffffff20] hover:bg-[#ffffff30]'
              }`}
            >
              All Products
            </button>
            <button
              onClick={() => setActiveCategory('organic')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === 'organic'
                  ? 'bg-green-600 text-white'
                  : 'bg-[#ffffff20] hover:bg-[#ffffff30]'
              }`}
            >
              Organic Foods
            </button>
            <button
              onClick={() => setActiveCategory('supplement')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === 'supplement'
                  ? 'bg-green-600 text-white'
                  : 'bg-[#ffffff20] hover:bg-[#ffffff30]'
              }`}
            >
              Supplements
            </button>
            <button
              onClick={() => setActiveCategory('superfood')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeCategory === 'superfood'
                  ? 'bg-green-600 text-white'
                  : 'bg-[#ffffff20] hover:bg-[#ffffff30]'
              }`}
            >
              Superfoods
            </button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#ffffff15] rounded-xl overflow-hidden backdrop-blur-sm transition-all hover:transform hover:scale-[1.02]"
            >
              {/* Product Image */}
              <div className="h-48 bg-[#ffffff10] flex items-center justify-center">
                {/* Replace with actual image */}
                <div className="text-4xl">
                  {product.category === 'organic'
                    ? '🌱'
                    : product.category === 'superfood'
                    ? '🍃'
                    : '💊'}
                </div>
              </div>

              {/* Product Details */}
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <span className="bg-[#ffffff20] px-3 py-1 rounded-full text-xs">
                    {product.category === 'organic'
                      ? 'Organic'
                      : product.category === 'superfood'
                      ? 'Superfood'
                      : 'Supplement'}
                  </span>
                </div>

                <p className="text-sm mb-4 text-[#ffffffcc]">
                  {product.description}
                </p>

                {/* Price Comparison */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">
                    ✅ Price Comparison
                  </h4>
                  <div className="space-y-2">
                    {product.brands.map((brand, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center text-sm"
                      >
                        <span>{brand.name}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-medium">${brand.price}</span>
                          {brand.available ? (
                            <span className="text-green-400 text-xs">
                              In Stock
                            </span>
                          ) : (
                            <span className="text-red-400 text-xs">
                              Out of Stock
                            </span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* User Reviews & Ratings */}
                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    ✅ User Reviews & Ratings
                  </h4>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < Math.floor(product.rating) ? '★' : '☆'}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-medium">
                      {product.rating}
                    </span>
                    <span className="text-xs text-[#ffffffaa]">
                      ({product.reviews} reviews)
                    </span>
                  </div>
                </div>

                {/* Add to Cart Button */}
                <button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="mt-12 text-center">
          <button className="bg-[#ffffff20] hover:bg-[#ffffff30] px-8 py-3 rounded-lg transition-all">
            Show More Products
          </button>
        </div>
      </div>
    </div>
  );
};

export default HealthyFoodMarketplace;
