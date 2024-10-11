import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import desktop from '../assets/desktop.png'; // Adjust the path to your desktop image
import mobile from '../assets/mobile.png'; // Adjust the path to your mobile image

export default function AppInterface() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [100, 0]);

  // Video opacity based on scroll, faster transition
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]); // Change 0.5 to 0.3 for quicker fade

  return (
    <div 
      ref={containerRef} 
      className="h-screen relative flex items-center justify-between bg-white"
    >
      {/* Left Video */}
      <motion.video
        src="/video1.mp4" // Place in public/videos/video1.mp4
        autoPlay
        loop
        muted
        style={{
          opacity: videoOpacity,
        }}
        className="w-1/5 h-2/4 object-cover" // Reduced width to 20%
      />

      {/* Center Image (Desktop) */}
      <motion.img
        src={desktop}
        alt="Desktop"
        style={{
          opacity,
          y, // Still animate vertical movement
        }}
        className="w-3/5 h-auto object-contain relative" // Increased width to 60%
      />

      {/* Mobile Image Overlay */}
      <motion.img
        src={mobile}
        alt="Mobile"
        style={{
          opacity,
          y, // Keep the same animation as the desktop image
        }}
        className="absolute w-[15%] h-auto right-[14%] bottom-[18%] object-contain" // Increased bottom value to move image up
      />

      {/* Right Video */}
      <motion.video
        src="/video2.mp4" // Place in public/videos/video2.mp4
        autoPlay
        loop
        muted
        style={{
          opacity: videoOpacity,
        }}
        className="w-1/5 h-2/4 object-cover" // Reduced width to 20%
      />
    </div>
  );
}
