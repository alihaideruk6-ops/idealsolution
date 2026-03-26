import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Topstripe from "./components/Topstripe";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Bottomstripe from "./components/Bottomstripe";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Sectors from "./pages/Sectors";
import Complaints from "./pages/Complaints";
import Contact from "./pages/Contact";
import WhatsAppButton from "./components/WhatsappBtn";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ui/ThemeToggle";
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
    <ThemeProvider>
      <BrowserRouter>
        {/* <Topstripe/> */}
        <Navbar />
        <ThemeToggle />
        <WhatsAppButton />

        {/* This ensures scroll to top on every route change */}
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/sectors/:slug" element={<SectorDetail />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;