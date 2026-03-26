import React from "react";

export default function CTA() {
  return (
    <section className="py-20 md:py-28 bg-[var(--bg-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-dark)] leading-tight">
            Contact Us
          </h2>

          <p className="mt-6 text-lg md:text-xl text-[var(--text-muted)] max-w-3xl mx-auto leading-relaxed">
            We're Just a Call Away<br />
            Need help with your energy, utilities, or business services? Our friendly experts are ready to guide you every step of the way. Reach out today and start saving with <span className="font-semibold text-[var(--primary-600)]">IDEAL SOLUTIONS</span>.
          </p>
        </div>

        {/* Two-Column Layout: Form + Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left: Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-10 border border-[var(--border-light)]">
            <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-5 py-4 rounded-lg border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-5 py-4 rounded-lg border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-lg border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-lg border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
              />

              <select className="w-full px-5 py-4 rounded-lg border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition">
                <option>Service Interested In</option>
                <option>Business Gas</option>
                <option>Business Electricity</option>
                <option>Business Water</option>
                <option>Business Telecoms</option>
                <option>Business Insurance</option>
                <option>Domestic Energy</option>
              </select>

              <textarea
                placeholder="Your Message"
                rows={5}
                className="w-full px-5 py-4 rounded-lg border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white font-semibold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right: Contact Info + Map/Visual */}
          <div className="space-y-10">
            {/* Contact Details */}
            <div className="bg-white rounded-3xl shadow-xl p-10 border border-[var(--border-light)]">
              <h3 className="text-2xl font-bold text-[var(--text-dark)] mb-8">
                Get in Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-500)] flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)]">Phone</p>
                    <p className="text-[var(--text-muted)]">0800 123 4567</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-500)] flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)]">Email</p>
                    <p className="text-[var(--text-muted)]">info@idealsolutions.co.uk</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-500)] flex items-center justify-center shadow-md">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[var(--text-dark)]">Office</p>
                    <p className="text-[var(--text-muted)]">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Visual Accent */}
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&q=80&w=2070"
                alt="Friendly customer support team"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}