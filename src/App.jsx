import { useState, useRef, useEffect } from "react";
import { ThemeProvider, useTheme } from "./ThemeContext";
import { LanguageProvider } from "./LanguageContext";
import Home from "./Components/Home";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Loader from "./Loader.jsx"; 

function App() {
  const { theme } = useTheme();
  const [currentSection, setCurrentSection] = useState("home");
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [showHeader, setShowHeader] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const handleNavigation = (section) => {
    setCurrentSection(section);
    setShowHeader(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    if (!showLoader && vantaRef.current) {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }

      const loadVanta = async () => {
        if (!window.THREE) {
          const threeModule = await import('three');
          window.THREE = { ...threeModule, ...threeModule.default };
        }
        if (!window.VANTA || !window.VANTA.BIRDS) {
          await new Promise((resolve, reject) => {
            const script = document.createElement('script');
            // Correction du chemin pour GitHub Pages (détection manuelle)
            let vantaPath = '/vanta/vanta.birds.min.js';
            if (window.location.hostname === 'nairolf13.github.io') {
              vantaPath = '/Portfolio/vanta/vanta.birds.min.js';
            }
            script.src = vantaPath;
            console.log('Chargement du script Vanta depuis :', script.src);
            script.async = true;
            script.onload = resolve;
            script.onerror = reject;
            document.body.appendChild(script);
          });
        }
        if (window.VANTA && window.VANTA.BIRDS) {
          const backgroundColor = theme === 'light' ? 0xf8f9fa : 0x07192f;

          const effect = window.VANTA.BIRDS({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: true,
            minHeight: 200.0,
            minWidth: 200.0,
            scale: 1.0,
            scaleMobile: 1.0,
            backgroundColor: backgroundColor,
            color: 0xff3f81,         
            color2: 0xffffff,         
            separation: 60,        
            alignment: 40,        
            cohesion: 15,          
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
  }, [showLoader, theme]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;
    const delta = 5; 

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          
          if (currentScrollY <= 100) {
            setShowHeader(true);
          }
          else if (Math.abs(currentScrollY - lastScrollY) > delta) {
            if (currentScrollY < lastScrollY) {
              setShowHeader(true); 
            } else if (currentScrollY > lastScrollY) {
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
    const timer = setTimeout(() => setShowLoader(false), 3000); 
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setShowHeader(true);
  }, [currentSection]);

  if (showLoader) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen">
      <div ref={vantaRef} className="fixed inset-0 -z-10"></div>

      <Header showHeader={showHeader} handleNavigation={handleNavigation} />

      <main className="flex flex-col justify-between text-white relative">
        {currentSection === "home" ? (
          <>
            <Home />
            <div className="mb-16" />
            <About handleNavigation={handleNavigation} />
            <div className="mb-16" />
            <Projects />
            <div className="mb-16" />
            <Contact />
          </>
        ) : (
          <div className="transition-opacity duration-500">
            {currentSection === "about" && <div style={{ paddingTop: '80px' }}><About handleNavigation={handleNavigation} /></div>}
            {currentSection === "projects" && <div style={{ paddingTop: '80px' }}><Projects /></div>}
            {currentSection === "contact" && <div style={{ paddingTop: '80px' }}><Contact /></div>}
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

function AppWithProviders() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default AppWithProviders;
