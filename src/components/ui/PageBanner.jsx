import React from "react";
import { motion } from "framer-motion";

export default function PageBanner({
  title,
  breadcrumb,
  backgroundImage,
}) {
  return (
    <section
     className="relative h-[40vh] md:h-[50vh] lg:h-[55vh] w-[96%] rounded-3xl mx-auto overflow-hidden flex items-center justify-center"
style={{
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",           // Covers the area without distortion
  backgroundPosition: "center center", // Ensures it's always perfectly centered
  backgroundRepeat: "no-repeat",     // Prevents tiling
  // Optional: remove backgroundAttachment if you don't want parallax
  // backgroundAttachment: "fixed",   // Comment out or remove for better mobile performance
}}
    >
      {/* Elegant Brand Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom, 
              rgba(0,0,0,0.3) 0%, 
              var(--primary-700)/70 60%, 
              var(--primary-700)/90 100%
            ),
            radial-gradient(circle at center bottom, var(--secondary-500)/20 0%, transparent 60%)
          `,
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 drop-shadow-2xl"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="text-lg md:text-xl text-gray-200 font-medium tracking-wide drop-shadow-md"
        >
          {breadcrumb}
        </motion.p>
      </div>

      {/* Optional subtle bottom fade for extra polish */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[var(--primary-700)] to-transparent opacity-50" />
    </section>
  );
}