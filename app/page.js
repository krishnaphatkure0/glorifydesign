
import Link from 'next/link';
import Header from '../components/Header';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Glorify Your Designs
          </h1>
          <p className="text-xl mb-8 opacity-90">
            Discover premium graphics, templates, fonts, and themes from talented creators worldwide
          </p>
          <div className="flex justify-center mb-8">
            <div className="flex bg-white rounded-lg overflow-hidden max-w-md w-full">
              <input 
                type="text" 
                placeholder="Search for graphics, templates, fonts..." 
                className="flex-1 px-4 py-3 text-gray-700 outline-none"
              />
              <button className="bg-blue-600 px-6 py-3 hover:bg-blue-700">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
          <div className="flex justify-center gap-4 text-sm opacity-80">
            <span>Popular:</span>
            <span className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">Business Cards</span>
            <span className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">Logos</span>
            <span className="bg-white/20 px-3 py-1 rounded-full cursor-pointer hover:bg-white/30">Website Templates</span>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Browse Categories</h2>
            <p className="text-gray-600">Find exactly what you're looking for</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Link href="/categories/graphics" className="group">
              <div className="bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg p-8 text-white text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Graphics</h3>
                <p className="opacity-90">Icons, illustrations, and visual elements</p>
                <div className="mt-4 text-sm opacity-80">2,847 items</div>
              </div>
            </Link>

            <Link href="/categories/templates" className="group">
              <div className="bg-gradient-to-br from-green-500 to-teal-500 rounded-lg p-8 text-white text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">📄</div>
                <h3 className="text-xl font-semibold mb-2">Templates</h3>
                <p className="opacity-90">Ready-made designs for any project</p>
                <div className="mt-4 text-sm opacity-80">1,923 items</div>
              </div>
            </Link>

            <Link href="/categories/fonts" className="group">
              <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-lg p-8 text-white text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🔤</div>
                <h3 className="text-xl font-semibold mb-2">Fonts</h3>
                <p className="opacity-90">Premium typography collections</p>
                <div className="mt-4 text-sm opacity-80">756 families</div>
              </div>
            </Link>

            <Link href="/categories/themes" className="group">
              <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-lg p-8 text-white text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">🎭</div>
                <h3 className="text-xl font-semibold mb-2">Themes</h3>
                <p className="opacity-90">Complete design systems</p>
                <div className="mt-4 text-sm opacity-80">432 items</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Trending Products Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Trending Now</h2>
              <p className="text-gray-600">Most popular items this week</p>
            </div>
            <Link href="/shop" className="text-blue-600 hover:text-blue-800 font-medium">
              View All →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200 relative">
                  <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                    Trending
                  </div>
                  <div className="absolute top-3 right-3">
                    <button className="p-2 bg-white rounded-full shadow-sm hover:shadow-md">
                      <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-gray-800 mb-2">Trending Design {i + 1}</h3>
                  <p className="text-sm text-gray-600 mb-3">by Creative Studio</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-xl text-blue-600">${(Math.random() * 30 + 10).toFixed(2)}</span>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-sm">★★★★★</div>
                      <span className="text-xs text-gray-500 ml-2">(124)</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Sellers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Sellers</h2>
            <p className="text-gray-600">Top creators on our platform</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {String.fromCharCode(65 + i)}
                </div>
                <h3 className="font-semibold text-gray-800 mb-2">Creative Studio {i + 1}</h3>
                <p className="text-sm text-gray-600 mb-4">{Math.floor(Math.random() * 500 + 100)} products</p>
                <div className="flex justify-center items-center mb-4">
                  <div className="flex text-yellow-400 text-sm">★★★★★</div>
                  <span className="text-sm text-gray-500 ml-2">4.{Math.floor(Math.random() * 3 + 7)}</span>
                </div>
                <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 text-sm">
                  View Profile
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">50K+</div>
              <div className="text-gray-300">Digital Products</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">10K+</div>
              <div className="text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">2K+</div>
              <div className="text-gray-300">Creative Sellers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">99%</div>
              <div className="text-gray-300">Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Creating?</h2>
          <p className="text-xl mb-8 opacity-90">Join thousands of satisfied customers and sellers</p>
          <div className="flex justify-center gap-4">
            <Link href="/shop" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100">
              Start Shopping
            </Link>
            <Link href="/signup" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600">
              Become a Seller
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
