import React, { useState, useRef, useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import MenuBurger from "./Components/MenuBurger";
import logo from '../src/Assets/imgs/LogoBF.webp';
import Loader from "./Loader.jsx"; 

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    if (!showLoader && !vantaEffect && vantaRef.current) {
      const loadVanta = async () => {
        if (!window.THREE) {
          const threeModule = await import('three');
          window.THREE = { ...threeModule, ...threeModule.default };
        }
        if (!window.VANTA || !window.VANTA.BIRDS) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = '/vanta/vanta.birds.min.js';
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        }
        if (window.VANTA && window.VANTA.BIRDS) {
          const effect = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: 0x07192f,
            color: 0xff3f81,
            color2: 0xffffff,
            separation: 100,
            alignment: 80,
            cohesion: 5,
          });
          setVantaEffect(effect);
        }
      };
      loadVanta();
    }
    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [showLoader, vantaEffect]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const delta = 10; 

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          if (Math.abs(currentScrollY - lastScrollY) > delta) {
            if (currentScrollY < lastScrollY) {
              setShowHeader(true); 
            } else if (currentScrollY > lastScrollY && currentScrollY > 0) {
              setShowHeader(false); 
            }
            lastScrollY = currentScrollY;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setShowLoader(false), 5000); 
    return () => clearTimeout(timer);
  }, []);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen">
      <div ref={vantaRef} className="fixed inset-0 -z-10"></div>

      <header className={`fixed top-0 left-0 w-full z-50 bg-transparent text-white p-4 h-20 backdrop-blur-md transition-transform duration-300 translate-y-0 -translate-y-20 ${showHeader ? 'translate-y-0' : '-translate-y-20'}`}>
        <nav className="flex justify-between items-center w-full h-full">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
          <MenuBurger handleNavigation={handleNavigation} />
        </nav>
      </header>

      <main className="flex flex-col justify-between text-white relative">
        {currentSection === "home" ? (
          <>
            <Home />
            <div className="mb-16" />
            <About />
            <div className="mb-16" />
            <Projects />
            <div className="mb-16" />
            <Contact />
          </>
        ) : (
          <div className="transition-opacity duration-500">
            {currentSection === "about" && <About />}
            {currentSection === "projects" && <Projects />}
            {currentSection === "contact" && <Contact />}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
