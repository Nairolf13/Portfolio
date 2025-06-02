import React, { useEffect, useState, useRef } from "react";
import "../Assets/css/Projects.css";
import PulseLanding from "../Assets/imgs/PulseLanding.webp";
import Pulseconnect from "../Assets/imgs/Pulseconnect.webp";
import AbsentoLending from "../Assets/imgs/AbsentoLending.webp";
import Absento from "../Assets/imgs/Absento.webp";

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
      <h2 className="text-3xl font-semibold text-center text-white mb-16">
        Projets récents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
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
            title: "Progetto XYZ",
            description: "Description courte du projet.",
            frontImage: PulseLanding,
            backImage: Pulseconnect,
            link: "https://pulseconnect.duckdns.org/",
          },
          {
            id: 3,
            title: "Progetto 123",
            description: "Description courte du projet.",
            frontImage: AbsentoLending,
            backImage: Absento,
            link: "http://51.91.208.111:5888/",
          },
          {
            id: 4,
            title: "Progetto 456",
            description: "Description courte du projet.",
            frontImage: PulseLanding,
            backImage: Pulseconnect,
            link: "https://pulseconnect.duckdns.org/",
          },
          {
            id: 5,
            title: "Progetto 789",
            description: "Description courte du projet.",
            frontImage: AbsentoLending,
            backImage: Absento,
            link: "http://51.91.208.111:5888/",
          },
        ].map((project) => (
          <div
            key={project.id}
            className={`card h-[600px] w-full max-w-4xl mx-auto ${
              activeCard === project.id && window.innerWidth <= 768
                ? "show-front"
                : ""
            }`}
            ref={(el) => (cardsRef.current[project.id] = el)}
          >
            <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
              {/* Back */}
              <div className="back backdrop-blur-md relative h-full">
                <div className="back-content absolute inset-0 flex flex-col justify-end items-center">
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
                    className="absolute inset-0 flex justify-center items-end"
                  ></a>
                </div>
              </div>
              {/* Front */}
              <div className="front h-full flex flex-col">
                <div className="img flex-grow backdrop-blur-sm">
                  <img
                    src={project.frontImage}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="front-content flex-grow backdrop-blur-sm">
                  <small className="badge">Projet {project.id + 1}</small>
                  <div className="description">
                    <div className="title">
                      <p>
                        <strong>{project.title}</strong>
                      </p>
                    </div>
                    <p className="card-footer">{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
