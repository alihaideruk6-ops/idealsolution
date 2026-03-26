// // import { useEffect, useState } from 'react';

// // export default function SolarHeroSection() {
// //   const [scrollProgress, setScrollProgress] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY;
// //       const docHeight = document.documentElement.scrollHeight - window.innerHeight;
// //       const progress = Math.min(scrollTop / 400, 1); // Adjust 400 for animation distance
// //       setScrollProgress(progress);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Calculate translateX based on scroll progress (-300px left, 0 center, +300px right)
// // //   const getTranslateX = (position: 'left' | 'center' | 'right') => {
// // //     const spreadAmount = 320; // Total spread distance in px
// // //     const target = position === 'left' ? -spreadAmount : position === 'right' ? spreadAmount : 0;
// // //     return target * scrollProgress;
// // //   };

// //   return (
// //     <>
// //       <section className="relative h-screen overflow-hidden rounded-3xl mx-4 my-8">
// //         {/* Background Video */}
// //         <video
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           poster="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-poster-00001.jpg"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         >
// //           <source
// //             src="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-transcode.mp4"
// //             type="video/mp4"
// //           />
// //           <source
// //             src="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-transcode.webm"
// //             type="video/webm"
// //           />
// //         </video>

// //         {/* Optional dark overlay for better text readability */}
// //         <div className="absolute inset-0 bg-black/20" />

// //         {/* Three Cards */}
// //         <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex items-end gap-8 z-10">
// //           {/* Card 1 - Left */}
// //           <div
// //             // style={{ transform: `translateX(${getTranslateX('left')}px)` }}
// //             className="w-80 bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-all duration-1000 ease-out"
// //           >
// //             <h3 className="text-2xl font-bold text-gray-800 mb-3">Renewable Energy</h3>
// //             <p className="text-gray-600">
// //               Harness the power of the sun with cutting-edge solar technology.
// //             </p>
// //           </div>

// //           {/* Card 2 - Center */}
// //           <div
// //             // style={{ transform: `translateX(${getTranslateX('center')}px)` }}
// //             className="w-80 bg-white/95 backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-all duration-1000 ease-out translate-y-[-20px]"
// //           >
// //             <h3 className="text-2xl font-bold text-gray-800 mb-3">Sustainable Future</h3>
// //             <p className="text-gray-600">
// //               Build a cleaner tomorrow with efficient and reliable solar solutions.
// //             </p>
// //           </div>

// //           {/* Card 3 - Right */}
// //           <div
// //             // style={{ transform: `translateX(${getTranslateX('right')}px)` }}
// //             className="w-80 bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-2xl transition-all duration-1000 ease-out"
// //           >
// //             <h3 className="text-2xl font-bold text-gray-800 mb-3">Smart Innovation</h3>
// //             <p className="text-gray-600">
// //               Advanced monitoring and optimization for maximum energy output.
// //             </p>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Extra content to enable scrolling */}
// //       <div className="h-screen bg-gray-100" />
// //     </>
// //   );
// // }
// // import { useEffect, useState } from 'react';

// // export default function SolarHeroSection() {
// //   const [scrollProgress, setScrollProgress] = useState(0);

// //   useEffect(() => {
// //     const handleScroll = () => {
// //       const scrollTop = window.scrollY;
// //       // Animation starts immediately and completes within first ~500px of scroll
// //       const progress = Math.min(scrollTop / 500, 1);
// //       setScrollProgress(progress);
// //     };

// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   // Final spread: left card -350px, center 0, right +350px
// //   const spreadAmount = 350;
// //   const leftX = -spreadAmount * scrollProgress;
// //   const centerX = 0;
// //   const rightX = spreadAmount * scrollProgress;

// //   // Scale and z-index for overlap effect at start
// // //   const getScale = (position: 'left' | 'center' | 'right') => {
// // //     if (scrollProgress > 0.8) return 1;
// // //     if (position === 'center') return 1;
// // //     return 0.95 + 0.05 * scrollProgress; // slight grow as they spread
// // //   };

