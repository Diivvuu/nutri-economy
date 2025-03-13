'use client';
import React, { CSSProperties, useState } from 'react';
import heroImg from '@/app/assets/pexels-n-voitkevich-7615574.jpg';

const ProductHero = () => {
  // State to track if search has been performed
  const [hasSearched, setHasSearched] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Background image style
  const overlayStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    zIndex: 1,
  };

  // Handle search submission
  const handleSearch = (e: any) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setHasSearched(true);
    }
  };

  return (
    <div
      style={{
        backgroundImage: `url(${heroImg.src})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        position: 'relative',
      }}
      className="min-h-[600px] w-full flex items-center justify-center"
    >
      <div style={overlayStyle}></div>
      <div
        style={{ position: 'relative', zIndex: 2, color: '#eaeaea' }}
        className="container mx-auto px-6 py-16"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            🔸 Medicinal Plant Database
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mt-12">
            {/* Search & Filter Feature - transitions from full width to partial width */}
            <div
              className={`bg-[#ffffff15] p-8 rounded-xl backdrop-blur-sm transition-all duration-500 ease-in-out ${
                hasSearched ? 'md:col-span-5' : 'md:col-span-12'
              }`}
            >
              <h3 className="text-2xl font-semibold mb-6">
                ✅ Search & Filter Feature
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Search by{' '}
                    <em className="font-medium">plant name, disease, region</em>
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>
                    Filters for{' '}
                    <em className="font-medium text-lg">
                      ayurvedic, traditional medicine, and modern supplements
                    </em>
                  </span>
                </li>
              </ul>
              {/* Search box mockup */}
              <form onSubmit={handleSearch} className="mt-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search plants..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full py-3 px-4 rounded-lg bg-[#ffffff25] backdrop-blur-md border border-[#ffffff40] text-white placeholder-[#ffffffaa] focus:outline-none focus:ring-2 focus:ring-green-400"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-green-500 text-white p-2 rounded-lg"
                  >
                    Search
                  </button>
                </div>
                <div className="flex flex-wrap gap-3 mt-4 text-lg">
                  <span className="px-3 py-1 bg-[#ffffff20] rounded-full">
                    Ayurvedic
                  </span>
                  <span className="px-3 py-1 bg-[#ffffff20] rounded-full">
                    Traditional
                  </span>
                  <span className="px-3 py-1 bg-[#ffffff20] rounded-full">
                    Modern
                  </span>
                  <span className="px-3 py-1 bg-[#ffffff20] rounded-full">
                    Herbs
                  </span>
                  <span className="px-3 py-1 bg-[#ffffff20] rounded-full">
                    Roots
                  </span>
                </div>
              </form>
            </div>

            {/* Plant Details Page - only appears after search */}
            {hasSearched && (
              <div
                className="bg-[#ffffff15] p-8 rounded-xl backdrop-blur-sm md:col-span-7 animate-fadeIn"
                style={{
                  animation: 'fadeIn 0.5s ease-in-out',
                }}
              >
                <h3 className="text-2xl font-semibold mb-6">
                  ✅ Search Results
                </h3>

                {/* Plant details mockup */}
                <div className="mt-8 bg-[#ffffff10] p-4 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#ffffff20] rounded-full flex items-center justify-center">
                      🌿
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Ashwagandha</h4>
                      <p className="text-sm italic">Withania somnifera</p>
                    </div>
                  </div>
                  <p className="text-base mb-4">
                    Adaptogenic herb that helps the body manage stress. Supports
                    immune function and promotes overall wellness.
                  </p>
                  <a href="#" className="text-green-300 text-sm underline">
                    View 12 research papers →
                  </a>
                </div>

                <div className="mt-4 bg-[#ffffff10] p-4 rounded-lg">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 bg-[#ffffff20] rounded-full flex items-center justify-center">
                      🌱
                    </div>
                    <div>
                      <h4 className="font-bold text-xl">Tulsi (Holy Basil)</h4>
                      <p className="text-sm italic">Ocimum sanctum</p>
                    </div>
                  </div>
                  <p className="text-base mb-4">
                    Sacred plant in Ayurvedic medicine known for its
                    anti-inflammatory, antioxidant, and adaptogenic properties.
                  </p>
                  <a href="#" className="text-green-300 text-sm underline">
                    View 8 research papers →
                  </a>
                </div>
              </div>
            )}
          </div>

          <div className="mt-12 text-center">
            <button className="bg-green-600 hover:bg-green-700 text-white py-3 px-8 rounded-lg font-medium transition-all">
              Explore All Medicinal Plants
            </button>
          </div>
        </div>
      </div>

      {/* Add a keyframe animation for the fade-in effect */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ProductHero;
