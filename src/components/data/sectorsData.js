// src/components/data/sectorsData.js

import warehouseImg1 from "/src/assets/ar-2.png"; // Replace with real images later
import warehouseImg2 from "/src/assets/ar-2.png";

import largeBusinessImg1 from "/src/assets/ar-3.png";
import largeBusinessImg2 from "/src/assets/ar-3.png";

import charityImg1 from "/src/assets/pexels-rdne-6646918.jpg";
import charityImg2 from "/src/assets/pexels-rdne-6646918.jpg";

import hospitalityImg1 from "/src/assets/ar.png";
import hospitalityImg2 from "/src/assets/ar.png";

import careHomeImg1 from "/src/assets/Untitled-design-23.png";
import careHomeImg2 from "/src/assets/Untitled-design-23.png";

import sportsClubImg1 from "/src/assets/download.jpg";
import sportsClubImg2 from "/src/assets/download.jpg";

import schoolImg1 from "/src/assets/download.jpg";
import schoolImg2 from "/src/assets/download.jpg";

import propertyImg1 from "/src/assets/download.jpg";
import propertyImg2 from "/src/assets/download.jpg";

import carGarageImg1 from "/src/assets/download.jpg";
import carGarageImg2 from "/src/assets/download.jpg";

const sectorsData = [
  {
    slug: "warehousing",
    title: "Warehousing",
    subtitle: "Efficient Energy & Utility Solutions for Modern Warehousing",
    bannerImage: warehouseImg1,

    intro: {
      heading: "Warehousing",
      description:
        "At IDEAL SOLUTIONS, we provide tailored energy, utilities, telecoms, and insurance services for warehouses and logistics operations. We help reduce costs, improve efficiency, and ensure uninterrupted operations across large-scale facilities.",
      images: [warehouseImg1, warehouseImg2],
    },

    features: {
      heading: "Why Choose Us for Warehousing",
      description: "Specialised solutions designed for high-energy, multi-site operations.",
      list: [
        "Competitive energy rates for high-usage sites",
        "Multi-site utility management and consolidation",
        "Reliable telecoms for logistics coordination",
        "Comprehensive insurance for stock and premises",
        "Smart metering and consumption monitoring",
        "Dedicated account manager for ongoing support",
      ],
    },

    conclusion: {
      heading: "Optimise Your Warehouse Operations",
      text:
        "Let IDEAL SOLUTIONS handle your energy, utilities, telecoms, and insurance needs so you can focus on smooth logistics, storage, and distribution. Save money and gain peace of mind with solutions built for warehousing.",
    },
  },

  {
    slug: "large-business",
    title: "Large Business",
    subtitle: "Enterprise-Grade Solutions for Multi-Site Operations",
    bannerImage: largeBusinessImg1,

    intro: {
      heading: "Large Business",
      description:
        "We support large businesses with complex energy demands across multiple locations. Our expert team negotiates the best rates and manages all utilities, telecoms, and insurance in one place.",
      images: [largeBusinessImg1, largeBusinessImg2],
    },

    features: {
      heading: "Tailored for Large Enterprises",
      description: "Scalable, cost-effective solutions for growing businesses.",
      list: [
        "Bulk energy procurement for maximum savings",
        "Centralised billing across all sites",
        "Advanced telecoms and connectivity solutions",
        "Fleet and property insurance packages",
        "Energy efficiency audits and recommendations",
        "24/7 priority support",
      ],
    },

    conclusion: {
      heading: "Power Your Growth with Confidence",
      text:
        "With IDEAL SOLUTIONS as your partner, large businesses gain control over costs and compliance while benefiting from seamless utility and risk management.",
    },
  },

  {
    slug: "charities",
    title: "Charities",
    subtitle: "Helping Charities Save More to Do More Good",
    bannerImage: charityImg1,

    intro: {
      heading: "Charities",
      description:
        "We understand that every penny counts for charities. That’s why we specialise in reducing overheads on energy, water, telecoms, and insurance — so more funds go directly to your cause.",
      images: [charityImg1, charityImg2],
    },

    features: {
      heading: "Dedicated Support for Charities",
      description: "Ethical, affordable, and transparent services.",
      list: [
        "Special reduced rates for registered charities",
        "No-pressure, transparent price comparisons",
        "Flexible contracts with no early exit fees",
        "Help with VAT relief and energy grants",
        "Simple switching with full handover support",
        "Ongoing cost monitoring and advice",
      ],
    },

    conclusion: {
      heading: "Focus on Your Mission — We’ll Handle the Rest",
      text:
        "Partner with IDEAL SOLUTIONS to cut operational costs without cutting corners. More savings mean more impact for the communities you serve.",
    },
  },

  // Add the rest similarly — here are a few more as examples:

  {
    slug: "hospitality",
    title: "Hospitality",
    subtitle: "Keep Guests Happy While Keeping Costs Low",
    bannerImage: hospitalityImg1,
    intro: {
      heading: "Hospitality",
      description:
        "Hotels, restaurants, and venues rely on consistent energy and connectivity. We deliver reliable, cost-effective solutions tailored to the hospitality industry.",
      images: [hospitalityImg1, hospitalityImg2],
    },
    features: {
      heading: "Built for Hospitality",
      list: [
        "24/7 reliable energy supply",
        "High-speed broadband and Wi-Fi solutions",
        "Competitive insurance for premises and staff",
        "Seasonal tariff optimisation",
        "Smart controls for heating and lighting",
        "Fast response support",
      ],
    },
    conclusion: {
      heading: "Exceptional Service Starts with Smart Savings",
      text:
        "Let us optimise your utilities and protection so you can deliver outstanding guest experiences without worrying about rising costs.",
    },
  },

  {
    slug: "care-homes",
    title: "Care Homes",
    subtitle: "Comfort, Safety, and Cost Control for Resident Wellbeing",
    bannerImage: careHomeImg1,
    intro: {
      heading: "Care Homes",
      description:
        "Care homes need stable, affordable utilities and robust insurance. We ensure comfort and compliance while minimising costs.",
      images: [careHomeImg1, careHomeImg2],
    },
    features: {
      heading: "Specialised for Care Providers",
      list: [
        "Stable, low-cost energy and water plans",
        "Priority support for critical services",
        "Comprehensive liability and building insurance",
        "Temperature control and monitoring advice",
        "CQC-compliant documentation support",
        "Long-term fixed rates for budget certainty",
      ],
    },
    conclusion: {
      heading: "Care You Can Trust — Costs You Can Control",
      text:
        "With IDEAL SOLUTIONS, care homes get reliable services and lower bills, allowing more resources to be directed toward resident care.",
    },
  },

  // Continue for the remaining sectors: sports-clubs, schools, property-management, car-garages
  // Just copy the pattern above and update title, images, content accordingly.

];

export default sectorsData;