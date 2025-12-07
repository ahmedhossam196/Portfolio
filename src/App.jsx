import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import DarkVeil from "./ReactBitsComponents/LightRays/LightRays";
import Footer from './components/Footer/Footer';

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ once: false });
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Full-site animated background */}
      <div className="fixed inset-0 z-0">
        <DarkVeil />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* All website content */}
      <div className="relative z-10">
        <NavBar />
                <Home />
                <About />
                <Portfolio />
                <Skills />
                <Contact />
                <SocialLinks />
                <Footer />
    
      </div>
    </div>
  );
}

export default App;
