import React, { useEffect, useState } from "react";

export default function StatItem({ value, label, start }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startValue = 0;
    const duration = 2000; // 2 seconds
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      startValue += increment;
      if (startValue >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(startValue));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [start, value]);

  return (
    <div>
      <h3 className="text-4xl md:text-5xl font-bold text-white mb-2">
        {count}+
      </h3>
      <p className="text-sm md:text-base text-gray-300">
        {label}
      </p>
    </div>
  );
}

