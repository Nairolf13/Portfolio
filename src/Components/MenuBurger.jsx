import { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiCog } from "react-icons/hi";
import "../Assets/css/MenuBurger.css";

function MenuBurger({ handleNavigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSettings = () => setShowSettings(!showSettings);

  const sections = ["home", "about", "projects", "contact"];
  const getLabel = (section) =>
    section === "home"
      ? "Accueil"
      : section === "about"
      ? "À propos"
      : section === "projects"
      ? "Projets"
      : "Contact";

  return (
    <>
      <div className="md:hidden fixed top-4 right-4 z-[999]">
        {!isOpen && (
          <button
            onClick={toggleMenu}
            className="text-white text-1xl focus:outline-none"
          >
            <HiOutlineMenu />
          </button>
        )}

        {isOpen && (
          <div className="about-blur-bg rounded-xl p-6 relative">
            <button
              onClick={closeMenu}
              className="absolute top-2 right-2 text-white text-xl focus:outline-none hover:text-gray-300 transition-colors z-10"
            >
              <HiOutlineX />
            </button>
            <ul className="ul text-white text-xs space-y-1 flex flex-col items-center mt-3">
              {sections.map((section) => (
                <li key={section} className="li mb-0 w-full">
                  <button
                    onClick={() => {
                      handleNavigation(section);
                      closeMenu();
                    }}
                    className="button relative w-full text-center py-2"
                  >
                    <p className="p relative z-10">{getLabel(section)}</p>
                  </button>
                </li>
              ))}
              {/* Bouton réglages */}
              <li className="li mb-0 w-full border-t border-gray-600 pt-2 mt-2">
                <button
                  onClick={toggleSettings}
                  className="button relative w-full text-center py-2 flex items-center justify-center"
                >
                  <HiCog className="text-lg" />
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Panneau de réglages */}
      {showSettings && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center modal-overlay">
          <div 
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setShowSettings(false)}
          ></div>
          
          <div className="relative mx-4 w-full max-w-md transform rounded-xl about-blur-bg border border-green-400 p-6 shadow-2xl modal-content">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500 w-16 h-16 rounded-full flex items-center justify-center">
                <HiCog className="text-white text-2xl" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-xl font-semibold text-green-400 mb-6 font-orbitron">
                Réglages
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-white text-sm mb-2 text-left">Langue</label>
                  <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-400 focus:outline-none transition-colors">
                    <option value="fr">Français</option>
                    <option value="en">English</option>
                  </select>
                </div>
                <div>
                  <label className="block text-white text-sm mb-2 text-left">Thème</label>
                  <select className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:border-green-400 focus:outline-none transition-colors">
                    <option value="dark">Sombre</option>
                    <option value="light">Clair</option>
                  </select>
                </div>
              </div>
              
              <button
                onClick={() => setShowSettings(false)}
                className="px-6 py-3 rounded-full bg-green-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="hidden md:flex items-center gap-8 ml-auto">
        <ul className="ul flex">
          {sections.map((section) => (
            <li key={section} className="li">
              <button
                onClick={() => handleNavigation(section)}
                className="button relative"
              >
                <p className="p relative z-10">{getLabel(section)}</p>
              </button>
            </li>
          ))}
          {/* Bouton réglages pour desktop */}
          <li className="li">
            <button
              onClick={toggleSettings}
              className="button relative flex items-center"
            >
              <HiCog className="text-lg" />
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default MenuBurger;
