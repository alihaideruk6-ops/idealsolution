import React from 'react'
import PageBanner from '../components/ui/PageBanner.jsx'
import bannerImage from "/src/assets/pexels-rdne-7821498.jpg";
import ComplaintsContent from '@/components/ComplaintContant.jsx';
import FeatureSteps from '@/components/mvpblocks/feature-2.jsx';
import Feature3 from '@/components/mvpblocks/feature-3.jsx';
function Complaints() {
  return (
    <>
     <PageBanner
            title="Complaints Handling"
               breadcrumb="Home / Complaints Handling"
               backgroundImage={bannerImage}
               />
    <ComplaintsContent/>
      <Feature3/>         
     <FeatureSteps/>  
    </>
  )
}

export default Complaints