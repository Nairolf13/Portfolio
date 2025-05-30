import React, { useState, useRef, useEffect } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import MenuBurger from "./Components/MenuBurger";
import logo from '../src/Assets/imgs/LogoBF.webp';

function App() {
  const [currentSection, setCurrentSection] = useState("home");
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  useEffect(() => {
    if (!vantaEffect && window.VANTA?.BIRDS) {
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

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div className="relative min-h-screen">
      <div ref={vantaRef} className="fixed inset-0 -z-10"></div>

      <header className="fixed top-0 left-0 w-full z-50 bg-transparent text-white p-4 h-20 backdrop-blur-md">
        <nav className="flex justify-between items-center w-full h-full">
          <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
          <MenuBurger handleNavigation={handleNavigation} />
        </nav>
      </header>

      <main className="pt-20 flex flex-col justify-between text-white relative">
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

      <footer className="bg-transparent text-white text-center py-7 mt-auto backdrop-blur-sm">
        <p>&copy; 2025 Bricchi Florian</p>
      </footer>
    </div>
  );
}

export default App;
