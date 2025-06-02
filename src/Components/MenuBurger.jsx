import React, { useState } from "react";
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
        <button
          onClick={toggleMenu}
          className="text-white text-1xl focus:outline-none"
        >
          {isOpen ? <HiOutlineX /> : <HiOutlineMenu />}
        </button>

        {isOpen && (
          <ul className="ul absolute right-0 mt-2 bg-transparent text-white text-sm space-y-4 p-3">
            {sections.map((section) => (
              <li key={section} className="li mb-0">
                <button
                  onClick={() => {
                    handleNavigation(section);
                    closeMenu();
                  }}
                  className="button relative"
                >
                  <p className="p relative z-10">{getLabel(section)}</p>
                </button>
              </li>
            ))}
          </ul>
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