// //   return (
// //     <>
// //       <section className="relative h-screen overflow-hidden bg-cover rounded-3xl mx-4 my-8 bg-center">
// //         {/* Background Image */}
// //         {/* <div
// //           className="absolute inset-0 bg-cover bg-center"
// //           style={{
// //             backgroundImage:
// //               'url("https://images.unsplash.com/photo-1509642954962-2c3d0211c3a9?ixlib=rb-4.0.3&auto=format&fit=crop&q=80")',
// //           }}
// //         /> */}
// //  <video
// //           autoPlay
// //           muted
// //           loop
// //           playsInline
// //           poster="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-poster-00001.jpg"
// //           className="absolute inset-0 w-full h-full object-cover"
// //         >
// //           <source
// //             src="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-transcode.mp4"
// //             type="video/mp4"
// //           />
// //           <source
// //             src="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-transcode.webm"
// //             type="video/webm"
// //           />
// //         </video>
// //         {/* Dark overlay for text readability */}
// //         <div className="absolute inset-0 bg-black/40" />

// //         {/* Content Container */}
// //         <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-between py-16">
// //           {/* Top Heading + CTA */}
// //           <div className="flex justify-between items-start">
// //             <div>
// //               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
// //                 Solutions for custom solar
// //                 <br />
// //                 installations
// //               </h1>
// //             </div>

// //             <div className="text-right space-y-6">
// //               <p className="text-white/80 text-lg max-w-md">
// //                 Your future with Tailored Solar Solutions Clean energy tailored to your needs.
// //               </p>
// //               <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition shadow-lg">
// //                 Get started
// //               </button>
// //             </div>
// //           </div>

// //           {/* Three Cards - Bottom Center */}
// //           <div className="relative h-64 flex items-end justify-center">
// //             <div className="flex items-end gap-8">
// //               {/* Card 1 - Maintenance */}
// //               <div
// //                 // style={{
// //                 //   transform: `translateX(${leftX}px) scale(${getScale('left')})`,
// //                 //   zIndex: scrollProgress > 0.5 ? 10 : 8,
// //                 // }}
// //                 className="w-80 bg-white rounded-3xl p-8 shadow-2xl transition-all duration-1000 ease-out"
// //               >
// //                 <div className="w-12 h-12 mb-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
// //                   {/* Replace with actual SVG icon */}
// //                   <span className="text-2xl">⚙️</span>
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
// //                   Solar System Maintenance
// //                 </h3>
// //                 <p className="text-gray-600 text-center text-sm leading-relaxed">
// //                   Maintain solar panels with regular cleaning, inspection, performance checks.
// //                 </p>
// //               </div>

// //               {/* Card 2 - Installation (Center, slightly raised) */}
// //               <div
// //                 // style={{
// //                 //   transform: `translateX(${centerX}px) translateY(${-20 * (1 - scrollProgress)}px) scale(${getScale('center')})`,
// //                 //   zIndex: 20,
// //                 // }}
// //                 className="w-80 bg-white rounded-3xl p-8 shadow-2xl transition-all duration-1000 ease-out"
// //               >
// //                 <div className="w-12 h-12 mb-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
// //                   <span className="text-2xl">☀️</span>
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
// //                   Solar Panel Installation
// //                 </h3>
// //                 <p className="text-gray-600 text-center text-sm leading-relaxed">
// //                   Provide residential, commercial, or industrial solar panel installation services.
// //                 </p>
// //               </div>

