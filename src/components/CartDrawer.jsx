export default function CartDrawer({ isOpen, closeCart, cartItems, removeItem }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={closeCart}
      />

      {/* Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b">
            <h2 className="text-xl font-bold text-gray-800">Your Cart ({cartItems.length})</h2>
            <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <p className="font-medium text-lg">Your cart is empty</p>
                <p className="text-sm mt-1">Add items to get started</p>
              </div>
            ) : (
              cartItems.map((item, index) => (
                <div key={index} className="flex gap-4 bg-gray-50 p-3 rounded-xl">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="font-medium text-gray-800 text-sm">{item.name}</h3>
                      <p className="text-indigo-600 font-bold">${item.price}</p>
                    </div>
                  </div>
                  <button onClick={() => removeItem(index)} className="text-red-400 hover:text-red-600 text-sm font-medium self-start">
                    Remove
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer */}
          <div className="p-6 border-t bg-gray-50">
            <div className="flex justify-between mb-4">
              <span className="text-gray-600">Subtotal</span>
              <span className="font-bold text-xl text-gray-800">${total.toFixed(2)}</span>
            </div>
            <button className="w-full bg-indigo-600 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 transition-colors shadow-lg shadow-indigo-200 disabled:opacity-50" disabled={cartItems.length === 0}>
              Proceed to Checkout
            </button>
            <button onClick={closeCart} className="w-full mt-2 text-gray-500 py-2 text-sm hover:text-indigo-600 font-medium">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </>
  );
}