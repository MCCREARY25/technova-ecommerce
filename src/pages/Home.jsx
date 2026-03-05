import { useState, useEffect } from "react";
import Header from "../components/Header";
import SidebarMenu from "../components/SidebarMenu";
import ProductGrid from "../components/ProductGrid";
import Footer from "../components/Footer";
import CartDrawer from "../components/CartDrawer";
import AuthModal from "../components/AuthModal";
import { categories, productsData } from "../data/products";

export default function Home() {
  // State Management
  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' or 'signup'
  const [cartItems, setCartItems] = useState([]);
  const [isScrolled, setIsScrolled] = useState(false);

  // Effects
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);
  
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const openAuth = (mode) => {
    setAuthMode(mode);
    setIsAuthOpen(true);
  };
  const closeAuth = () => setIsAuthOpen(false);

  const addToCart = (product) => {
    setCartItems((prev) => [...prev, product]);
  };

  const removeItem = (index) => {
    setCartItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header 
        toggleSidebar={toggleSidebar}
        openCart={openCart}
        openAuth={openAuth}
        cartCount={cartItems.length}
        isScrolled={isScrolled}
      />

      <div className="flex flex-1 relative">
        {/* Sidebar passes state down */}
        <SidebarMenu 
          active={activeCategory}
          setActive={setActiveCategory}
          isOpen={isSidebarOpen}
          closeSidebar={closeSidebar}
        />

        {/* Main Content */}
        <main className="flex-1 p-4 md:p-8 overflow-x-hidden">
          <div className="mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-6 md:p-10 text-white shadow-lg">
            <h1 className="text-2xl md:text-4xl font-bold mb-2">Next-Gen Tech Awaits</h1>
            <p className="text-indigo-100 mb-4 text-sm md:text-base">Get the latest devices with exclusive student discounts.</p>
            <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-bold text-sm hover:bg-indigo-50 transition shadow-md">
              Shop Deals
            </button>
          </div>

          {categories.map((cat) => (
            <ProductGrid 
              key={cat.id} 
              category={cat} 
              products={productsData[cat.id] || []} 
              addToCart={addToCart}
            />
          ))}
        </main>
      </div>

      <Footer />

      {/* Modals & Drawers */}
      <CartDrawer 
        isOpen={isCartOpen} 
        closeCart={closeCart} 
        cartItems={cartItems}
        removeItem={removeItem}
      />
      
      {/* CORRECTED LINE BELOW: Changed setMode to setAuthMode */}
      <AuthModal 
        isOpen={isAuthOpen} 
        closeAuth={closeAuth} 
        mode={authMode}
        setMode={setAuthMode}
      />
    </div>
  );
}