import { useState } from "react";

export default function ProductGrid({ category, products, addToCart }) {
  return (
    <section id={category.id} className="mb-16 scroll-mt-28">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{category.name}</h2>
        <button className="text-indigo-600 text-sm font-semibold hover:underline flex items-center gap-1 group">
          View All 
          <span className="group-hover:translate-x-1 transition-transform">→</span>
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:border-indigo-100 transition-all duration-300 flex flex-col"
          >
            <div className="relative overflow-hidden bg-gray-50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <button 
                onClick={() => addToCart(product)}
                className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-indigo-600 hover:text-white shadow-lg"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-semibold text-gray-800 text-sm leading-tight mb-1 truncate">{product.name}</h3>
              <div className="flex items-center gap-1 mt-1 mb-2">
                 <div className="flex text-yellow-400 text-xs">★★★★★</div>
                 <span className="text-xs text-gray-400">(124)</span>
              </div>
              <div className="mt-auto flex items-end justify-between">
                <div>
                  <span className="text-xs text-gray-400 line-through">${(product.price * 1.2).toFixed(0)}</span>
                  <p className="text-indigo-600 font-bold text-lg">${product.price}</p>
                </div>
                <button 
                  onClick={() => addToCart(product)}
                  className="bg-indigo-50 text-indigo-600 p-2 rounded-lg hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}