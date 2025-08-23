export default function ProductDetail({ params }) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center text-sm text-gray-600 mb-6">
          <a href="/" className="hover:text-blue-600">Home</a>
          <span className="mx-2">/</span>
          <a href="/shop" className="hover:text-blue-600">Shop</a>
          <span className="mx-2">/</span>
          <span className="text-gray-800">Product Detail</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="aspect-square bg-white rounded-lg shadow-sm mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <div className="text-6xl mb-4">🎨</div>
                  <div className="text-lg">Product Preview</div>
                </div>
              </div>
              <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                New
              </div>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex gap-3">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="w-20 h-20 bg-gray-200 rounded border-2 border-gray-300 hover:border-blue-500 cursor-pointer"></div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              Premium Design Bundle Collection
            </h1>
            
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400 mr-2">★★★★★</div>
              <span className="text-gray-600">(247 reviews)</span>
            </div>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-blue-600 mr-4">$29.99</span>
              <span className="text-lg text-gray-500 line-through">$49.99</span>
              <span className="bg-red-100 text-red-700 px-2 py-1 rounded ml-2 text-sm">40% OFF</span>
            </div>

            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">
                This comprehensive design bundle includes everything you need for your creative projects. 
                Features high-quality graphics, customizable templates, premium fonts, and modern themes 
                suitable for web design, print, and digital marketing.
              </p>
            </div>

            {/* Product Features */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">What's Included:</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  50+ Premium Graphics & Icons
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  20+ Website Templates
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  15 Premium Font Families
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Commercial License Included
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Lifetime Updates
                </li>
              </ul>
            </div>

            {/* File Formats */}
            <div className="mb-6">
              <h3 className="font-semibold text-gray-800 mb-3">File Formats:</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">PSD</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">AI</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">SVG</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">PNG</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">JPG</span>
                <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 mb-6">
              <button className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 font-semibold">
                Add to Cart
              </button>
              <button className="bg-gray-200 text-gray-700 p-3 rounded-lg hover:bg-gray-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </button>
            </div>

            {/* Seller Info */}
            <div className="border-t pt-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                  CS
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Creative Studio Pro</h4>
                  <p className="text-sm text-gray-600">342 products • 4.9★ rating</p>
                </div>
                <button className="ml-auto bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200">
                  View Store
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              <button className="border-b-2 border-blue-500 py-2 px-1 text-blue-600 font-medium">
                Description
              </button>
              <button className="border-b-2 border-transparent py-2 px-1 text-gray-500 hover:text-gray-700">
                Reviews (247)
              </button>
              <button className="border-b-2 border-transparent py-2 px-1 text-gray-500 hover:text-gray-700">
                License
              </button>
              <button className="border-b-2 border-transparent py-2 px-1 text-gray-500 hover:text-gray-700">
                FAQ
              </button>
            </nav>
          </div>

          <div className="mt-8 bg-white rounded-lg p-8">
            <div className="prose max-w-none">
              <h3 className="text-xl font-semibold mb-4">Product Description</h3>
              <p className="text-gray-700 mb-4">
                This premium design bundle is perfect for designers, marketers, and creative professionals 
                looking to elevate their projects. Each element has been carefully crafted with attention 
                to detail and modern design trends.
              </p>
              <p className="text-gray-700 mb-4">
                Whether you're working on web design, print materials, or digital marketing campaigns, 
                this collection provides everything you need to create professional, eye-catching designs 
                that stand out from the competition.
              </p>
              <h4 className="text-lg font-semibold mb-2 mt-6">Technical Specifications:</h4>
              <ul className="list-disc pl-5 text-gray-700">
                <li>High-resolution files (300 DPI for print, optimized for web)</li>
                <li>Organized in clearly labeled folders</li>
                <li>Compatible with Adobe Creative Suite</li>
                <li>Easy to customize and modify</li>
                <li>Comprehensive documentation included</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-200"></div>
                <div className="p-4">
                  <h3 className="font-medium mb-2">Related Product {i + 1}</h3>
                  <p className="text-sm text-gray-600 mb-2">by Designer</p>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-blue-600">${(Math.random() * 40 + 20).toFixed(2)}</span>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 text-xs">★★★★★</div>
                      <span className="text-xs text-gray-500 ml-1">(89)</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}