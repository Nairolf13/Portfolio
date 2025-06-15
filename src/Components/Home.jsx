import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import { useLanguage } from "../LanguageContext";
import gsap from "gsap";
import SplitType from "split-type";

function Home() {
  const { t } = useLanguage();
  const textRef = useRef();


  useEffect(() => {
    const split = new SplitType(textRef.current, { types: "chars, words, lines" });

    const animation = gsap.from(split.chars, {
      x: 150,
      opacity: 0,
      duration: 0.7,
      ease: "power4.out",
      stagger: 0.04,
    });

    return () => {
      animation.kill();
      split.revert();
    };
  }, []);


  return (
    <section
      className="min-h-screen w-full flex flex-col justify-center items-center px-4"
      style={{ color: 'var(--text-primary)' }}
    >
      <h1 
        ref={textRef} 
        className="text text-7xl font-extrabold mb-20 text-center font-orbitron"
        style={{ color: 'var(--text-primary)' }}
      >
        {t('home.name')}
      </h1>

      <p 
        className="text-lg mb-8 text-center"
        style={{ color: 'var(--text-secondary)' }}
      >
        {t('home.title')} | {t('home.subtitle')}
      </p>

      <div className="flex gap-10 mb-8">
        <a 
          href="https://github.com/Nairolf13" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl transition duration-300"
          style={{ 
            color: 'var(--text-primary)',
            ':hover': { color: 'var(--accent-color)' }
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
        >
          <FaGithub />
        </a>
        <a 
          href="https://www.linkedin.com/in/florian-bricchi-428820322/" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl transition duration-300"
          style={{ 
            color: 'var(--text-primary)',
            ':hover': { color: 'var(--accent-color)' }
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://x.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl transition duration-300"
          style={{ 
            color: 'var(--text-primary)',
            ':hover': { color: 'var(--accent-color)' }
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
        >
          <FaTwitter />
        </a>
        <a 
          href="https://www.instagram.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-3xl transition duration-300"
          style={{ 
            color: 'var(--text-primary)',
            ':hover': { color: 'var(--accent-color)' }
          }}
          onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'}
          onMouseLeave={(e) => e.target.style.color = 'var(--text-primary)'}
        >
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

export default Home;
