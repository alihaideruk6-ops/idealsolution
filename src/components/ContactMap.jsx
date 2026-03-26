import React from "react";

export default function ContactMap() {
  return (
    <section className="py-16 md:py-24 bg-[var(--bg-light)]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Map Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--text-dark)] mb-4">
            Find Us Here
          </h2>
          <p className="text-xl text-[var(--text-muted)]">
            Visit our office or get directions easily
          </p>
        </div>

        {/* Google Maps Embed */}
        <div className="rounded-3xl overflow-hidden shadow-2xl border border-[var(--border-light)]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.162974399626!2d98.678194314769!3d3.589873997409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312e1f3f3b3b3b%3A0x9c9c9c9c9c9c9c9c!2sTaman%20Ahmad%20Yani%20Medan!5e0!3m2!1sen!2sid!4v1735140000000!5m2!1sen!2sid"
            width="100%"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ideal Solutions Location - Taman Ahmad Yani Medan"
            className="w-full"
          ></iframe>
        </div>

        {/* Address Below Map */}
        <div className="text-center mt-10">
          <p className="text-lg text-[var(--text-muted)]">
            <strong>Ideal Solutions Office</strong><br />
            Taman Ahmad Yani Medan<br />
            HMGH+HM6, Jl. Imam Bonjol, J A 11, Kec. Medan Maimun, Kota Medan,<br />
            Sumatera Utara 20151, Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}