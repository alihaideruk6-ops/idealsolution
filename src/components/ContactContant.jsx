import React from "react";

export default function ContactContent() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header with Bullet Accent */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[var(--primary-500)]" />
            <div className="w-4 h-4 rounded-full bg-[var(--primary-500)] shadow-lg" />
            <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[var(--primary-500)]" />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--text-dark)] leading-tight mb-6">
            Contact Us
          </h1>

          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text-dark)] mb-6">
            We’re Here to Help You Power Smarter Business Decisions
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-muted)] max-w-4xl mx-auto leading-relaxed">
            Get in touch with <span className="font-bold">Ideal Solutions</span> today — our experts are ready to assist with all your energy, telecom, and business service needs.
          </p>
        </div>

        {/* Two-Column Layout: Contact Info + Image + Form Below */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-20">
          {/* Left: Contact Details + Image */}
          <div className="space-y-12">
            {/* Contact Info List */}
            <div className="bg-[var(--bg-light)] rounded-3xl p-10 shadow-lg border border-[var(--border-light)]">
              <ul className="space-y-8">
                <li className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-500)] flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[var(--text-dark)]">Our Office</p>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                      166 West Road,<br />
                      Newcastle Upon Tyne,<br />
                      United Kingdom, NE4 9QB
                    </p>
                  </div>
                </li>

                <li className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-full bg-[var(--primary-500)] flex items-center justify-center shadow-md flex-shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-[var(--text-dark)]">Email Us</p>
                    <a href="mailto:info@idealsolutionsne.co.uk" className="text-[var(--text-muted)] hover:text-[var(--primary-600)] transition">
                      info@idealsolutionsne.co.uk
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Large Image */}
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://idealsolutionsne.co.uk/wp-content/uploads/2025/10/4CPV5WC.jpg"
                alt="Ideal Solutions team ready to help"
                className="w-full h-96 md:h-full object-cover"
              />
            </div>
          </div>

          {/* Right: Contact Form */}
          <div className="bg-[var(--bg-light)] rounded-3xl p-10 shadow-xl border border-[var(--border-light)]">
            <h3 className="text-3xl font-bold text-[var(--text-dark)] mb-8">
              Send Us a Message
            </h3>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="First Name *"
                  className="w-full px-6 py-4 rounded-xl border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
                  required
                />
                <input
                  type="text"
                  placeholder="Last Name *"
                  className="w-full px-6 py-4 rounded-xl border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
                  required
                />
              </div>

              <input
                type="email"
                placeholder="Email Address *"
                className="w-full px-6 py-4 rounded-xl border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
                required
              />

              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-6 py-4 rounded-xl border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition"
              />

              <select className="w-full px-6 py-4 rounded-xl border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition">
                <option>Service Interested In</option>
                <option>Business Gas</option>
                <option>Business Electricity</option>
                <option>Business Water</option>
                <option>Business Telecoms</option>
                <option>Business Insurance</option>
                <option>Domestic Energy</option>
                <option>Merchant Services</option>
              </select>

              <textarea
                placeholder="Your Message *"
                rows={6}
                className="w-full px-6 py-4 rounded-xl border border-[var(--border-light)] focus:border-[var(--primary-500)] focus:outline-none transition resize-none"
                required
              />

              <button
                type="submit"
                className="w-full bg-[var(--primary-500)] hover:bg-[var(--primary-600)] text-white font-bold py-5 rounded-xl text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}