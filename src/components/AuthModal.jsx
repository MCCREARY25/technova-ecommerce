export default function AuthModal({ isOpen, closeAuth, mode, setMode }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeAuth} />
      
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 m-4 z-10">
        <button onClick={closeAuth} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {mode === 'login' ? 'Welcome Back!' : 'Create Account'}
        </h2>
        <p className="text-gray-500 text-sm mb-6">
          {mode === 'login' ? 'Enter your credentials to access your account' : 'Join TechNova for exclusive deals'}
        </p>

        <form className="space-y-4">
          {mode === 'signup' && (
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Full Name</label>
              <input type="text" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" placeholder="John Doe" />
            </div>
          )}
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" placeholder="you@example.com" />
          </div>
          
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Password</label>
            <input type="password" className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none" placeholder="••••••••" />
          </div>

          {mode === 'login' && (
            <div className="text-right">
              <a href="#" className="text-sm text-indigo-600 hover:underline">Forgot Password?</a>
            </div>
          )}

          <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-colors mt-4">
            {mode === 'login' ? 'Sign In' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          {mode === 'login' ? (
            <>
              Don't have an account? 
              <button onClick={() => setMode('signup')} className="ml-1 text-indigo-600 font-semibold hover:underline">Sign Up</button>
            </>
          ) : (
            <>
              Already have an account? 
              <button onClick={() => setMode('login')} className="ml-1 text-indigo-600 font-semibold hover:underline">Sign In</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}