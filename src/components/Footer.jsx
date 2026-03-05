import { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-slate-900 text-gray-300 px-4 md:px-12 py-12 mt-16">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-700 pb-8 mb-8 gap-4">
          <div>
            <h3 className="text-xl font-bold text-white">Subscribe to our Newsletter</h3>
            <p className="text-sm text-gray-400">Get the latest updates and deals directly in your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2">
            <input 
              className="flex-1 md:w-64 p-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-indigo-500 outline-none text-sm"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button className="bg-indigo-600 px-6 rounded-lg font-medium hover:bg-indigo-700 transition whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold text-white mb-4 text-lg">TechCompany</h3>
            <p className="text-sm leading-relaxed text-gray-400">
              The biggest selection of electronics, fashion, and more. Pay on delivery.
            </p>
            <div className="flex gap-4 mt-4">
              {/* Social Icons */}
              <a href="#" className="hover:text-white transition">📘</a>
              <a href="#" className="hover:text-white transition">🐦</a>
              <a href="#" className="hover:text-white transition">📸</a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Need Help?</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-indigo-400 cursor-pointer transition">Chat with us</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Help Center</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Contact Us</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">Useful Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-indigo-400 cursor-pointer transition">Track Order</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Returns & Refunds</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Careers</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">Terms & Conditions</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-3">International</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="hover:text-indigo-400 cursor-pointer transition">🇰🇪 Kenya</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">🇺🇬 Uganda</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">🇬🇭 Ghana</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">🇳🇬 Nigeria</li>
              <li className="hover:text-indigo-400 cursor-pointer transition">🇪🇬 Egypt</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 border-t border-slate-800 pt-8">
          <p>© 2023 TechCompany. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="mt-4 md:mt-0 flex items-center gap-2 bg-slate-800 px-4 py-2 rounded-full hover:bg-slate-700 transition"
          >
            Back to Top <span>↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}