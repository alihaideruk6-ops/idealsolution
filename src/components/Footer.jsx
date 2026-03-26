import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.jpeg";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[var(--primary-700)] text-white overflow-hidden">
      {/* Dark overlay for depth */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Main Footer Content – 5-column layout on desktop */}
      <div className="relative z-10 mx-auto max-w-[90%] px-6 py-16 lg:py-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 lg:gap-16">
        {/* Column 1: Logo + Description + Social */}
        <div className="space-y-8 md:col-span-1">
          <Link to="/" className="inline-block">
            <img
              src={logo}
              alt="Ideal Solutions Logo"
              className="h-16 w-auto"
            />
          </Link>

          <p className="text-gray-400 leading-relaxed text-base">
            Empowering UK businesses and homes with smarter energy and utility
            solutions. We compare leading suppliers to save you time, money, and
            hassle — all with expert, personal support.
          </p>

          {/* Social Media */}
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              Follow Us
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com/idealsolutionsuk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all hover:bg-[var(--secondary-500)] hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://twitter.com/idealsolutions"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all hover:bg-[var(--secondary-500)] hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://linkedin.com/company/ideal-solutions-uk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all hover:bg-[var(--secondary-500)] hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
              <a
                href="https://instagram.com/idealsolutionsuk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full bg-white/5 backdrop-blur-sm transition-all hover:bg-[var(--secondary-500)] hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5 text-gray-300 group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        {/* Column 2: Our Services */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">Our Services</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/services/business-electricity"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Business Electricity
              </Link>
            </li>
            <li>
              <Link
                to="/services/business-gas"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Business Gas
              </Link>
            </li>
            <li>
              <Link
                to="/services/commercial-solar"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Commercial Solar
              </Link>
            </li>
            <li>
              <Link
                to="/services/business-water"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Business Water
              </Link>
            </li>
            <li>
              <Link
                to="/services/business-telecoms"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Business Telecoms
              </Link>
            </li>
            <li>
              <Link
                to="/services/merchant-services"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Merchant Services
              </Link>
            </li>
            <li>
              <Link
                to="/services/domestic-energy"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Domestic Energy
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Our Sectors */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">Our Sectors</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/sectors/warehousing"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Warehousing
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/large-business"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Large Business
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/charities"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Charities
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/hospitality"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Hospitality
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/care-homes"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Care Homes
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/sports-clubs"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Sports Clubs
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/schools"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Schools
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/property-management"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Property Management
              </Link>
            </li>
            <li>
              <Link
                to="/sectors/car-garages"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Car Garages
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 4: Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">Quick Links</h4>
          <ul className="space-y-3">
            <li>
              <Link
                to="/"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                All Services
              </Link>
            </li>
            <li>
              <Link
                to="/sectors"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                All Sectors
              </Link>
            </li>
            <li>
              <Link
                to="/complaints"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300"
              >
                Complaints Handling
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors duration-300 font-medium"
              >
                Contact Us →
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 5: Get in Touch */}
        <div>
          <h4 className="text-xl font-semibold mb-6 text-white">Get in Touch</h4>
          <ul className="space-y-5">
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Phone className="h-5 w-5 text-[var(--secondary-400)]" />
              </div>
              <a
                href="tel:+441912670000"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors"
              >
                +44 191 267 0000
              </a>
            </li>
            <li className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                <Mail className="h-5 w-5 text-[var(--secondary-400)]" />
              </div>
              <a
                href="mailto:info@idealsolutionsne.co.uk"
                className="text-gray-400 hover:text-[var(--secondary-400)] transition-colors"
              >
                info@idealsolutionsne.co.uk
              </a>
            </li>
            <li className="flex items-start gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 mt-1">
                <MapPin className="h-5 w-5 text-[var(--secondary-400)]" />
              </div>
              <address className="text-gray-400 not-italic leading-relaxed">
                166 West Road,<br />
                Newcastle Upon Tyne,<br />
                United Kingdom, NE4 9QB
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="relative border-t border-white/10">
        <div className="mx-auto max-w-[90%] px-6 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ideal Solutions. All rights reserved. 
          <span className="mx-2">•</span>
          Designed to help businesses save on energy & utilities.
        </div>
      </div>
    </footer>
  );
}