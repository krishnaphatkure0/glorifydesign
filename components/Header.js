"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null); // Mock user state
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const toggleNotifications = () => {
    setIsNotificationOpen(!isNotificationOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality - you can implement this based on your needs
      console.log('Searching for:', searchQuery);
      // For now, redirect to a search page
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Categories dropdown data
  const categories = [
    { name: 'Graphics', href: '/categories/graphics', icon: '🎨', description: 'Icons, illustrations & more', count: '2,847', isNew: false },
    { name: 'Templates', href: '/categories/templates', icon: '📄', description: 'Ready-to-use designs', count: '1,923', isNew: true },
    { name: 'Fonts', href: '/categories/fonts', icon: '🔤', description: 'Typography & lettering', count: '756', isNew: false },
    { name: 'Themes', href: '/categories/themes', icon: '🎭', description: 'Complete design systems', count: '432', isNew: false },
    { name: 'UI Kits', href: '/categories/ui-kits', icon: '📱', description: 'Complete interface sets', count: '289', isNew: true },
    { name: 'Mockups', href: '/categories/mockups', icon: '🖼️', description: 'Professional presentations', count: '1,156', isNew: false },
  ];

  // Mock notifications data
  const notifications = [
    { id: 1, title: 'New design trending', message: 'Minimalist UI Kit is now #1 in templates', time: '2m ago', isNew: true },
    { id: 2, title: 'Flash Sale Started', message: '50% off all premium fonts this week', time: '1h ago', isNew: true },
    { id: 3, title: 'Your download is ready', message: 'Modern Logo Pack has been processed', time: '3h ago', isNew: false },
    { id: 4, title: 'New creator joined', message: 'PixelCraft Studio just uploaded 12 new items', time: '1d ago', isNew: false },
  ];

  // Quick access links
  const quickLinks = [
    { name: 'Free Assets', href: '/free', icon: '🎁', badge: 'Popular' },
    { name: 'Best Sellers', href: '/bestsellers', icon: '🔥', badge: null },
    { name: 'New Arrivals', href: '/new', icon: '⭐', badge: 'Today' },
    { name: 'Collections', href: '/collections', icon: '📚', badge: null },
  ];

  // User account menu items
  const userMenuItems = {
    auth: [
      { name: 'Sign In', href: '/login', icon: '🔑' },
      { name: 'Sign Up', href: '/signup', icon: '✨' },
    ],
    user: [
      { name: 'Dashboard', href: '/dashboard', icon: '📊' },
      { name: 'Profile', href: '/profile', icon: '👤' },
      { name: 'Orders', href: '/orders', icon: '📦' },
      { name: 'Settings', href: '/settings', icon: '⚙️' },
    ]
  };

  return (
    <>
      {/* Top Promotional Banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white text-center py-2 text-sm font-medium">
        <div className="flex items-center justify-center space-x-2">
          <span className="animate-pulse">🎉</span>
          <span>Flash Sale: 50% OFF Premium Assets - Use code SAVE50</span>
          <Link href="/shop" className="underline hover:no-underline font-semibold ml-2">Shop Now</Link>
        </div>
      </div>

      <header className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 backdrop-blur-md ${
        isScrolled ? 'bg-white/95 shadow-2xl border-b border-gray-100' : 'bg-white/90 shadow-lg'
      }`}>
        <div className="max-w-full mx-auto px-6">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center group">
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-xl mr-3 group-hover:from-blue-700 group-hover:to-purple-700 group-hover:scale-110 transition-all duration-300 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">GlorifyDesign</span>
                <span className="text-xs text-gray-500 -mt-1 hidden lg:block">Premium Digital Marketplace</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link 
                href="/"
                className={`font-semibold transition-all duration-300 relative group ${
                  pathname === '/' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                  pathname === '/' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
              
              <Link 
                href="/shop"
                className={`font-semibold transition-all duration-300 relative group ${
                  pathname === '/shop' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                Shop
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                  pathname === '/shop' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>

              {/* Quick Links Dropdown */}
              <div className="relative group">
                <button className="font-semibold text-gray-700 hover:text-blue-600 flex items-center transition-all duration-300 relative">
                  Discover
                  <svg className="w-4 h-4 ml-1 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </button>
                <div className="absolute top-full left-0 mt-3 w-64 bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-3">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">Quick Access</div>
                    {quickLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.href}
                        className="flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-blue-100"
                      >
                        <div className="flex items-center">
                          <span className="text-lg mr-3">{link.icon}</span>
                          <span className="font-medium group-hover/item:text-blue-600 transition-colors">{link.name}</span>
                        </div>
                        {link.badge && (
                          <span className="text-xs bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded-full font-semibold">
                            {link.badge}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              {/* Categories Dropdown */}
              <div className="relative group">
                <button className="font-semibold text-gray-700 hover:text-blue-600 flex items-center transition-all duration-300 relative">
                  Categories
                  <svg className="w-4 h-4 ml-2 transform group-hover:rotate-180 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
                </button>
                <div className="absolute top-full left-0 mt-3 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="p-4">
                    <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-4 px-2">Browse Categories</div>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.href}
                          className="flex flex-col items-start p-3 text-gray-700 hover:bg-gradient-to-br hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-blue-100 relative"
                        >
                          {category.isNew && (
                            <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-red-500 to-pink-500 rounded-full"></div>
                          )}
                          <div className="flex items-center w-full mb-2">
                            <div className="p-1.5 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg mr-3 group-hover/item:scale-110 transition-transform duration-300">
                              <span className="text-base">{category.icon}</span>
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-sm text-gray-800 group-hover/item:text-blue-600 transition-colors truncate">{category.name}</div>
                              <div className="text-xs text-gray-500">{category.count}</div>
                            </div>
                          </div>
                          <div className="text-xs text-gray-500 leading-tight">{category.description}</div>
                        </Link>
                      ))}
                    </div>
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link 
                        href="/categories"
                        className="flex items-center justify-center w-full py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300"
                      >
                        View All Categories
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <Link 
                href="/about"
                className={`font-semibold transition-all duration-300 relative group ${
                  pathname === '/about' ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                About
                <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transform transition-transform duration-300 ${
                  pathname === '/about' ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                }`}></span>
              </Link>
            </nav>

            {/* Enhanced Search Bar */}
            <form onSubmit={handleSearch} className="relative flex bg-gray-50 border border-gray-200 rounded-xl overflow-hidden max-w-sm hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="flex items-center pl-4 text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input 
                type="text" 
                placeholder="Search 50K+ assets..." 
                className="bg-transparent px-3 py-3 outline-none flex-1 text-sm placeholder-gray-500"
                value={searchQuery}
                onChange={handleSearchInputChange}
              />
              {searchQuery && (
                <button 
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="px-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
              <button 
                type="submit" 
                className="px-4 text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 group"
              >
                <svg className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </form>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Mobile Search Toggle */}
            <button 
              onClick={toggleSearch}
              className="lg:hidden p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Notifications Bell */}
            <div className="relative group hidden lg:block">
              <button 
                onClick={toggleNotifications}
                className="p-3 text-gray-600 hover:text-yellow-600 hover:bg-yellow-50 rounded-xl transition-all duration-300 relative group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5V9a4 4 0 00-8 0v3l-5 5h5m8 0a2 2 0 01-4 0" />
                </svg>
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg animate-pulse">
                  {notifications.filter(n => n.isNew).length}
                </span>
              </button>
              
              {/* Notifications Dropdown */}
              {isNotificationOpen && (
                <div className="absolute top-full right-0 mt-3 w-80 bg-white border border-gray-100 rounded-2xl shadow-2xl transform transition-all duration-300 z-50">
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-800">Notifications</h3>
                      <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Mark all read</button>
                    </div>
                    
                    <div className="space-y-3 max-h-80 overflow-y-auto">
                      {notifications.map((notification) => (
                        <div key={notification.id} className={`p-3 rounded-xl border transition-all duration-200 ${
                          notification.isNew 
                            ? 'bg-blue-50 border-blue-200 hover:bg-blue-100' 
                            : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                        }`}>
                          <div className="flex items-start">
                            <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0 ${
                              notification.isNew ? 'bg-blue-600' : 'bg-gray-400'
                            }`}></div>
                            <div className="flex-1 min-w-0">
                              <h4 className="font-medium text-gray-900 text-sm mb-1">{notification.title}</h4>
                              <p className="text-gray-600 text-xs leading-relaxed">{notification.message}</p>
                              <p className="text-gray-400 text-xs mt-2">{notification.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-4 pt-3 border-t border-gray-100">
                      <Link 
                        href="/notifications"
                        className="flex items-center justify-center w-full py-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-xl transition-all duration-300"
                        onClick={() => setIsNotificationOpen(false)}
                      >
                        View All Notifications
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="p-3 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 relative group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">3</span>
            </Link>

            {/* Cart */}
            <Link href="/cart" className="p-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300 relative group">
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293A1 1 0 005 16h1.5m5 0a2 2 0 11-4 0M15 19a2 2 0 11-4 0" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold shadow-lg">2</span>
            </Link>

            {/* User Account */}
            <div className="relative group">
              <button className="p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-all duration-300 group">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <div className="absolute top-full right-0 mt-3 w-56 bg-white border border-gray-100 rounded-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-3">
                  <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 px-3">Account</div>
                  
                  {/* Auth Section */}
                  <div className="mb-3">
                    {userMenuItems.auth.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href} 
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-blue-100"
                      >
                        <span className="text-lg mr-3">{item.icon}</span>
                        <span className="font-medium group-hover/item:text-blue-600 transition-colors">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  
                  <hr className="border-gray-100 my-3" />
                  
                  {/* User Section */}
                  <div className="mb-3">
                    {userMenuItems.user.map((item) => (
                      <Link 
                        key={item.name}
                        href={item.href} 
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-gray-50 hover:to-blue-50 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-gray-100"
                      >
                        <span className="text-lg mr-3">{item.icon}</span>
                        <span className="font-medium group-hover/item:text-gray-800 transition-colors">{item.name}</span>
                      </Link>
                    ))}
                  </div>
                  
                  <hr className="border-gray-100 my-3" />
                  
                  <button 
                    className="flex items-center w-full px-4 py-3 text-red-600 hover:bg-red-50 rounded-xl transition-all duration-300 group/item border border-transparent hover:border-red-100"
                    onClick={() => {
                      // Handle sign out functionality
                      console.log('User signed out');
                    }}
                  >
                    <span className="text-lg mr-3">🚪</span>
                    <span className="font-medium">Sign Out</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu}
              className="lg:hidden p-3 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-xl transition-all duration-300"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {isSearchOpen && (
          <div className="lg:hidden py-4 border-t border-gray-100 animate-fadeIn">
            <form onSubmit={handleSearch} className="flex bg-gray-50 border border-gray-200 rounded-xl overflow-hidden hover:border-blue-300 focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all duration-300">
              <input 
                type="text" 
                placeholder="Search designs, templates, fonts..." 
                className="bg-transparent px-5 py-3 outline-none flex-1 text-sm placeholder-gray-500"
                value={searchQuery}
                onChange={handleSearchInputChange}
                autoFocus
              />
              <button 
                type="submit" 
                className="px-4 text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t border-gray-100 bg-white mobile-menu-container animate-slideDown">
            <div className="px-4 pt-4 pb-6 space-y-2">
              <Link 
                href="/"
                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                🏠 Home
              </Link>
              
              <Link 
                href="/shop"
                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                🛍️ Shop
              </Link>

              {/* Mobile Categories */}
              <div className="px-4 py-3">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Categories</div>
                <div className="space-y-2 ml-2">
                  {categories.map((category) => (
                    <Link
                      key={category.name}
                      href={category.href}
                      className="flex items-center py-3 px-3 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-xl transition-all duration-300"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <span className="mr-3 text-lg">{category.icon}</span>
                      <div>
                        <div className="font-medium">{category.name}</div>
                        <div className="text-xs text-gray-400">{category.description}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <Link 
                href="/about"
                className="block px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                ℹ️ About
              </Link>

              <hr className="border-gray-100 my-4" />

              <div className="space-y-2">
                <Link 
                  href="/login"
                  className="flex items-center px-4 py-3 rounded-xl text-base font-semibold text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all duration-300 border border-gray-200 hover:border-blue-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">🔑</span>
                  Sign In
                </Link>
                
                <Link 
                  href="/signup"
                  className="flex items-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="mr-3">✨</span>
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
    </>
  );
};

export default Header;