// //               {/* Card 3 - Financing */}
// //               <div
// //                 // style={{
// //                 //   transform: `translateX(${rightX}px) scale(${getScale('right')})`,
// //                 //   zIndex: scrollProgress > 0.5 ? 10 : 8,
// //                 // }}
// //                 className="w-80 bg-white rounded-3xl p-8 shadow-2xl transition-all duration-1000 ease-out"
// //               >
// //                 <div className="w-12 h-12 mb-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
// //                   <span className="text-2xl">💰</span>
// //                 </div>
// //                 <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
// //                   Financing Assistance
// //                 </h3>
// //                 <p className="text-gray-600 text-center text-sm leading-relaxed">
// //                   Make solar more affordable by advising clients on government incentives.
// //                 </p>
// //               </div>
// //             </div>
// //           </div>
// //         </div>
// //       </section>

// //       {/* Extra space to allow scrolling and trigger animation */}
// //       <div className="h-screen bg-gray-50" />
// //     </>
// //   );
// // }
// import { useEffect, useState } from 'react';

// export default function SolarHeroSection() {
//   const [scrollProgress, setScrollProgress] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       // Animation starts immediately and completes within first ~500px of scroll
//       const progress = Math.min(scrollTop / 500, 1);
//       setScrollProgress(progress);
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Final spread: left card -350px, center 0, right +350px
//   const spreadAmount = 350;
//   const leftX = -spreadAmount * scrollProgress;
//   const centerX = 0;
//   const rightX = spreadAmount * scrollProgress;

//   // Scale and z-index for overlap effect at start
//   const getScale = (position) => {
//     if (scrollProgress > 0.8) return 1;
//     if (position === 'center') return 1;
//     return 0.95 + 0.05 * scrollProgress; // slight grow as they spread
//   };

//   return (
//     <>
//       <section className="relative h-screen overflow-hidden bg-cover rounded-3xl mx-4 my-8 bg-center">
//         {/* Background Video */}
//         <video
//           autoPlay
//           muted
//           loop
//           playsInline
//           poster="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-poster-00001.jpg"
//           className="absolute inset-0 w-full h-full object-cover"
//         >
//           <source
//             src="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-transcode.mp4"
//             type="video/mp4"
//           />
//           <source
//             src="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-transcode.webm"
//             type="video/webm"
//           />
//         </video>
        
//         {/* Dark overlay for text readability */}
//         <div className="absolute inset-0 bg-black/40" />

//         {/* Content Container */}
//         <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-between py-16">
//           {/* Top Heading + CTA */}
//           <div className="flex justify-between items-start">
//             <div>
//               <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
//                 Solutions for custom solar
//                 <br />
//                 installations
//               </h1>
//             </div>

//             <div className="text-right space-y-6">
//               <p className="text-white/80 text-lg max-w-md">
//                 Your future with Tailored Solar Solutions Clean energy tailored to your needs.
//               </p>
//               <button className="px-8 py-4 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition shadow-lg">
//                 Get started
//               </button>
//             </div>
//           </div>

//           {/* Three Cards - Bottom Center */}
//           <div className="relative h-64 flex items-end justify-center">
//             <div className="flex items-end gap-8">
//               {/* Card 1 - Maintenance */}
//               <div
//                 style={{
//                   transform: `translateX(${leftX}px) scale(${getScale('left')})`,
//                   zIndex: scrollProgress > 0.5 ? 10 : 8,
//                 }}
//                 className="w-80 bg-white rounded-3xl p-8 shadow-2xl transition-all duration-300 ease-out"
//               >
//                 <div className="w-12 h-12 mb-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
//                   <span className="text-2xl">⚙️</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
//                   Solar System Maintenance
//                 </h3>
//                 <p className="text-gray-600 text-center text-sm leading-relaxed">
//                   Maintain solar panels with regular cleaning, inspection, performance checks.
//                 </p>
//               </div>

//               {/* Card 2 - Installation (Center, slightly raised) */}
//               <div
//                 style={{
//                   transform: `translateX(${centerX}px) translateY(${-20 * (1 - scrollProgress)}px) scale(${getScale('center')})`,
//                   zIndex: 20,
//                 }}
//                 className="w-80 bg-white rounded-3xl p-8 shadow-2xl transition-all duration-300 ease-out"
//               >
//                 <div className="w-12 h-12 mb-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
//                   <span className="text-2xl">☀️</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
//                   Solar Panel Installation
//                 </h3>
//                 <p className="text-gray-600 text-center text-sm leading-relaxed">
//                   Provide residential, commercial, or industrial solar panel installation services.
//                 </p>
//               </div>

