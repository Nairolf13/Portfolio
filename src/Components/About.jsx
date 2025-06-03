import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "../Assets/css/About.css";

function About() {
  const points = [
    "Développeur web passionné, je conçois des expériences numériques modernes et intuitives.",
    "Expert en React, Tailwind CSS et JavaScript, avec une forte sensibilité UX/UI.",
    "Je crois au web comme outil pour raconter des histoires et transmettre des émotions.",
    "Je crée des interfaces accessibles, humaines et techniquement solides.",
    "Autonome et proactif, je prends plaisir à travailler sur des projets variés, seul ou en équipe.",
    "Je suis constamment en veille pour innover, progresser et livrer des projets toujours plus aboutis.",
    "Chaque projet est pour moi une opportunité d'apprendre et d'évoluer.",
    "J'ai à cœur de transformer des idées en solutions concrètes et efficaces.",
    "Ma rigueur et ma curiosité me poussent à dépasser les attentes à chaque réalisation.",
    "Vous cherchez un développeur impliqué, créatif et fiable ? Parlons-en !",
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
      <div className="w-full flex flex-col items-center mt-8 mb-20">
        <h2 className="text-4xl font-bold text-white mb-2 text-center font-orbitron">
          À propos de moi
        </h2>
        <div className="w-24 h-[2px] bg-[#00ff9d]"></div>
      </div>
      <section
        id="about"
        ref={sectionRef}
        className="flex justify-center min-h-screen py-[8vh] px-[4vw] relative touch-pan-y overflow-hidden"
        style={{ background: "none" }}
      >
        <div className="max-w-5xl w-full about-content overflow-hidden relative flex mx-auto px-[4vw]">
          <div
            className="about-vertical-line-container"
            style={{
              left: 0,
              right: "auto",
              minWidth: "8px",
              maxWidth: "12px",
              width: "1vw",
              position: "absolute",
              top: 0,
              bottom: 0,
              marginLeft: "0",
              height: "100%", 
              maxHeight: "inherit", 
              overflow: "hidden", 
            }}
          >
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
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-[2px] bg-[#00ff9d]"></div>
            </motion.div>
            <div className="divide-y divide-[#222]/60 about-blur-bg overflow-hidden">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-6 py-8">
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#23232b] border border-[#3de6cb] flex items-center justify-center text-[#e6f9f7] font-semibold text-lg"
                    style={{ borderWidth: "1.5px" }}
                  >
                    {index + 1}
                  </div>
                  <p className="text-white text-lg leading-relaxed text-left">
                    {point}
                  </p>
                </div>
              ))}
              <div className="w-full h-px bg-[#222]/60" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
