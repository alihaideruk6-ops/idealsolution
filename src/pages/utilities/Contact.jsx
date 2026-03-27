import React from 'react'
import PageBanner from "../../components/ui/PageBanner.jsx";
import bannerImage from "/src/assets/contactbanner.jpg";
import ContactContent from '../../components/ContactContant.jsx';
import ContactMap from '../../components/ContactMap.jsx';
import ContactUs1 from '../../components/mvpblocks/contact-us-1.jsx';
import ContactSection from '../../components/ContactSection.jsx';


function Contact() {
  return (
    <>
        <PageBanner
               title="Contact"
                  breadcrumb="Home /  Contact"
                  backgroundImage={bannerImage}
                  />
          {/* <ContactContent/>
          <ContactMap/> */}
        <ContactUs1/>
       
        <ContactSection/>
       </>
  )
}

export default Contact
