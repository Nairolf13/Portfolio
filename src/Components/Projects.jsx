import React from "react";
import "../Assets/css/Projects.css"; // Assurez-vous d'importer le fichier CSS contenant vos styles

function Projects() {
  return (
    <section id="projects" className="p-16 bg-vanta-custom">
      <h2 className="text-3xl font-semibold text-center text-white mb-16">
        Projets récents
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {/* Projet 1 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto border-2 border-white rounded-2xl">
          <div className="content h-full flex flex-col justify-between">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow">
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
            <div className="back">
              <div className="back-content">
                <svg
                  stroke="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  fill="#ffffff"
                >
                  <path d="M20.84375..."></path>
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 2 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto border-2 border-white rounded-2xl">
          <div className="content h-full flex flex-col justify-between">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow">
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
            <div className="back">
              <div className="back-content">
                <svg
                  stroke="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  fill="#ffffff"
                >
                  <path d="M20.84375..."></path>
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 3 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto border-2 border-white rounded-2xl">
          <div className="content h-full flex flex-col justify-between">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow">
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
            <div className="back">
              <div className="back-content">
                <svg
                  stroke="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  fill="#ffffff"
                >
                  <path d="M20.84375..."></path>
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 4 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto border-2 border-white rounded-2xl">
          <div className="content h-full flex flex-col justify-between">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow">
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
            <div className="back">
              <div className="back-content">
                <svg
                  stroke="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  fill="#ffffff"
                >
                  <path d="M20.84375..."></path>
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 5 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto border-2 border-white rounded-2xl">
          <div className="content h-full flex flex-col justify-between">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow">
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
            <div className="back">
              <div className="back-content">
                <svg
                  stroke="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  fill="#ffffff"
                >
                  <path d="M20.84375..."></path>
                </svg>
                <strong className="text-white">Voir le projet</strong>
              </div>
            </div>
          </div>
        </div>

        {/* Projet 6 */}
        <div className="card h-[600px] w-full max-w-4xl mx-auto border-2 border-white rounded-2xl">
          <div className="content h-full flex flex-col justify-between">
            <div className="front h-full flex flex-col">
              <div className="img flex-grow">
                <div className="circle"></div>
                <div className="circle" id="right"></div>
                <div className="circle" id="bottom"></div>
              </div>
              <div className="front-content flex-grow">
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
            <div className="back">
              <div className="back-content">
                <svg
                  stroke="#ffffff"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 50 50"
                  height="50px"
                  width="50px"
                  fill="#ffffff"
                >
                  <path d="M20.84375..."></path>
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
