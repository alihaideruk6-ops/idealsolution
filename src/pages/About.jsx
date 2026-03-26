import React from "react";
import PageBanner from "../components/ui/PageBanner.jsx";
import bannerImage from "/src/assets/aboutbanner2.jpg";
import AboutComponent from "@/components/AboutComponent.jsx";
import StatsCounter from "@/components/StatsCounter.jsx";
import WhyChooseUs from "@/components/whyChoseus.jsx";

function About() {
  return (
    <>
      <PageBanner
        title="About Us"
        breadcrumb="Home / About Us"
        backgroundImage={bannerImage}
      />
      <AboutComponent />
      <StatsCounter/>
      <WhyChooseUs />
    </>
  );
}

export default About;
