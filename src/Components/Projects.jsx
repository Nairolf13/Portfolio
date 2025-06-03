import React, { useEffect, useState, useRef } from "react";
import "../Assets/css/Projects.css";
import PulseLanding from "../Assets/imgs/PulseLanding.webp";
import Pulseconnect from "../Assets/imgs/Pulseconnect.webp";
import AbsentoLending from "../Assets/imgs/AbsentoLending.webp";
import Absento from "../Assets/imgs/Absento.webp";
import CineWave from "../Assets/imgs/CineWave.webp";
import CineLanding from "../Assets/imgs/CineWaveCatalogue.webp";
import PadelLanding from "../Assets/imgs/banierePadel.webp";
import PadelMarseille from "../Assets/imgs/PadelMarseille.webp";
import Gamefolio from "../Assets/imgs/Gamefolio.webp";
import GamefolioLanding from "../Assets/imgs/GamefolioLanding.webp";

function Projects() {
  const [activeCard, setActiveCard] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 768) return; 
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const isCentered =
          rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2; 

        if (isCentered) {
          setActiveCard(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="projects" className="p-16 relative z-10">
      <h2 className="text-3xl font-semibold text-center text-white mb-16 font-orbitron">
        Projets récents
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 justify-items-center max-w-7xl mx-auto">
        {[
          {
            id: 0,
            title: "PulseConnect",
            description: "Plateforme de collaboration pour les artistes",
            frontImage: PulseLanding,
            backImage: Pulseconnect,
            link: "https://pulseconnect.duckdns.org/",
          },
          {
            id: 1,
            title: "Absento",
            description:
              "Site de gestion des absences et des planning pour les entreprises",
            frontImage: AbsentoLending,
            backImage: Absento,
            link: "http://51.91.208.111:5888/",
          },
          {
            id: 2,
            title: "CineWave",
            description: "Application pour suivre les nouvelles sortie de films et séries",
            frontImage: CineLanding,
            backImage: CineWave,
            link: "https://nairolf13.github.io/CineWave/",
          },
          {
            id: 3,
            title: "Padel Marseille",
            description: "Site de réservation pour un club de padel.",
            frontImage: PadelMarseille,
            backImage: PadelLanding,
            link: "",
          },
          {
            id: 4,
            title: "Gamefolio",
            description: "Premier projet de portfolio en mode jeux vidéo 2D fonctionnel uniquement sur PC.",
            frontImage: GamefolioLanding,
            backImage: Gamefolio,
            link: "https://nairolf13.github.io/Gamefolio/",
          },
          {
            id: 5,
            title: "Progetto 789",
            description: "Description courte du projet.",
            frontImage: AbsentoLending,
            backImage: Absento,
            link: "",
          },
        ].map((project) => (
          <div
            key={project.id}
            className={`card h-[550px] w-full max-w-2xl mx-auto ${
              activeCard === project.id && window.innerWidth <= 768
                ? "show-front"
                : ""
            }`}
            ref={(el) => (cardsRef.current[project.id] = el)}
          >
            <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
              {/* Back */}
              <div className="back backdrop-blur-md relative h-full">
                <img
                  src={project.backImage}
                  alt="BackImage"
                  className="w-full h-full object-cover block"
                />
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} project`}
                  className="absolute inset-0 w-full h-full z-10"
                ></a>
              </div>
              {/* Front */}
              <div className="front h-full relative">
                <img
                  src={project.frontImage}
                  alt={project.title}
                  className="front-img w-full h-full object-cover"
                />
                <div className="front-content absolute bottom-0 left-0 right-0">
                  <small className="badge">Projet {project.id + 1}</small>
                  <div className="description">
                    <div className="title">
                      <p>
                        <strong className="font-orbitron">{project.title}</strong>
                      </p>
                    </div>
                    <p className="card-footer">{project.description}</p>
                  </div>
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ${project.title} project`}
                  className="absolute inset-0 w-full h-full z-10"
                ></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
