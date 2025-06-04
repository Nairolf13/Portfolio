import { useState } from "react";
import { HiOutlineMenu, HiOutlineX, HiCog } from "react-icons/hi";
import { HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../ThemeContext";
import { useLanguage } from "../LanguageContext";
import "../Assets/css/MenuBurger.css";

function MenuBurger({ handleNavigation }) {
  const { theme, toggleTheme } = useTheme();
  const { language, changeLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleSettings = () => setShowSettings(!showSettings);

  const sections = ["home", "about", "projects", "contact"];
  const getLabel = (section) => t(`nav.${section}`);

  return (
    <>
      <div className="md:hidden fixed top-4 right-4 z-[999]">
        {!isOpen && (
          <button
            onClick={toggleMenu}
            className="text-1xl focus:outline-none"
            style={{ color: 'var(--text-primary)' }}
          >
            <HiOutlineMenu />
          </button>
        )}

        {isOpen && (
          <div className="about-blur-bg rounded-xl p-6 relative">
            <button
              onClick={closeMenu}
              className="absolute top-2 right-2 text-xl focus:outline-none hover:opacity-70 transition-all z-10"
              style={{ color: 'var(--text-primary)' }}
            >
              <HiOutlineX />
            </button>
            <ul className="ul text-xs space-y-1 flex flex-col items-center mt-3" style={{ color: 'var(--text-primary)' }}>
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
          
          <div className="relative mx-4 w-full max-w-xs sm:max-w-md transform rounded-xl about-blur-bg border border-green-400 p-4 sm:p-6 shadow-2xl modal-content">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="bg-green-500 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center">
                <HiCog className="text-white text-lg sm:text-2xl" />
              </div>
            </div>
            
            <div className="text-center">
              <h3 className="text-lg sm:text-xl font-semibold text-green-400 mb-4 sm:mb-6 font-orbitron">
                {t('nav.settings')}
              </h3>
              
              <div className="space-y-4 sm:space-y-6 mb-4 sm:mb-6">
                {/* Sélecteur de langue avec drapeaux */}
                <div>
                  <label className="block text-xs sm:text-sm mb-2 sm:mb-3 text-center" style={{ color: 'var(--text-primary)' }}>{t('settings.language')}</label>
                  <div className="flex justify-center gap-3 sm:gap-4">
                    <button
                      onClick={() => changeLanguage('fr')}
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300 border-2 ${
                        language === 'fr' 
                          ? 'border-green-400 bg-green-500/20 scale-110' 
                          : 'border-gray-600 hover:border-green-400 hover:scale-105'
                      }`}
                      title="Français"
                    >
                      🇫🇷
                    </button>
                    <button
                      onClick={() => changeLanguage('en')}
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-2xl sm:text-3xl transition-all duration-300 border-2 ${
                        language === 'en' 
                          ? 'border-green-400 bg-green-500/20 scale-110' 
                          : 'border-gray-600 hover:border-green-400 hover:scale-105'
                      }`}
                      title="English"
                    >
                      🇬🇧
                    </button>
                  </div>
                </div>
                
                {/* Sélecteur de thème avec soleil/lune */}
                <div>
                  <label className="block text-xs sm:text-sm mb-2 sm:mb-3 text-center" style={{ color: 'var(--text-primary)' }}>{t('settings.theme')}</label>
                  <div className="flex justify-center gap-3 sm:gap-4">
                    <button
                      onClick={() => theme !== 'light' && toggleTheme()}
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl transition-all duration-300 border-2 ${
                        theme === 'light' 
                          ? 'border-green-400 bg-green-500/20 scale-110' 
                          : 'border-gray-600 hover:border-green-400 hover:scale-105'
                      }`}
                      title={t('settings.themes.light')}
                    >
                      <HiSun />
                    </button>
                    <button
                      onClick={() => theme !== 'dark' && toggleTheme()}
                      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center text-lg sm:text-2xl transition-all duration-300 border-2 ${
                        theme === 'dark' 
                          ? 'border-green-400 bg-green-500/20 scale-110' 
                          : 'border-gray-600 hover:border-green-400 hover:scale-105'
                      }`}
                      title={t('settings.themes.dark')}
                    >
                      <HiMoon />
                    </button>
                  </div>
                </div>
              </div>
              
              <button
                onClick={() => setShowSettings(false)}
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-full bg-green-500 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg text-sm sm:text-base"
              >
                {t('contact.modal.close')}
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
