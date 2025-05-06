import React from "react";
import { motion } from "framer-motion";

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
    "Vous cherchez un développeur impliqué, créatif et fiable ? Parlons-en !"
  ];

  return (
    <section
      id="about"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8 bg-vanta-custom text-center"
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-3xl text-white font-semibold mb-12">À propos de moi</h2>
        <div className="flex flex-col gap-4">
          {points.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-start gap-4 bg-[#ffffff0a] border border-white/20 rounded-lg px-5 py-4 text-left text-white backdrop-blur-sm"
            >
              <div className="min-w-[32px] h-[32px] flex items-center justify-center text-green-400 font-bold text-lg border border-green-500 rounded-full">
                {index + 1}
              </div>
              <p className="text-lg leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