//               {/* Card 3 - Financing */}
//               <div
//                 style={{
//                   transform: `translateX(${rightX}px) scale(${getScale('right')})`,
//                   zIndex: scrollProgress > 0.5 ? 10 : 8,
//                 }}
//                 className="w-80 bg-white rounded-3xl p-8 shadow-2xl transition-all duration-300 ease-out"
//               >
//                 <div className="w-12 h-12 mb-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
//                   <span className="text-2xl">💰</span>
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
//                   Financing Assistance
//                 </h3>
//                 <p className="text-gray-600 text-center text-sm leading-relaxed">
//                   Make solar more affordable by advising clients on government incentives.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Extra space to allow scrolling and trigger animation */}
//       <div className="h-screen bg-gray-50" />
//     </>
//   );
// }
import { useEffect, useRef, useState } from "react";

export default function SolarHeroSection() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // section scroll range
      const start = windowHeight * 0.8;
      const end = windowHeight * 0.2;

      const rawProgress = (start - rect.top) / (start - end);
      const clamped = Math.min(Math.max(rawProgress, 0), 1);

      setProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const spread = 360;

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-screen overflow-hidden bg-cover rounded-3xl mx-4 my-8 bg-center"
      >
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://cdn.prod.website-files.com/68c7aacd7c9fdb902f73c74d%2F68d39324f1fbb42a234d1609_solar-transcode.mp4" />
        </video>

        <div className="absolute inset-0 bg-black/40" />

        <div className="relative h-full max-w-7xl mx-auto px-8 flex flex-col justify-between py-16">
          {/* Header */}
          <div className="flex justify-between items-start">
            <h1 className="text-6xl font-bold text-white">
              Solutions for custom solar <br /> installations
            </h1>

            <div className="text-right max-w-md space-y-6">
              <p className="text-white/80 text-lg">
                Clean energy tailored to your needs.
              </p>
              <button className="px-8 py-4 bg-white rounded-full font-medium">
                Get started
              </button>
            </div>
          </div>

          {/* Cards Container */}
          <div className="relative h-72 flex justify-center items-end">
            <div className="relative w-[900px] h-full">

              {/* Left Card */}
              <Card
                x={-spread * progress}
                scale={0.95 + 0.05 * progress}
                z={10}
                title="Solar System Maintenance"
                icon="⚙️"
                text="Maintain solar panels with regular cleaning and inspection."
              />

              {/* Center Card */}
              <Card
                x={0}
                y={-30 * (1 - progress)}
                scale={1}
                z={20}
                title="Solar Panel Installation"
                icon="☀️"
                text="Residential, commercial & industrial solar installations."
              />

              {/* Right Card */}
              <Card
                x={spread * progress}
                scale={0.95 + 0.05 * progress}
                z={10}
                title="Financing Assistance"
                icon="💰"
                text="Guidance on incentives & financing options."
              />

            </div>
          </div>
        </div>
      </section>

      {/* Scroll space */}
      <div className="h-screen bg-gray-50" />
    </>
  );
}

function Card({ x = 0, y = 0, scale = 1, z = 10, title, icon, text }) {
  return (
    <div
      style={{
        transform: `translate(${x}px, ${y}px) scale(${scale})`,
        zIndex: z,
      }}
      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-80 bg-white rounded-3xl p-8 shadow-2xl transition-transform duration-300 ease-out"
    >
      <div className="w-12 h-12 mb-6 mx-auto bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-2xl">{icon}</span>
      </div>
      <h3 className="text-xl font-semibold text-center mb-3">{title}</h3>
      <p className="text-gray-600 text-sm text-center">{text}</p>
    </div>
  );
}
