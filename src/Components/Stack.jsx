import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import '../Assets/css/Stack.css';

const techLogos = import.meta.glob('../Assets/imgs/technologies/*', { eager: true });

const getLogo = (filename) => {
  const path = `../Assets/imgs/technologies/${filename}`;
  return techLogos[path]?.default || techLogos[path];
};

const Stack = () => {
  const { t } = useLanguage();
  const [hoveredTech, setHoveredTech] = useState(null);
  const [visibleTechs, setVisibleTechs] = useState([]);
  const stackRef = useRef(null);

  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', level: 90, icon: getLogo('react.svg'), color: '#61DAFB' },
        { name: 'JavaScript', level: 95, icon: getLogo('javascript.svg'), color: '#F7DF1E' },
        { name: 'HTML5', level: 95, icon: getLogo('html5.svg'), color: '#E34F26' },
        { name: 'CSS3', level: 90, icon: getLogo('css3.svg'), color: '#1572B6' },
        { name: 'Tailwind CSS', level: 88, icon: getLogo('Tailwind_CSS_Logo.svg'), color: '#06B6D4' },
        { name: 'SCSS', level: 85, icon: getLogo('sass.svg'), color: '#CF649A' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', level: 85, icon: getLogo('nodejs.svg'), color: '#339933' },
        { name: 'Express', level: 80, icon: getLogo('express.svg'), color: '#FFFFFF' },
        { name: 'PHP', level: 88, icon: getLogo('php.svg'), color: '#777BB4' },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', level: 85, icon: getLogo('mysql.svg'), color: '#4479A1' },
        { name: 'PostgreSQL', level: 80, icon: getLogo('postgresql.svg'), color: '#336791' },
        { name: 'MongoDB', level: 75, icon: getLogo('mongodb.svg'), color: '#47A248' },
      ]
    },
    {
      category: 'Tools & DevOps',
      items: [
        { name: 'Git', level: 90, icon: getLogo('git.svg'), color: '#F05032' },
        { name: 'Docker', level: 75, icon: getLogo('docker.svg'), color: '#2496ED' },
        { name: 'Vite', level: 85, icon: getLogo('vite.svg'), color: '#646CFF' },
        { name: 'Linux', level: 80, icon: getLogo('linux.svg'), color: '#FCC624' },
      ]
    },
    {
      category: 'Design & Animation',
      items: [
        { name: 'Figma', level: 85, icon: getLogo('figma.svg'), color: '#F24E1E' },
        { name: 'GSAP', level: 80, icon: getLogo('GSAP-Meta-image.webp'), color: '#88CE02' },
        { name: 'Framer Motion', level: 85, icon: getLogo('framer.webp'), color: '#0055FF' },
        { name: 'Three.js', level: 75, icon: getLogo('threejs.svg'), color: '#FFFFFF' },
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const categoryIndex = parseInt(entry.target.dataset.category);
            setTimeout(() => {
              setVisibleTechs(prev => [...prev, categoryIndex]);
            }, categoryIndex * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const categoryElements = stackRef.current?.querySelectorAll('.tech-category');
    categoryElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const getExperienceText = (level) => {
    if (level >= 90) return { text: t('stack.expert'), class: 'expert' };
    if (level >= 80) return { text: t('stack.advanced'), class: 'advanced' };
    if (level >= 70) return { text: t('stack.intermediate'), class: 'intermediate' };
    return { text: t('stack.beginner'), class: 'beginner' };
  };

  return (
    <section id="stack" className="p-4 md:p-8 lg:p-16 relative z-10" ref={stackRef}>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl about-blur-bg px-2 sm:px-4 md:px-6 py-8 md:py-12 flex flex-col items-center">
          {/* Header avec animation de titre */}
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-semibold text-center mb-8 font-orbitron"
              style={{ color: 'var(--text-primary)' }}
            >
              {t('stack.title')}
            </h2>
            <div 
              className="w-24 h-[2px] mx-auto mb-8"
              style={{ backgroundColor: 'var(--accent-color)' }}
            ></div>
            <p className="text-lg opacity-80 max-w-3xl mx-auto leading-relaxed" style={{ color: 'var(--text-primary)' }}>
              {t('stack.subtitle')}
            </p>
          </div>

          {/* Grille des technologies */}
          <div className="space-y-12 w-full">
            {technologies.map((category, categoryIndex) => (
              <div
                key={category.category}
                className={`tech-category ${visibleTechs.includes(categoryIndex) ? 'visible' : ''}`}
                data-category={categoryIndex}
              >
                <h3 className="category-title text-2xl md:text-3xl font-bold mb-6 text-center relative">
                  <span className="category-text" style={{ color: 'var(--accent-color)' }}>
                    {t(`stack.categories.${category.category.toLowerCase().replace(' & ', '_').replace(' ', '_')}`)}
                  </span>
                  <div className="category-underline" style={{ backgroundColor: 'var(--accent-color)' }}></div>
                </h3>

                <div className="tech-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                  {category.items.map((tech, techIndex) => {
                    const experience = getExperienceText(tech.level);
                    return (
                      <div
                        key={tech.name}
                        className={`tech-card group relative overflow-hidden ${hoveredTech === `${categoryIndex}-${techIndex}` ? 'hovered' : ''}`}
                        style={{ '--delay': `${techIndex * 0.1}s`, '--tech-color': tech.color }}
                        onMouseEnter={() => setHoveredTech(`${categoryIndex}-${techIndex}`)}
                        onMouseLeave={() => setHoveredTech(null)}
                      >
                        {/* Background animé */}
                        <div className="tech-bg"></div>
                        <div className="tech-glow"></div>
                        
                        {/* Contenu de la carte */}
                        <div className="tech-content relative z-10 p-4 md:p-6">
                          {/* Icon et nom */}
                          <div className="tech-header mb-4">
                            <div className="tech-icon mb-2 group-hover:scale-110 transition-transform duration-300">
                              <img 
                                src={tech.icon} 
                                alt={tech.name} 
                                className="w-12 h-12 md:w-16 md:h-16 mx-auto object-contain"
                                style={{ filter: 'drop-shadow(0 0 10px rgba(255, 255, 255, 0.3))' }}
                              />
                            </div>
                            <h4 className="tech-name text-lg md:text-xl font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>
                              {tech.name}
                            </h4>
                          </div>

                          {/* Barre de progression */}
                          <div className="tech-progress mb-4">
                            <div className="progress-bg">
                              <div 
                                className="progress-bar"
                                style={{ 
                                  '--progress': `${tech.level}%`,
                                  backgroundColor: tech.color 
                                }}
                              ></div>
                            </div>
                            <div className="progress-text">
                              <span className={`experience-badge ${experience.class}`}>
                                {experience.text}
                              </span>
                              <span className="level-percentage" style={{ color: tech.color }}>{tech.level}%</span>
                            </div>
                          </div>

                          {/* Effet de hover */}
                          <div className="tech-hover-effect">
                            <div className="hover-ripple"></div>
                          </div>
                        </div>

                        {/* Particules flottantes */}
                        <div className="tech-particles">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className={`tech-particle tech-particle-${i + 1}`}></div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stack;
