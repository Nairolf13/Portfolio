import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import gsap from "gsap";
import SplitType from "split-type";

function Home() {
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
      className="min-h-screen w-full flex flex-col justify-center items-center text-white px-4"
    >
      <h1 ref={textRef} className="text text-7xl font-extrabold mb-20 text-center font-orbitron">
        Bricchi Florian
      </h1>

      <p className="text-lg mb-8 text-center">
        Développeur Web Fullstack | Passionné par la technologie et le design
      </p>

      <div className="flex gap-10 mb-8">
        <a href="https://github.com/Nairolf13" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-clr transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/florian-bricchi-428820322/" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-clr transition">
          <FaLinkedin />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-clr transition">
          <FaTwitter />
        </a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-3xl hover:text-clr transition">
          <FaInstagram />
        </a>
      </div>
    </section>
  );
}

export default Home;
