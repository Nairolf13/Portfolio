import { useEffect, useState, useRef } from "react";
import "../Assets/css/Projects.css";

// Import dynamique de toutes les images .webp du dossier imgs
const images = import.meta.glob('../Assets/imgs/*.webp', { eager: true, as: 'url' });
const getImg = (filename) => images[`../Assets/imgs/${filename}`];

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
    <section id="projects" className="p-4 md:p-8 lg:p-16 relative z-10">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl about-blur-bg px-2 sm:px-4 md:px-6 py-8 md:py-12 flex flex-col items-center">
        <h2 className="text-3xl font-semibold text-center text-white mb-16 font-orbitron">
          Projets récents
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 justify-items-center w-full">
          {[
            {
              id: 0,
              title: "PulseConnect",
              description: "Plateforme de collaboration pour les artistes",
              frontImage: getImg('PulseLanding.webp'),
              backImage: getImg('Pulseconnect.webp'),
              link: "https://pulseconnect.duckdns.org/",
            },
            {
              id: 1,
              title: "Absento",
              description:
                "Site de gestion des absences et des planning pour les entreprises",
              frontImage: getImg('AbsentoLending.webp'),
              backImage: getImg('Absento.webp'),
              link: "http://51.91.208.111:5888/",
            },
            {
              id: 2,
              title: "CineWave",
              description: "Application pour suivre les nouvelles sortie de films et séries",
              frontImage: getImg('CineWaveCatalogue.webp'),
              backImage: getImg('CineWave.webp'),
              link: "https://nairolf13.github.io/CineWave/",
            },
            {
              id: 3,
              title: "Padel Marseille",
              description: "Site de réservation pour un club de padel.",
              frontImage: getImg('PadelMarseille.webp'),
              backImage: getImg('banierePadel.webp'),
              link: "",
            },
            {
              id: 4,
              title: "Gamefolio",
              description: "Premier projet de portfolio en mode jeux vidéo 2D fonctionnel uniquement sur PC.",
              frontImage: getImg('GamefolioLanding.webp'),
              backImage: getImg('Gamefolio.webp'),
              link: "https://nairolf13.github.io/Gamefolio/",
            },
            {
              id: 5,
              title: "Progetto 789",
              description: "Description courte du projet.",
              frontImage: getImg('AbsentoLending.webp'),
              backImage: getImg('Absento.webp'),
              link: "",
            },
          ].map((project) => (
            <div
              key={project.id}
              className={`card w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto ${
                activeCard === project.id && window.innerWidth <= 768
                  ? "show-front"
                  : ""
              }`}
              ref={(el) => (cardsRef.current[project.id] = el)}
            >
              <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
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
      </div>
      </div>
    </section>
  );
}

export default Projects;
