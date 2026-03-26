import React from 'react'
import { Mail, Phone, Clock } from "lucide-react";
import { Link } from "react-router-dom";

function Topstripe() {
  return (
<div className="bg-[var(--primary-600)] text-white text-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2">

        {/* Left Info */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="flex items-center gap-1">
            <Clock size={14} />
            Mon - Fri : 08:00 - 17:00
          </span>

          <span className="flex items-center gap-1">
            <Mail size={14} />
            info@idealsolutionsne.co.uk
          </span>
        </div>

        {/* Right Info */}
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <Phone size={14} />
            +800-3374-4676
          </span>

          <Link
            to="/contact"
            className="bg-[var(--secondary-500)] hover:bg-[var(--secondary-600)]
                       text-white px-4 py-2.5 rounded-md font-medium transition"
          >
            Contact Us Now
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Topstripe