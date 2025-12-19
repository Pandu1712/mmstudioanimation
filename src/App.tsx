import { useState, useEffect } from "react";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery"

import { useCursorGlow } from "./hooks/useCursorGlow";
import { useScrollAnimation } from "./hooks/useScrollAnimation";
import Services2 from "./components/Services2";
import Contact from "./components/Contact";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useCursorGlow();
  useScrollAnimation();

  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isSidebarOpen]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header onMenuClick={() => setIsSidebarOpen(true)} />
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <main>
        <Hero />
        <Services />
        <Gallery/>
        <Portfolio />
        <Services2/>
        <About />
        <Contact/>
      </main>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

export default App;
