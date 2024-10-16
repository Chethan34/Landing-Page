import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="pt-40 md:pt-48 bg-black min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 pb-32"> {/* Reduced bottom padding */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 whitespace-nowrap">
            Get to work, with a lot less work
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Dropbox delivers tools that help you move your work forward faster, keep it safe, and let you collaborate with ease.
          </p>
          <div className="flex justify-center items-start gap-8">
            <div className="flex flex-col items-center">
              <button className="bg-[#0061FF] text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-medium">
                Sign up free →
              </button>
              <p className="text-sm text-gray-400 mt-4">No credit card required.</p>
            </div>
            <button className="text-white text-lg font-medium underline hover:no-underline mt-3">
              Find your plan →
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}