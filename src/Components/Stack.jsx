import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../LanguageContext';
import '../Assets/css/Stack.css';

const techLogos = import.meta.glob('../Assets/imgs/technologies/*', { eager: true });

const getLogo = (filename) => {
  const basePath = import.meta.env.PROD ? '/Portfolio' : '';
  const path = `../Assets/imgs/technologies/${filename}`;
  return techLogos[path]?.default || techLogos[path];
};

const Stack = () => {
  const { t } = useLanguage();
  const [hoveredTech, setHoveredTech] = useState(null);
  const [visibleTechs, setVisibleTechs] = useState([]);
  const [matrixMode, setMatrixMode] = useState(false);
  const [mobileClickCount, setMobileClickCount] = useState(0);
  const [showMobileFeedback, setShowMobileFeedback] = useState(false);
  const stackRef = useRef(null);
  const clickCountRef = useRef(0);
  const clickTimerRef = useRef(null);
  const matrixIntervalRef = useRef(null);
  const animationFrameIds = useRef([]);
  const mobileFeedbackTimerRef = useRef(null);

  const matrixChars = '01アカサタナハマヤラワガザダバパイキシチニヒミイリウィギジヂビピウクスツヌフムユルグズヅブプエケセテネヘメエレヱゲゼデベペオコソトノホモヨロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  const createMatrixRain = () => {
    const columns = Math.floor(window.innerWidth / 20);

    const existingColumns = document.querySelectorAll('.matrix-column');
    existingColumns.forEach(col => {
      if (col.stopAnimation) {
        col.stopAnimation();
      }
      col.remove();
    });
    
    animationFrameIds.current = [];

    for (let i = 0; i < columns; i++) {
      const column = document.createElement('div');
      column.className = 'matrix-column';
      column.style.left = `${i * 20}px`;
      
      document.body.appendChild(column);
      
      setTimeout(() => {
        dropMatrixChars(column, i);
      }, Math.random() * 1000);
    }
  };

  const dropMatrixChars = (column, index) => {
    const chars = [];
    const maxChars = Math.floor(window.innerHeight / 18) + 10;
    
    for (let i = 0; i < maxChars; i++) {
      const char = document.createElement('span');
      char.className = 'matrix-char';
      char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      char.style.opacity = Math.max(0, 1 - (i * 0.05));
      chars.push(char);
      column.appendChild(char);
    }

    let position = -maxChars * 18 - (Math.random() * 1000); 
    const speed = 1 + Math.random() * 4;
    let isRunning = true;

    const animateColumn = () => {
      if (!isRunning) return;
      
      position += speed;
      column.style.transform = `translateY(${position}px)`;
      
      if (Math.random() < 0.05) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        if (chars[randomIndex]) {
          chars[randomIndex].textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
      }
      
      if (position > window.innerHeight + 200) {
        position = -maxChars * 18 - (Math.random() * 500);
        chars.forEach(char => {
          char.textContent = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        });
      }
      
      const frameId = requestAnimationFrame(animateColumn);
      animationFrameIds.current[index] = frameId;
    };
    
    column.stopAnimation = () => {
      isRunning = false;
      if (animationFrameIds.current[index]) {
        cancelAnimationFrame(animationFrameIds.current[index]);
      }
    };
    
    requestAnimationFrame(animateColumn);
  };

  const handleTitleClick = () => {
    clickCountRef.current += 1;
    
    const isMobile = window.innerWidth <= 768 || 
                     /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
                     'ontouchstart' in window;
    
    console.log('🔍 Click détecté:', {
      clickCount: clickCountRef.current,
      isMobile,
      windowWidth: window.innerWidth,
      userAgent: navigator.userAgent
    });
    
    if (clickTimerRef.current) {
      clearTimeout(clickTimerRef.current);
    }
    
    if (clickCountRef.current === 3) {
      console.log('🎯 Triple-clic détecté ! Activation Matrix');
      toggleMatrixMode();
      clickCountRef.current = 0;
      if (isMobile) {
        setMobileClickCount(0);
        setShowMobileFeedback(false);
        if (mobileFeedbackTimerRef.current) {
          clearTimeout(mobileFeedbackTimerRef.current);
        }
      }
    } else {
      if (isMobile) {
        console.log('📱 Feedback mobile activé - Click:', clickCountRef.current);
        setMobileClickCount(clickCountRef.current);
        setShowMobileFeedback(true);
        
        if (mobileFeedbackTimerRef.current) {
          clearTimeout(mobileFeedbackTimerRef.current);
        }
        
        mobileFeedbackTimerRef.current = setTimeout(() => {
          setShowMobileFeedback(false);
          console.log('📱 Feedback mobile masqué automatiquement');
        }, 2500);
      }
      
      clickTimerRef.current = setTimeout(() => {
        clickCountRef.current = 0;
        if (isMobile) {
          setMobileClickCount(0);
          setShowMobileFeedback(false);
        }
      }, 800);
    }
  };

  const toggleMatrixMode = () => {
    setMatrixMode(!matrixMode);
    
    if (!matrixMode) {
      setTimeout(() => {
        createMatrixRain();
      }, 100);
      
      console.log(`
🎯 ${t('stack.easterEgg.activated')} 
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█ 🔥 ${t('stack.easterEgg.matrixActivated')} 🔥 █
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
      `);
    } else {
      const columns = document.querySelectorAll('.matrix-column');
      columns?.forEach(col => {
        if (col.stopAnimation) {
          col.stopAnimation();
        }
        col.remove();
      });
      
      animationFrameIds.current.forEach(id => {
        if (id) cancelAnimationFrame(id);
      });
      animationFrameIds.current = [];
    }
    
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      background: var(--bg-blur);
      color: var(--accent-color);
      padding: 15px 20px;
      border-radius: 10px;
      border: 1px solid var(--accent-color);
      backdrop-filter: blur(10px);
      z-index: 9999;
      font-family: 'Courier New', monospace;
      box-shadow: 0 0 20px rgba(0, 184, 148, 0.3);
      animation: slideInRight 0.5s ease-out;
    `;
    notification.innerHTML = matrixMode ? 
      `🎯 ${t('stack.easterEgg.matrixDisabled')}` : 
      `🔥 ${t('stack.easterEgg.matrixEnabled')}<br><small>${t('stack.easterEgg.foundSecret')}</small>`;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
      if (notification.parentNode) {
        notification.remove();
      }
    }, 3000);
  };

  const technologies = [
    {
      category: 'Frontend',
      items: [
        { name: 'React', icon: getLogo('react.svg'), color: '#61DAFB' },
        { name: 'JavaScript', icon: getLogo('javascript.svg'), color: '#F7DF1E' },
        { name: 'HTML5', icon: getLogo('html5.svg'), color: '#E34F26' },
        { name: 'CSS3', icon: getLogo('css3.svg'), color: '#1572B6' },
        { name: 'Tailwind CSS', icon: getLogo('Tailwind_CSS_Logo.svg'), color: '#06B6D4' },
        { name: 'SCSS', icon: getLogo('sass.svg'), color: '#CF649A' },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: getLogo('nodejs.svg'), color: '#339933' },
        { name: 'Express', icon: getLogo('express.svg'), color: '#FFFFFF' },
        { name: 'PHP',  icon: getLogo('php.svg'), color: '#777BB4' },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: getLogo('mysql.svg'), color: '#4479A1' },
        { name: 'PostgreSQL', icon: getLogo('postgresql.svg'), color: '#336791' },
        { name: 'MongoDB', icon: getLogo('mongodb.svg'), color: '#47A248' },
      ]
    },
    {
      category: 'Tools & DevOps',
      items: [
        { name: 'Git', icon: getLogo('git.svg'), color: '#F05032' },
        { name: 'Docker', icon: getLogo('docker.svg'), color: '#2496ED' },
        { name: 'Vite', icon: getLogo('vite.svg'), color: '#646CFF' },
        { name: 'Linux',icon: getLogo('linux.svg'), color: '#FCC624' },
      ]
    },
    {
      category: 'Design & Animation',
      items: [
        { name: 'Figma', icon: getLogo('figma.svg'), color: '#F24E1E' },
        { name: 'GSAP', icon: getLogo('GSAP-Meta-image.webp'), color: '#88CE02' },
        { name: 'Framer Motion', icon: getLogo('framer.webp'), color: '#0055FF' },
        { name: 'Three.js', icon: getLogo('threejs.svg'), color: '#FFFFFF' },
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

  useEffect(() => {
    if (!window.stackEasterEggLogged) {
      console.log(`
🎯 Portfolio Bricchi Florian 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
💭 "${t('stack.easterEgg.consoleHint1')}" 
🔍 ${t('stack.easterEgg.consoleHint2')}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      `);
      window.stackEasterEggLogged = true;
    }
  }, []);

  useEffect(() => {
    return () => {
      if (clickTimerRef.current) {
        clearTimeout(clickTimerRef.current);
      }
      if (mobileFeedbackTimerRef.current) {
        clearTimeout(mobileFeedbackTimerRef.current);
      }
      if (matrixIntervalRef.current) {
        clearInterval(matrixIntervalRef.current);
      }
      animationFrameIds.current.forEach(id => {
        if (id) cancelAnimationFrame(id);
      });
      const columns = document.querySelectorAll('.matrix-column');
      columns?.forEach(col => {
        if (col.stopAnimation) {
          col.stopAnimation();
        }
        col.remove();
      });
    };
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
          <div className="text-center mb-12">
            <h2 
              className="text-3xl font-semibold text-center mb-8 font-orbitron cursor-pointer select-none hover:scale-105 transition-transform duration-300 stack-title-mobile-hint"
              style={{ 
                color: 'var(--text-primary)',
                textShadow: matrixMode ? '0 0 10px var(--accent-color)' : 'none'
              }}
              onClick={handleTitleClick}
              title={t('stack.easterEgg.titleHint')}
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

          <div className={`space-y-12 w-full ${matrixMode ? 'matrix-mode' : ''}`}>
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
                        <div className="tech-bg"></div>
                        <div className="tech-glow"></div>
                        
                        <div className="tech-content relative z-10 p-4 md:p-6">
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
                          </div>

                          <div className="tech-hover-effect">
                            <div className="hover-ripple"></div>
                          </div>
                        </div>

                        <div className="tech-particles">
                          {!matrixMode && [...Array(6)].map((_, i) => (
                            <div 
                              key={i} 
                              className={`tech-particle tech-particle-${i + 1}`}
                            ></div>
                          ))}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {process.env.NODE_ENV === 'development' && (
            <div className="fixed top-4 left-4 bg-black text-white p-2 rounded z-50">
              <p>Debug - Mobile: {String(window.innerWidth <= 768)}</p>
              <p>ClickCount: {mobileClickCount}</p>
              <p>ShowFeedback: {String(showMobileFeedback)}</p>
            </div>
          )}

          {showMobileFeedback && (
            <div className="mobile-feedback-overlay fixed inset-0 pointer-events-none z-40">
              <div className="mobile-feedback absolute bottom-8 left-1/2 transform -translate-x-1/2 pointer-events-auto">
                <div 
                  className="feedback-card px-6 py-3 rounded-xl backdrop-blur-lg border shadow-lg transition-all duration-300"
                  style={{
                    background: 'var(--bg-blur)',
                    borderColor: 'var(--accent-color)',
                    color: 'var(--text-primary)',
                    boxShadow: '0 0 20px rgba(0, 184, 148, 0.2)'
                  }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="feedback-icon text-lg">
                      {mobileClickCount === 1 && '🤔'}
                      {mobileClickCount === 2 && '😏'}
                    </span>
                    <p className="feedback-text text-sm font-medium">
                      {mobileClickCount === 1 && t('stack.easterEgg.mobileFeedback.firstClick')}
                      {mobileClickCount === 2 && t('stack.easterEgg.mobileFeedback.secondClick')}
                    </p>
                  </div>
                  
                  <div className="progress-hint mt-2 h-1 bg-gray-300 rounded-full overflow-hidden">
                    <div 
                      className="h-full transition-all duration-300 rounded-full"
                      style={{ 
                        width: `${(mobileClickCount / 3) * 100}%`,
                        backgroundColor: 'var(--accent-color)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {process.env.NODE_ENV === 'development' && (
            <div 
              className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50 bg-blue-500 text-white p-4 rounded-lg"
              style={{ minWidth: '200px' }}
            >
              <p className="text-center text-sm">
                {mobileClickCount === 1 && t('stack.easterEgg.mobileFeedback.testFirst')}
                {mobileClickCount === 2 && t('stack.easterEgg.mobileFeedback.testSecond')}
                {mobileClickCount === 0 && t('stack.easterEgg.mobileFeedback.testDefault')}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Stack;
