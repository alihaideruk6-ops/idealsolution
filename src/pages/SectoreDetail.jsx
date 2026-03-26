// src/pages/SectorDetail.jsx or wherever you keep pages
import React from "react";
import { useParams } from "react-router-dom";
import sectorsData from "@/components/data/sectorsData"; // adjust path
import PageBanner from "@/components/ui/PageBanner";
import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import KeyFeaturesSection from "@/components/KeyFeaturesSection"; // reuse if possible

export default function SectorDetail() {
  const { slug } = useParams();
  const sector = sectorsData.find((item) => item.slug === slug);

  if (!sector) {
    return <h2 className="text-center py-20 text-3xl">Sector Not Found</h2>;
  }

  return (
    <>
      <PageBanner
        title={sector.title}
        breadcrumb={`Home / Sectors / ${sector.title}`}
        backgroundImage={sector.bannerImage}
      />

      {/* HERO INTRO SECTION */}
      <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-br from-[var(--bg-main)] via-[var(--bg-card)] to-[var(--bg-main)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="order-2 lg:order-1"
            >
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
                {sector.subtitle}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed mb-12 max-w-2xl"
              >
                {sector.intro.description}
              </motion.p>

              <div className="flex flex-col sm:flex-row gap-5">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-[var(--secondary-500)] px-8 py-5 text-lg font-bold text-white shadow-xl hover:shadow-2xl"
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
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group inline-flex items-center gap-3 rounded-xl border-2 border-[var(--primary-600)] bg-transparent px-8 py-5 text-lg font-semibold text-[var(--primary-700)] hover:bg-[var(--primary-600)] hover:text-white"
                >
                  <Phone className="h-6 w-6" />
                  Call Us Now
                </motion.a>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="order-1 lg:order-2 grid grid-cols-2 gap-6 lg:gap-8"
            >
              <motion.div
                initial={{ opacity: 0, y: 40, rotate: -6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -12 }}
                className="relative"
              >
                <img
                  src={sector.intro.images[0]}
                  alt={sector.title}
                  className="rounded-3xl shadow-2xl h-[420px] lg:h-[500px] w-full object-cover border-4 border-white/20"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent opacity-60" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 60, rotate: 6 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                whileHover={{ y: -12 }}
                className="relative mt-10 lg:mt-20"
              >
                <img
                  src={sector.intro.images[1]}
                  alt={sector.title}
                  className="rounded-3xl shadow-2xl h-[420px] lg:h-[500px] w-full object-cover border-4 border-white/20"
                />
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-black/30 to-transparent opacity-60" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <KeyFeaturesSection service={sector} /> {/* Reusable component */}

      {/* CONCLUSION CTA */}
      <section className="py-20 md:py-28 lg:py-32 relative overflow-hidden bg-gradient-to-br from-[var(--primary-600)] via-[var(--primary-700)] to-[var(--primary-800)] text-white">
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            className="absolute top-10 left-1/4 w-96 h-96 bg-[var(--secondary-500)]/20 rounded-full blur-3xl"
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 12, repeat: Infinity }}
          />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8"
          >
            {sector.conclusion.heading}
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-xl md:text-2xl text-gray-100 mb-12 max-w-4xl mx-auto"
          >
            {sector.conclusion.text}
          </motion.p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.08 }}
            className="inline-flex items-center gap-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] px-12 py-6 rounded-2xl font-bold text-xl shadow-2xl"
          >
            <span>Start Saving Today</span>
            <motion.svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </div>
      </section>
    </>
  );
}