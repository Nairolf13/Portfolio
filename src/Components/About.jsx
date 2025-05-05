import React from "react";

function About() {
  return (
    <section
      id="about"
      className="min-h-[calc(100vh-80px)] flex items-center justify-center p-8 bg-vanta-custom text-center"
    >
      <div>
        <h2 className="text-3xl text-white font-semibold mb-8">
          À propos de moi
        </h2>
        <p className="max-w-3xl text-white mx-auto text-xl">
          Je suis un développeur web avec une passion pour la création
          d'interfaces modernes et intuitives. Mon objectif est de toujours
          améliorer mes compétences tout en réalisant des projets inspirants.
        </p>
      </div>
    </section>
  );
}

export default About;
