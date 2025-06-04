import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "../Assets/css/About.css";

function About({ handleNavigation }) {
  const points = [
    "Développeur web passionné, je conçois des expériences numériques modernes et intuitives.",
    "Je suis polyvalent et j'aime concevoir des applications utiles et accessibles, avec une attention particulière à l'expérience utilisateur.",
    "Je vois le web comme un moyen de créer du lien, de partager et de rendre service au quotidien.",
    "Je crée des interfaces accessibles, humaines et techniquement solides.",
    "Autonome et proactif, je prends plaisir à travailler sur des projets variés, seul ou en équipe.",
    "Je suis constamment en veille pour innover, progresser et livrer des projets toujours plus aboutis.",
    "Chaque projet est pour moi une opportunité d'apprendre et d'évoluer.",
    "J'ai à cœur de transformer des idées en solutions concrètes et efficaces.",
    "Ma rigueur et ma curiosité me poussent à dépasser les attentes à chaque réalisation.",
    "Vous cherchez un développeur impliqué, créatif et fiable ?",
  ];

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
                <h2 className="text-3xl font-semibold text-white text-center font-orbitron">
                  À propos de moi
                </h2>
                <div className="w-24 h-[2px] bg-[#00ff9d] mt-2"></div>
                <div className="divide-y divide-[#222]/60 w-full overflow-hidden mt-8 px-2 sm:px-4 md:px-6 lg:px-8">
                {points.map((point, index) => (
                  <div key={index} className="flex items-center gap-6 py-8">
                    <div
                      className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#23232b] border border-[#3de6cb] flex items-center justify-center text-[#e6f9f7] font-semibold text-lg"
                      style={{ borderWidth: "1.5px" }}
                    >
                      {index + 1}
                    </div>
                    <p className="text-white text-lg leading-relaxed text-left">
                      {index === points.length - 1 ? (
                        <span>
                          {point}
                          <button 
                            onClick={() => handleNavigation && handleNavigation('contact')}
                            className="heartbeat-link ml-2 bg-transparent border-none cursor-pointer"
                          >
                            Parlons-en !
                          </button>
                        </span>
                      ) : (
                        point
                      )}
                    </p>
                  </div>
                ))}
                <div className="w-full h-px bg-[#222]/60" />
                
                {/* Bouton CV */}
                <div className="w-full flex justify-center pt-12 pb-8">
                  <a 
                    href="/Portfolio/CV_Bricchi_Florian.pdf" 
                    download="CV_Florian_Bricchi.pdf"
                    className="group relative inline-flex items-center gap-3 sm:gap-4 px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-[#00ff9d] to-[#3de6cb] text-white font-bold rounded-xl shadow-2xl hover:shadow-[0_0_30px_rgba(61,230,203,0.5)] transform hover:scale-110 transition-all duration-500 ease-out font-orbitron text-xs sm:text-sm animate-pulse hover:animate-none border-2 border-white/20"
                  >
                    <FaDownload className="text-xs sm:text-sm group-hover:animate-bounce drop-shadow-lg text-white" />
                    <span className="drop-shadow-lg text-white">Télécharger mon CV</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    {/* Effet de brillance animé */}
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
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-[2px] bg-[#00ff9d]"></div>
            </motion.div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default About;
