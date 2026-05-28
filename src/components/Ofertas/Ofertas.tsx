import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Ofertas.css";

const ofertas = [
  {
    title: "Landing Page",
    price: "S/ 99",
    original: "S/ 199",
    features: [
      "1 página",
      "Diseño responsive",
      "Formulario de contacto",
      "Hosting 1 año",
    ],
    popular: false,
  },
  {
    title: "Web Profesional",
    price: "S/ 249",
    original: "S/ 499",
    features: [
      "Hasta 5 páginas",
      "Diseño responsive",
      "Formulario + WhatsApp",
      "Hosting 1 año",
      "SEO básico",
    ],
    popular: true,
  },
  {
    title: "Sistema Web",
    price: "S/ 599",
    original: "S/ 999",
    features: [
      "Panel administrativo",
      "Base de datos",
      "Login de usuarios",
      "API incluida",
      "Soporte 3 meses",
    ],
    popular: false,
  },
];

function Ofertas() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="ofertas" id="ofertas" ref={ref}>
      <div className="ofertas-header reveal">
        <span className="section-label">Precios</span>
        <h2>Planes accesibles para empezar</h2>
        <p>
          Precios bajos pensados para negocios que quieren despegar sin gastar
          de más.
        </p>
      </div>

      <div className="ofertas-grid">
        {ofertas.map((o, i) => (
          <div
            className={`oferta-card reveal${o.popular ? " popular" : ""}`}
            key={o.title}
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {o.popular && <span className="popular-badge">Más elegido</span>}

            <h3>{o.title}</h3>

            <div className="oferta-price">
              <span className="price-current">{o.price}</span>
              <span className="price-original">{o.original}</span>
            </div>

            <ul className="oferta-features">
              {o.features.map((f) => (
                <li key={f}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {f}
                </li>
              ))}
            </ul>

            <a href="https://wa.me/51944501816" target="_blank" rel="noopener noreferrer" className="oferta-btn">
              Lo quiero
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Ofertas;
