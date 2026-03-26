import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-[var(--bg-main)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[var(--text-main)] mb-4">
            Get in Touch
          </h2>
          <p className="text-lg text-[var(--text-muted)] max-w-2xl mx-auto">
            We're here to help with any questions about energy savings, switching suppliers, solar solutions, or business utilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Contact Info Card */}
          <div className="bg-[var(--bg-card)] rounded-3xl shadow-xl border border-[var(--border-color)] p-8 lg:p-12 order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-[var(--text-main)] mb-8">
              Contact Information
            </h3>

            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--secondary-500)]/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-[var(--secondary-600)]" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Phone
                  </p>
                  <a
                    href="tel:+441912670000"
                    className="text-xl font-semibold text-[var(--text-main)] hover:text-[var(--primary-600)] transition-colors"
                  >
                    +44 191 267 0000
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--secondary-500)]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[var(--secondary-600)]" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Email
                  </p>
                  <a
                    href="mailto:info@idealsolutionsne.co.uk"
                    className="text-xl font-semibold text-[var(--text-main)] hover:text-[var(--primary-600)] transition-colors break-all"
                  >
                    info@idealsolutionsne.co.uk
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[var(--secondary-500)]/10 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-[var(--secondary-600)]" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-wider text-[var(--text-muted)] mb-1">
                    Address
                  </p>
                  <p className="text-lg font-medium text-[var(--text-main)] leading-relaxed">
                    166 West Road,<br />
                    Newcastle Upon Tyne,<br />
                    United Kingdom, NE4 9QB
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Map - No API Key Needed */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-[var(--border-color)] h-[400px] lg:h-full min-h-[400px] order-1 lg:order-2">
            <iframe
              title="Ideal Solutions Office Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2286.899796846913!2d-1.654987923465271!3d54.973899772799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e70a4e4b5e5e9%3A0x7e6f1b2a3d4c5e6f!2s166%20West%20Rd%2C%20Newcastle%20upon%20Tyne%20NE4%209QB%2C%20UK!5e0!3m2!1sen!2sus!4v1704076800000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Optional Note */}
        <p className="text-center text-[var(--text-muted)] mt-12 text-lg">
          Prefer to chat? Use the WhatsApp button in the bottom right!
        </p>
      </div>
    </section>
  );
};

export default ContactSection;