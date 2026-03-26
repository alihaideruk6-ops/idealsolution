import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";


export default function KeyFeaturesSection({service}) {
  const features = service.features.list;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-[var(--bg-main)] relative overflow-hidden">
      {/* Animated background glows for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-0 w-96 h-96 bg-[var(--secondary-500)]/8 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-0 w-80 h-80 bg-[var(--primary-500)]/8 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 0.9, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header with smooth entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-20"
        >
          {/* Animated accent line */}
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "8rem" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="h-1.5 bg-gradient-to-r from-transparent via-[var(--secondary-500)] to-transparent mx-auto mb-8 rounded-full"
          />

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] mb-6 leading-tight"
          >
            {service.features.heading}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed"
          >
            {service.features.description}
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -16,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              className="group relative bg-[var(--bg-card)] backdrop-blur-sm p-8 lg:p-10 rounded-3xl border border-[var(--border-color)] shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-[var(--secondary-500)]/10 via-transparent to-[var(--primary-500)]/5 opacity-0 group-hover:opacity-100"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Animated Icon with pulsing glow + micro rotate */}
              <motion.div
                className="relative z-10 w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br from-[var(--secondary-500)] to-[var(--secondary-600)] flex items-center justify-center shadow-2xl"
                whileHover={{ 
                  scale: 1.2,
                  rotate: 12,
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px rgba(46, 158, 79, 0.3)",
                    "0 0 40px rgba(46, 158, 79, 0.5)",
                    "0 0 20px rgba(46, 158, 79, 0.3)",
                  ],
                }}
                transition={{ 
                  boxShadow: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                  rotate: { duration: 0.4 }
                }}
              >
                <Check className="w-8 h-8 text-white" strokeWidth={3} />
              </motion.div>

              {/* Feature Text */}
              <p className="relative z-10 text-lg lg:text-xl font-semibold text-[var(--text-main)] leading-relaxed group-hover:text-[var(--secondary-600)] transition-colors duration-500">
                {feature}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}