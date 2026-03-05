import { categories } from "../data/products";

export default function SidebarMenu({ active, setActive, isOpen, closeSidebar }) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity"
          onClick={closeSidebar}
        />
      )}

      {/* Sidebar Logic */}
      <aside 
        className={`
          fixed lg:sticky top-0 left-0 h-screen bg-white z-50 
          w-72 lg:w-64 flex-shrink-0
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:top-[88px] lg:h-[calc(100vh-88px)]
          border-r border-gray-100
        `}
      >
        <div className="p-4 border-b lg:hidden flex justify-between items-center">
          <span className="font-bold text-lg text-indigo-600">Categories</span>
          <button onClick={closeSidebar} className="p-1 hover:bg-gray-100 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-3 space-y-1 overflow-y-auto h-full pb-20">
          <h3 className="px-3 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider hidden lg:block">
            Shop By Department
          </h3>
          
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                setActive(c.id);
                const el = document.getElementById(c.id);
                el?.scrollIntoView({ behavior: "smooth", block: "start" });
                closeSidebar(); // Close mobile drawer on click
              }}
              className={`
                flex items-center gap-3 w-full p-3 rounded-lg text-left text-sm font-medium transition-all
                ${active === c.id 
                  ? 'bg-indigo-600 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'}
              `}
            >
              <span className="text-xl w-8 text-center">{c.icon}</span>
              <span>{c.name}</span>
            </button>
          ))}
          
          <div className="pt-4 px-2">
             <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-4 border border-indigo-100 mt-4">
                <h4 className="font-bold text-gray-800 text-sm">Need Help?</h4>
                <p className="text-xs text-gray-500 mt-1">Contact our support team 24/7</p>
                <button className="mt-3 w-full bg-white text-indigo-600 text-xs font-bold py-2 rounded-lg shadow-sm hover:shadow-md transition">
                  Live Chat
                </button>
             </div>
          </div>
        </div>
      </aside>
    </>
  );
}