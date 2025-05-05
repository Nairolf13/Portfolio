import React, { useState } from "react";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [currentSection, setCurrentSection] = useState("home");

  const handleNavigation = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className="flex bg-vanta-custom flex-col min-h-screen">
      <header className="fixed top-0 left-0 w-full z-50 bg-gray-900 text-white p-4 h-20">
        <nav className="flex justify-between items-center w-full h-full">
          <h1 className="text-2xl font-bold">Bricchi Florian</h1>
          <ul className="flex gap-8 ml-auto">
            <li>
              <button
                onClick={() => handleNavigation("home")}
                className="hover:text-clr transition duration-300"
              >
                Accueil
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("about")}
                className="hover:text-clr transition duration-300"
              >
                À propos
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("projects")}
                className="hover:text-clr transition duration-300"
              >
                Projets
              </button>
            </li>
            <li>
              <button
                onClick={() => handleNavigation("contact")}
                className="hover:text-clr transition duration-300"
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <main className="pt-20 bg-vanta-custom flex flex-col justify-between m-0">
        {currentSection === "home" && (
          <div>
            <Home />
            <div className="mb-16" /> {/* Marge entre Home et About */}
            <About />
            <div className="mb-16" /> {/* Marge entre About et Projects */}
            <Projects />
            <div className="mb-16" /> {/* Marge entre Projects et Contact */}
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
