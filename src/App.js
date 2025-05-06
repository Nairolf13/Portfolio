import React, { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import MenuBurger from "./Components/MenuBurger"; 
import logo from '../src/Assets/imgs/LogoBF.webp';

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex bg-vanta-custom flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white p-4 h-20">
        <nav className="flex justify-between items-center w-full h-full">
        <img
            src={logo}
            alt="Logo"
            className="h-16 w-16 rounded-full"
          />
          
          <MenuBurger handleNavigation={handleNavigation} />
        </nav>
      </header>

      <main className="pt-20 bg-vanta-custom flex flex-col justify-between m-0">
        {currentSection === "home" && (
          <div>
            <Home />
            <div className="mb-16" />
            <About />
            <div className="mb-16" />
            <Projects />
            <div className="mb-16" />
            <Contact />
          </div>
        )}
        {currentSection === "about" && (
          <div className="mb-16">
            <About />
          </div>
        )}
        {currentSection === "projects" && (
          <div className="mb-16">
            <Projects />
          </div>
        )}
        {currentSection === "contact" && (
          <div className="mb-16">
            <Contact />
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white text-center py-7 mt-auto m-0">
        <p>&copy; 2025 Bricchi Florian</p>
      </footer>
    </div>
  );
}

export default App;
