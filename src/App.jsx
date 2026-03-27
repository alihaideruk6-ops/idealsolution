import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

// Landing Page
import Landing from "./pages/Landing";

// Layouts
import DigitalLayout from "./layouts/DigitalLayout";
import UtilitiesLayout from "./layouts/UtilitiesLayout";

// Digital Pages
import DigitalHome from "./pages/digital/Home";
import DigitalAbout from "./pages/digital/About";
import DigitalProjects from "./pages/digital/Projects";
import DigitalContact from "./pages/digital/Contact";

// Utilities Pages
import UtilitiesHome from "./pages/utilities/Home";
import UtilitiesAbout from "./pages/utilities/About";
import UtilitiesServices from "./pages/utilities/Services";
import UtilitiesContact from "./pages/utilities/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import Sectors from "./pages/Sectors";
import Complaints from "./pages/Complaints";
import SectorDetail from "./pages/SectoreDetail";

// Component that listens to route changes and scrolls to top
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    // Optional: smoother scroll (modern browsers support it)
    // window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      {/* This ensures scroll to top on every route change */}
      <ScrollToTop />

      <Routes>
        {/* Landing Page - No Layout */}
        <Route path="/" element={<Landing />} />

        {/* Digital Services Routes */}
        <Route path="/digitalservices" element={<DigitalLayout />}>
          <Route index element={<DigitalHome />} />
          <Route path="about" element={<DigitalAbout />} />
          <Route path="projects" element={<DigitalProjects />} />
          <Route path="contact" element={<DigitalContact />} />
        </Route>

        {/* Utilities Services Routes */}
        <Route path="/utilities-services" element={<UtilitiesLayout />}>
          <Route index element={<UtilitiesHome />} />
          <Route path="about" element={<UtilitiesAbout />} />
          <Route path="services" element={<UtilitiesServices />} />
          <Route path="contact" element={<UtilitiesContact />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="sectors" element={<Sectors />} />
          <Route path="sectors/:slug" element={<SectorDetail />} />
          <Route path="complaints" element={<Complaints />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;