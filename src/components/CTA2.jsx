import React from "react";

export default function CallToAction() {
  return (
    <section className="py-10 md:py-32 bg-[var(--primary-700)] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary-600)]/20 via-transparent to-[var(--secondary-700)]/10" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        {/* Header */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8 drop-shadow-lg">
          Ready to Start Saving Today?
        </h2>

        <p className="text-xl md:text-2xl text-gray-100 max-w-4xl mx-auto mb-14 leading-relaxed opacity-95">
          Get in touch for a <span className="font-semibold">free, no-obligation quote</span>. Our UK-based experts will compare leading suppliers and find the perfect deal tailored to your business or home — saving you time, money, and hassle.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16">
          <a
            href="/contact"
            className="group inline-flex items-center gap-4 bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)] text-white font-bold px-12 py-6 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
          >
            Get Your Free Quote
            <svg className="w-7 h-7 transition-transform group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>

          <a
            href="tel:08001234567"
            className="group inline-flex items-center gap-4 bg-white text-[var(--primary-700)] font-bold px-12 py-4.5 rounded-2xl text-xl shadow-2xl hover:shadow-3xl transition-all duration-500 transform hover:-translate-y-2"
          >
            <div className="w-10 h-10 rounded-full bg-[var(--primary-700)] flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            Call: 0800 123 4567
          </a>
        </div>

        {/* Trust & Reassurance */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-200 text-lg">
          <span className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            No hidden fees
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Completely free service
          </span>
          <span className="hidden sm:block">•</span>
          <span className="flex items-center gap-2">
            <svg className="w-6 h-6 text-[var(--secondary-500)]" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Trusted by UK businesses
          </span>
        </div>
      </div>
    </section>
  );
}