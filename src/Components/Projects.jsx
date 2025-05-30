import React from "react";
import "../Assets/css/Projects.css";

function Projects() {
  return (
    <section id="projects" className="p-16 relative z-10">
      <h2 className="text-3xl font-semibold text-center text-white mb-16">
        Projets récents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Projet 1 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto">
          <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow backdrop-blur-sm">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow backdrop-blur-sm">
                <small className="badge">Projet 1</small>
                <div className="description">
                  <div className="title">
                    <p>
                      <strong>PulseConnect</strong>
                    </p>
                  </div>
                  <p className="card-footer">Description courte du projet.</p>
                </div>
              </div>
            </div>
            <div className="back backdrop-blur-md">
              <div className="back-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="50px"
                  width="50px"
                  fill="none"
                >
                  <path
                    d="M10 6 L16 12 L10 18"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 2 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto">
          <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow backdrop-blur-sm">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow backdrop-blur-sm">
                <small className="badge">Projet 2</small>
                <div className="description">
                  <div className="title">
                    <p>
                      <strong>Absento</strong>
                    </p>
                  </div>
                  <p className="card-footer">Description courte du projet.</p>
                </div>
              </div>
            </div>
            <div className="back backdrop-blur-md">
              <div className="back-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="50px"
                  width="50px"
                  fill="none"
                >
                  <path
                    d="M10 6 L16 12 L10 18"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 3 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto">
          <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow backdrop-blur-sm">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow backdrop-blur-sm">
                <small className="badge">Projet 3</small>
                <div className="description">
                  <div className="title">
                    <p>
                      <strong>Progetto XYZ</strong>
                    </p>
                  </div>
                  <p className="card-footer">Description courte du projet.</p>
                </div>
              </div>
            </div>
            <div className="back backdrop-blur-md">
              <div className="back-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="50px"
                  width="50px"
                  fill="none"
                >
                  <path
                    d="M10 6 L16 12 L10 18"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 4 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto">
          <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow backdrop-blur-sm">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow backdrop-blur-sm">
                <small className="badge">Projet 4</small>
                <div className="description">
                  <div className="title">
                    <p>
                      <strong>Progetto 123</strong>
                    </p>
                  </div>
                  <p className="card-footer">Description courte du projet.</p>
                </div>
              </div>
            </div>
            <div className="back backdrop-blur-md">
              <div className="back-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="50px"
                  width="50px"
                  fill="none"
                >
                  <path
                    d="M10 6 L16 12 L10 18"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 5 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto">
          <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow backdrop-blur-sm">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow backdrop-blur-sm">
                <small className="badge">Projet 5</small>
                <div className="description">
                  <div className="title">
                    <p>
                      <strong>Progetto 456</strong>
                    </p>
                  </div>
                  <p className="card-footer">Description courte du projet.</p>
                </div>
              </div>
            </div>
            <div className="back backdrop-blur-md">
              <div className="back-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="50px"
                  width="50px"
                  fill="none"
                >
                  <path
                    d="M10 6 L16 12 L10 18"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 6 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto">
          <div className="content h-full flex flex-col justify-between bg-[#1a1a1a80] backdrop-blur-xl">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow backdrop-blur-sm">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow backdrop-blur-sm">
                <small className="badge">Projet 6</small>
                <div className="description">
                  <div className="title">
                    <p>
                      <strong>Progetto 789</strong>
                    </p>
                  </div>
                  <p className="card-footer">Description courte du projet.</p>
                </div>
              </div>
            </div>
            <div className="back backdrop-blur-md">
              <div className="back-content">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  height="50px"
                  width="50px"
                  fill="none"
                >
                  <path
                    d="M10 6 L16 12 L10 18"
                    stroke="#ffffff"
                    strokeWidth="2"
                  />
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
