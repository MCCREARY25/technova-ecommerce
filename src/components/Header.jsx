import { useState } from "react";

export default function Header({ 
  toggleSidebar, 
  openCart, 
  openAuth, 
  cartCount, 
  isScrolled 
}) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled ? 'shadow-xl bg-white/95 backdrop-blur-sm' : 'bg-white'}`}>
      {/* Main Navigation */}
      <div className="container mx-auto py-3 px-4 md:px-6 flex items-center justify-between gap-4">
        
        {/* Left: Hamburger & Logo */}
        <div className="flex items-center gap-3">
          <button 
            onClick={toggleSidebar} 
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Open menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-1 cursor-pointer" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-2xl font-bold text-indigo-600">Tech</span>
            <span className="text-2xl font-light text-gray-800">Nova</span>
          </div>
        </div>

        {/* Center: Search */}
        <div className="flex-1 max-w-2xl hidden md:block">
          <div className="relative">
            <input 
              type="text"
              className="w-full p-3 pl-10 rounded-full border border-gray-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 outline-none transition text-sm"
              placeholder="Search for iPhones, Laptops, Games..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 text-gray-600">
          {/* Login Button */}
          <button 
            onClick={() => openAuth('login')}
            className="hidden sm:flex items-center gap-2 hover:text-indigo-600 transition-colors text-sm font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <span>Login</span>
          </button>

          {/* Signup Button */}
          <button 
            onClick={() => openAuth('signup')}
            className="hidden sm:block bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-md shadow-indigo-200"
          >
            Sign Up
          </button>

          {/* Cart Button */}
          <button 
            onClick={openCart}
            className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700 group-hover:text-indigo-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Search (shown only on small screens) */}
      <div className="md:hidden px-4 pb-3">
        <div className="relative">
            <input 
              className="w-full p-2 pl-8 rounded-lg bg-gray-100 text-sm outline-none focus:ring-2 focus:ring-indigo-200"
              placeholder="Search products..."
            />
             <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
        </div>
      </div>
    </header>
  );
}