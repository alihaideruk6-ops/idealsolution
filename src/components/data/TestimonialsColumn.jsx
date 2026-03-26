import { motion } from "framer-motion";
import React from "react";

export default function TestimonialsColumn({
  className = "",
  testimonials,
  duration = 10,
}) {
  return (
    <div className={className}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }) => (
              <div
                key={name}
                className="w-full max-w-xs rounded-3xl border bg-white p-8 shadow-lg"
              >
                <p className="text-sm text-gray-700">{text}</p>

                <div className="mt-5 flex items-center gap-3">
                  <img
                    src={image}
                    alt={name}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-medium">{name}</div>
                    <div className="text-xs text-gray-500">{role}</div>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
