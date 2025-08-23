import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center px-4">
        {/* 404 Illustration */}
        <div className="mb-8">
          <div className="text-9xl font-bold text-blue-600 mb-4">404</div>
          <div className="text-6xl mb-4">🎨</div>
        </div>

        {/* Error Message */}
        <div className="max-w-md mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Oops! Page Not Found
          </h1>
          <p className="text-gray-600 mb-8 leading-relaxed">
            The page you're looking for seems to have gone on a creative adventure. 
            Let's get you back to discovering amazing designs!
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Go Home
            </Link>
            <Link 
              href="/shop"
              className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Browse Shop
            </Link>
          </div>

          {/* Quick Links */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
              Popular Destinations
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Link 
                href="/categories/graphics"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Graphics & Icons
              </Link>
              <Link 
                href="/categories/templates"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Templates
              </Link>
              <Link 
                href="/categories/fonts"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Fonts
              </Link>
              <Link 
                href="/categories/themes"
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                Themes
              </Link>
            </div>
          </div>

          {/* Search Bar */}
          <div className="mt-8">
            <p className="text-gray-600 mb-4">Or search for what you need:</p>
            <div className="flex bg-white rounded-lg shadow-sm overflow-hidden border">
              <input 
                type="text" 
                placeholder="Search designs..." 
                className="flex-1 px-4 py-3 outline-none"
              />
              <button className="bg-blue-600 px-6 py-3 text-white hover:bg-blue-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Help Section */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-800 mb-2">Need Help?</h4>
            <p className="text-blue-700 text-sm mb-3">
              If you think this is an error, please let us know.
            </p>
            <Link 
              href="/contact"
              className="text-blue-600 hover:text-blue-800 font-medium text-sm"
            >
              Contact Support →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}