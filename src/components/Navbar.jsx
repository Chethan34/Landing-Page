import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';
import dropboxLogo from '../assets/dropboxLogo.png';

export default function Navbar() {
    return (
        <motion.nav
            className="fixed w-full z-50 bg-black h-20"
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
                                <a href="#" className="text-white text-base font-semibold hover:text-gray-300">Products</a>
                                <span className="ml-1 text-white">⌵</span>
                            </li>
                            <li className="flex items-center">
                                <a href="#" className="text-white text-base font-semibold hover:text-gray-300">Solutions</a>
                                <span className="ml-1 text-white">⌵</span>
                            </li>
                            <li><a href="#" className="text-white text-base font-semibold hover:text-gray-300">Enterprise</a></li>
                            <li><a href="#" className="text-white text-base font-semibold hover:text-gray-300">Pricing</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex items-center space-x-4">
                    <button className="text-white text-base font-normal flex items-center hover:text-gray-300">
                        <Globe className="w-5 h-5 mr-2 text-white" strokeWidth={1} />
                        Contact sales
                    </button>
                    <button className="text-white text-base font-normal hover:text-gray-300">Get app</button>
                    <button className="text-white text-base font-normal hover:text-gray-300">Sign up</button>
                    <button className="text-white text-base font-normal hover:text-gray-300">Log in</button>
                    <button className="bg-white text-black text-base font-semibold px-4 py-2 rounded-lg hover:bg-gray-200">
                        Get started
                    </button>
                </div>
            </div>
        </motion.nav>
    );
}