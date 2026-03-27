import OurServices from '../../components/Ourservices';
import PageBanner from '../../components/ui/PageBanner.jsx'
import bannerImage from "/src/assets/urbine-8.png";
import React from 'react'
import StatsCounter from '../../components/StatsCounter.jsx';
import WhyChooseUs from '../../components/whyChoseus.jsx';

function Services() {
  return (
    <>
    <PageBanner
     title="Our Services"
        breadcrumb="Home / Services"
        backgroundImage={bannerImage}
        />
        <OurServices/>
        <StatsCounter/>
        <WhyChooseUs/>
    </>
  )
}

export default Services
