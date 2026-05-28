import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Servicios.css";

const servicios = [
  {
    title: "Desarrollo Web",
    desc: "Sitios rápidos, modernos y optimizados para cualquier negocio.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: "Landing Pages",
    desc: "Páginas enfocadas en convertir visitas en clientes.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 20h16" />
        <path d="M4 4h16v12H4z" />
        <path d="m9 8 3 3 3-3" />
      </svg>
    ),
  },
  {
    title: "Portafolios",
    desc: "Muestra tus proyectos y trabajo con estilo profesional.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="13.5" cy="6.5" r=".5" />
        <circle cx="17.5" cy="6.5" r=".5" />
        <path d="M3 7v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-1.5" />
        <path d="M3 7a2 2 0 0 1 2-2h1.5" />
        <path d="M7 17v-6" />
        <path d="M10 17v-4" />
        <path d="M13 17v-2" />
        <path d="M16 17v-1" />
      </svg>
    ),
  },
  {
    title: "Tiendas Online",
    desc: "E-commerce modernos con pagos y gestión de productos.",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
];

function Servicios() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="servicios" id="servicios" ref={ref}>
      <div className="servicios-header reveal">
        <span className="section-label">Servicios</span>
        <h2>Soluciones digitales modernas</h2>
        <p>
          Creamos experiencias digitales modernas, rápidas y pensadas para
          crecer contigo.
        </p>
      </div>

      <div className="servicios-grid">
        {servicios.map((s, i) => (
          <div
            className="servicio-card reveal"
            key={i}
            style={{ transitionDelay: `${i * 0.08}s` }}
          >
            <div className="card-icon">{s.icon}</div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Servicios;
