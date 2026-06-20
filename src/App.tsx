/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import SoftwareSkills from "./components/SoftwareSkills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GalleryPage from "./pages/GalleryPage";
import { PortfolioProvider } from "./context/PortfolioContext";

function HomePage() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <main>
      <Hero />
      <About />
      <Portfolio />
      <SoftwareSkills />
      <Services />
      <Contact />
    </main>
  );
}

export default function App() {
  return (
    <PortfolioProvider>
      <Router>
        <div className="relative">
          <div className="cinema-grain"></div>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <HomePage />
                <Footer />
              </>
            } />
            <Route path="/gallery" element={<GalleryPage />} />
          </Routes>
          <ScrollToTop />
        </div>
      </Router>
    </PortfolioProvider>
  );
}

