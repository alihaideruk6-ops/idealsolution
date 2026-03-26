import React from 'react'
import { Mail, Phone, Clock } from "lucide-react";

function Bottomstripe() {
  return (
<div className="bg-[var(--primary-600)] text-white text-sm">
     
      <div className="z-10 border-t border-white/10 py-6 text-center text-gray-300 text-sm">
        © {new Date().getFullYear()} IDEAL SOLUTIONS. All rights reserved.
      </div>
    </div>
  )
}

export default Bottomstripe