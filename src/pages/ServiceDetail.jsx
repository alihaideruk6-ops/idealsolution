import React from "react";
import { useParams } from "react-router-dom";
import servicesData from "../components/data/servicesData";
import PageBanner from "@/components/ui/PageBanner";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Check } from "lucide-react";
import KeyFeaturesSection from "@/components/KeyFeaturesSection";

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesData.find((item) => item.slug === slug);

  if (!service) {
    return <h2 className="text-center py-20">Service Not Found</h2>;
  }

  return (
    <>
      <PageBanner
        title={service.title}
        breadcrumb={`Home / Services / ${service.title}`}
        backgroundImage={service.bannerImage}
      />

      {/* ===== HERO INTRO (TEXT + 2 IMAGES) ===== */}
     <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-[var(--bg-main)] via-[var(--bg-card)] to-[var(--bg-main)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            {/* Subtitle with animated underline */}
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "6rem" }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              className="h-1 bg-[var(--secondary-500)] mb-6 rounded-full"
            />

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-main)] leading-tight mb-8"
            >
              {service.subtitle}
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-12 max-w-2xl"
            >
              {service.intro.description}
            </motion.p>

            {/* CTA Buttons with micro-interactions */}
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.a
                href="/contact"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.7 }}
                whileHover={{ scale: 1.05, y: -4 }}
                whileTap={{ scale: 0.98 }}
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[var(--secondary-500)] px-8 py-5 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <span className="relative z-10">Get a Free Quote</span>
                <motion.span
                  className="absolute inset-0 bg-[var(--secondary-600)]"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.a>

              <motion.a
                href="tel:08001234567"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.8 }}
                whileHover={{ scale: 1.05, y: -4 }}
                className="group inline-flex items-center gap-3 rounded-xl border-2 border-[var(--primary-600)] bg-transparent px-8 py-5 text-lg font-semibold text-[var(--primary-700)] transition-all duration-300 hover:bg-[var(--primary-600)] hover:text-white"
              >
                <Phone className="h-6 w-6 transition-transform group-hover:rotate-12" />
                Call Us Now
              </motion.a>
            </div>
          </motion.div>

          {/* Images - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="order-1 lg:order-2 grid grid-cols-2 gap-6 lg:gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 40, rotate: -6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.4 }}
              whileHover={{ y: -12, rotate: -3, transition: { duration: 0.4 } }}
              className="relative"
            >
              <img
                src={service.intro.images[0]}
                alt={`${service.title} - professional setup`}
                className="rounded-3xl shadow-2xl h-[420px] lg:h-[500px] w-full object-cover border-4 border-white/20"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent opacity-60" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 60, rotate: 6 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.6 }}
              whileHover={{ y: -12, rotate: 3, transition: { duration: 0.4 } }}
              className="relative mt-10 lg:mt-20"
            >
              <img
                src={service.intro.images[1]}
                alt={`${service.title} - results and benefits`}
                className="rounded-3xl shadow-2xl h-[420px] lg:h-[500px] w-full object-cover border-4 border-white/20"
              />
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent opacity-60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>

  
<KeyFeaturesSection service={service}/>
      {/* ===== CTA / CONCLUSION ===== */}
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[var(--primary-600)] via-[var(--primary-700)] to-[var(--primary-800)] text-white">
      {/* Subtle animated glow accents */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 left-1/4 w-96 h-96 bg-[var(--secondary-500)]/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 right-1/3 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{ scale: [1.2, 0.9, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Heading with entrance animation */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight drop-shadow-2xl"
        >
          {service.conclusion.heading}
        </motion.h3>

        {/* Description with fade-in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-xl md:text-2xl text-gray-100 opacity-90 mb-12 leading-relaxed max-w-4xl mx-auto drop-shadow-md"
        >
          {service.conclusion.text}
        </motion.p>

        {/* CTA Button with advanced micro-interactions */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="inline-block"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08, y: -6 }}
            whileTap={{ scale: 0.98 }}
            className="group relative inline-flex items-center gap-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl transition-all duration-500 overflow-hidden"
          >
            {/* Sliding shine effect */}
            <motion.span
              className="absolute inset-0 bg-white/20 -skew-x-12"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.8 }}
            />

            <span className="relative z-10">Start Saving Today</span>

            <motion.svg
              className="w-7 h-7 relative z-10"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
    </>
  );
}
