import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import "../Assets/css/About.css";

function About({ handleNavigation }) {
  const { t } = useLanguage();
  const points = t('about.points');

  const sectionRef = useRef(null);
  const [glowTop, setGlowTop] = useState(0);
  const glowHeightPercent = 0.22; 
  const targetGlowTop = useRef(0);
  const animationFrame = useRef();

  function lerp(a, b, n) {
    return a + (b - a) * n;
  }

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const handleScroll = () => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;
      const glowHeight = sectionHeight * glowHeightPercent;
      const start = scrollY + windowHeight - sectionTop;
      const max = sectionHeight + windowHeight - glowHeight;
      let top = (start / max) * (sectionHeight - glowHeight);
      top = Math.min(Math.max(top, 0), sectionHeight - glowHeight);
      targetGlowTop.current = top;
    };

    const animate = () => {
      setGlowTop((prev) => {
        const next = lerp(prev, targetGlowTop.current, 0.18); 
        if (Math.abs(next - targetGlowTop.current) < 0.5)
          return targetGlowTop.current;
        return next;
      });
      animationFrame.current = requestAnimationFrame(animate);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    animationFrame.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame.current);
    };
  }, []);

  return (
    <>
      <section
        id="about"
        ref={sectionRef}
        className="p-4 md:p-8 lg:p-16 relative z-10"
        style={{ background: "none" }}
      >
        <div className="w-full flex justify-center">
          <div className="w-full max-w-7xl about-blur-bg about-specific relative">
          <div className="about-vertical-line-container">
            <div className="about-vertical-line">
              <motion.div
                className="about-vertical-glow"
                style={{
                  height: `calc(${glowHeightPercent * 100}% )`,
                  top: glowTop,
                  position: "absolute",
                  transition: "none",
                }}
              />
            </div>
          </div>
          <div className="w-full about-content overflow-hidden relative flex">
            <div className="flex-1 relative">
              <div className="w-full flex flex-col items-center mb-8 pt-8 pb-2">
                <h2 
                  className="text-3xl font-semibold text-center font-orbitron"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {t('about.title')}
                </h2>
                <div 
                  className="w-24 h-[2px] mt-2"
                  style={{ backgroundColor: 'var(--accent-color)' }}
                ></div>
                <div 
                  className="divide-y w-full overflow-hidden mt-8 px-2 sm:px-4 md:px-6 lg:px-8"
                  style={{ 
                    borderColor: 'var(--border-color)'
                  }}
                >
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-6 py-8">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center font-semibold text-lg"
                      style={{ 
                        backgroundColor: 'var(--bg-secondary)',
                        border: `1.5px solid var(--accent-secondary)`,
                        color: 'var(--text-primary)'
                      }}
                    >
                      {index + 1}
                    </div>
                    <p 
                      className="text-lg leading-relaxed text-left"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {index === points.length - 1 ? (
                        <span>
                          {point}
                          <button 
                            onClick={() => handleNavigation && handleNavigation('contact')}
                            className="heartbeat-link ml-2 bg-transparent border-none cursor-pointer"
                            style={{ color: 'var(--accent-color)' }}
                          >
                            {t('about.callToAction')}
                          </button>
                        </span>
                      ) : (
                        point
                      )}
                    </p>
                  </div>
                ))}
                <div 
                  className="w-full h-px"
                  style={{ backgroundColor: 'var(--border-color)' }}
                />
                
                <div className="w-full flex justify-center pt-12 pb-8">
                  <a 
                    href="/Portfolio/CV_Bricchi_Florian.pdf" 
                    download="CV_Florian_Bricchi.pdf"
                    className="group relative inline-flex items-center gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 font-bold rounded-xl transform hover:scale-110 transition-all duration-500 ease-out font-orbitron text-xs sm:text-sm animate-pulse hover:animate-none border-2"
                    style={{
                      background: `linear-gradient(to right, var(--accent-color), var(--accent-secondary))`,
                      color: 'var(--text-primary)',
                      borderColor: 'var(--border-color)',
                      '&:hover': {
                        boxShadow: '0 0 30px rgba(61,230,203,0.5)'
                      }
                    }}
                  >
                    <FaDownload 
                      className="text-xs sm:text-sm group-hover:animate-bounce drop-shadow-lg"
                      style={{ color: 'var(--text-primary)' }}
                    />
                    <span 
                      className="drop-shadow-lg"
                      style={{ color: 'var(--text-primary)' }}
                    >
                      {t('about.downloadCV')}
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-xl transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </a>
                </div>
                
                </div>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div 
                className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-[2px]"
                style={{ backgroundColor: 'var(--accent-color)' }}
              ></div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default About;
