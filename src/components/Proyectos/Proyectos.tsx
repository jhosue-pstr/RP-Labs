import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Proyectos.css";

const proyectos = [
  {
    title: "Proyecto 1",
    desc: "Descripción breve del proyecto y las tecnologías utilizadas.",
    tags: ["React", "TypeScript", "Node.js"],
    color: "#6366f1",
  },
  {
    title: "Proyecto 2",
    desc: "Descripción breve del proyecto y las tecnologías utilizadas.",
    tags: ["Next.js", "PostgreSQL", "Tailwind"],
    color: "#a855f7",
  },
  {
    title: "Proyecto 3",
    desc: "Descripción breve del proyecto y las tecnologías utilizadas.",
    tags: ["Vue.js", "Firebase", "Stripe"],
    color: "#06b6d4",
  },
  {
    title: "Proyecto 4",
    desc: "Descripción breve del proyecto y las tecnologías utilizadas.",
    tags: ["React", "Express", "MongoDB"],
    color: "#8b5cf6",
  },
];

function Proyectos() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="proyectos" id="proyectos" ref={ref}>
      <div className="proyectos-header reveal">
        <span className="section-label">Proyectos</span>
        <h2>Proyectos recientes</h2>
        <p>
          Algunos de los trabajos que hemos realizado para nuestros clientes.
        </p>
      </div>

      <div className="proyectos-grid">
        {proyectos.map((p, i) => (
          <div
            className="proyecto-card reveal"
            key={i}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            <div
              className="proyecto-thumb"
              style={{ background: `linear-gradient(135deg, ${p.color}22, ${p.color}44)` }}
            >
              <div className="proyecto-placeholder" style={{ color: p.color }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" />
                  <path d="M8 21h8" />
                  <path d="M12 17v4" />
                </svg>
              </div>
            </div>

            <div className="proyecto-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="proyecto-tags">
                {p.tags.map((t) => (
                  <span key={t} className="proyecto-tag">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
