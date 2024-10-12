import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import dropboxLogo from '../assets/dropboxLogo.png';

export default function Navbar() {
  return (
    <motion.nav
      className="fixed top-0 w-full z-50 bg-black h-20 shadow-md"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="flex items-center">
          <img src={dropboxLogo} alt="Dropbox Logo" className="w-9 h-9 mr-3" />
          <span className="text-2xl font-bold text-white">Dropbox</span>
          <div className="hidden md:flex ml-8">
            <ul className="flex space-x-6">
              <li className="flex items-center">
                <a href="#" className="text-white text-base font-semibold hover:text-blue-500">Products</a>
                <span className="ml-1 text-white">⌵</span>
              </li>
              <li className="flex items-center">
                <a href="#" className="text-white text-base font-semibold hover:text-blue-500">Solutions</a>
                <span className="ml-1 text-white">⌵</span>
              </li>
              <li>
                <a href="#" className="text-white text-base font-semibold hover:text-blue-500">Enterprise</a>
              </li>
              <li>
                <a href="#" className="text-white text-base font-semibold hover:text-blue-500">Pricing</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center">
            <Globe className="w-5 h-5 text-white mr-2" strokeWidth={1} />
            <button className="text-white text-base font-normal hover:text-blue-500">
              Contact sales
            </button>
          </div>
          <button className="text-white text-base font-normal hover:text-blue-500">Get app</button>
          <button className="text-white text-base font-normal hover:text-blue-500">Sign up</button>
          <button className="text-white text-base font-normal hover:text-blue-500">Log in</button>
          <button className="bg-white text-black text-base font-semibold px-4 py-2 rounded-lg hover:bg-gray-200">
            Get started
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
