import { useState } from "react";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import "../Assets/css/MenuBurger.css";

function MenuBurger({ handleNavigation }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

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
            </ul>
          </div>
        )}
      </div>
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
        </ul>
      </div>
    </>
  );
}

export default MenuBurger;
