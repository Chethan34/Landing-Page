import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import desktop from '../assets/desktop.png';
import mobile from '../assets/mobile.png';

export default function ScrollSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);
  const videoOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  
  // Increase brightness on scroll
  const brightness = useTransform(scrollYProgress, [0, 0.5], ['1.5', '1']); // Start even brighter

  return (
    <div 
      ref={containerRef} 
      className="h-screen relative flex items-center justify-between bg-black -mt-60"
    >
      {/* Left Video */}
      <motion.video
        src="/video1.mp4"
        autoPlay
        loop
        muted
        style={{
          opacity: videoOpacity,
          filter: brightness, // Apply brightness filter
        }}
        className="w-1/5 h-3/5 object-cover"
      />
      
      {/* Center Image (Desktop) */}
      <motion.img
        src={desktop}
        alt="Desktop"
        style={{
          opacity,
          y,
          filter: brightness, // Apply brightness filter
        }}
        className="w-3/5 h-auto object-contain relative z-10"
      />

      {/* Mobile Image Overlay */}
      <motion.img
        src={mobile}
        alt="Mobile"
        style={{
          opacity,
          y,
          filter: brightness, // Apply brightness filter
        }}
        className="absolute w-[15%] h-auto right-[14%] bottom-[15%] object-contain z-20"
      />
      
      {/* Right Video */}
      <motion.video
        src="/video2.mp4"
        autoPlay
        loop
        muted
        style={{
          opacity: videoOpacity,
          filter: brightness, // Apply brightness filter
        }}
        className="w-1/5 h-3/5 object-cover"
      />
    </div>
  );
}