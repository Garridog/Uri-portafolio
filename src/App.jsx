
import "./App.css";

const projects = [
  {
    number: "01",
    name: "Limpia-va",
    type: "Full Stack · Plataforma de servicios",
    description:
      "Una plataforma para gestionar pedidos, clientes, recolecciones y entregas de una tintorería.",
    technologies: ["React", "Node.js", "PostgreSQL"],
    status: "En desarrollo",
  },
  {
    number: "02",
    name: "AI Workflow Hub",
    type: "Full Stack · Automatización",
    description:
      "Un dashboard para centralizar flujos de automatización, ejecuciones e integraciones con inteligencia artificial.",
    technologies: ["React", "Express", "AI APIs"],
    status: "Concepto",
  },
  {
    number: "03",
    name: "Portfolio Website",
    type: "Frontend · Marca personal",
    description:
      "Mi espacio profesional para compartir proyectos, experiencia técnica y soluciones digitales.",
    technologies: ["React", "JavaScript", "CSS"],
    status: "En desarrollo",
  },
];

const skills = [
  "JavaScript",
  "React",
  "Angular",
  "Node.js",
  "Express",
  "HTML & CSS",
  "REST APIs",
  "Git",
  "UX/UI",
  "Scrum",
];

function App() {
  return (
    <>
      <header className="navbar">
        <a className="brand" href="#inicio" aria-label="Inicio">
          UG<span>.</span>
        </a>

        <nav className="nav-links" aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto" className="nav-contact">
            Hablemos <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero container" id="inicio">
          <div className="availability">
            <span className="availability-dot" />
            DESARROLLO · TECNOLOGÍA · PRODUCTO
          </div>

          <h1>
            Transformo ideas
            <br />
            en <span>productos digitales.</span>
          </h1>

          <p className="hero-description">
            Soy desarrollador de software y Scrum Master. Combino
            desarrollo frontend, visión de producto y liderazgo para
            construir soluciones digitales con propósito.
          </p>

          <div className="hero-actions">
            <a className="button button-dark" href="#proyectos">
              Explorar proyectos <span aria-hidden="true">↘</span>
            </a>
            <a className="button button-light" href="#contacto">
              Contactarme
            </a>
          </div>

          <div className="hero-meta">
            <span>FRONTEND & FULL STACK</span>
            <span>DISEÑO · CÓDIGO · COLABORACIÓN</span>
          </div>
        </section>

        <section className="projects-section section" id="proyectos">
          <div className="container">
            <div className="section-heading">
              <div>
                <span className="eyebrow">TRABAJO SELECCIONADO</span>
                <h2>Proyectos destacados<span>.</span></h2>
              </div>
              <p>
                Ideas que se convierten en experiencias digitales
                útiles, funcionales y escalables.
              </p>
            </div>

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.number}>
                  <div className="project-top">
                    <span className="project-number">
                      / {project.number}
                    </span>
                    <span className="project-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>

                  <div className="project-content">
                    <span className="project-type">{project.type}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>

                    <div className="tech-list">
                      {project.technologies.map((technology) => (
                        <span className="tech-tag" key={technology}>
                          {technology}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="project-footer">
                    <span className="status-dot" />
                    {project.status}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="about-section section" id="sobre-mi">
          <div className="container about-grid">
            <div>
              <span className="eyebrow">UN POCO SOBRE MÍ</span>
              <h2>
                Código con propósito.
                <br />
                <span>Visión de producto.</span>
              </h2>
            </div>

            <div className="about-copy">
              <p>
                Mi experiencia combina desarrollo de software, diseño
                de experiencias digitales y liderazgo de equipos.
                Me interesa crear productos que resuelvan problemas
                reales y aporten valor al negocio.
              </p>
              <p>
                Actualmente estoy profundizando en el desarrollo Full
                Stack con JavaScript, React, Node.js y bases de datos,
                construyendo proyectos de principio a fin.
              </p>

              <div className="skills-list">
                {skills.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="contact-section section" id="contacto">
          <div className="container contact-panel">
            <span className="eyebrow">¿CONSTRUIMOS ALGO?</span>
            <h2>
              Las buenas ideas
              <br />
              empiezan con una conversación<span>.</span>
            </h2>
            <p>
              Abierto a proyectos interesantes, colaboraciones y
              oportunidades profesionales.
            </p>

            <a
              className="button button-dark"
              href="mailto:TU_CORREO@EJEMPLO.COM"
            >
              Hablemos <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer container">
        <a className="brand" href="#inicio">
          UG<span>.</span>
        </a>
        <span>Diseñado y construido con React.</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </>
  );
}

export default App;
