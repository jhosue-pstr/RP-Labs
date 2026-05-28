import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Hero.css";

function Hero() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="hero" id="hero" ref={ref}>
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-glow" />

      <div className="hero-content reveal">
        <span className="hero-badge">Diseño & Desarrollo Web</span>

        <h1>
          Creamos experiencias{" "}
          <span className="gradient-text">digitales modernas</span>
        </h1>

        <p>
          Desarrollo web, software a medida y soluciones digitales pensadas para
          impulsar tu marca y hacer crecer tu negocio.
        </p>

        <div className="hero-buttons">
          <a href="#contacto" className="btn-primary">
            Trabajemos juntos
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>

          <a href="#proyectos" className="btn-secondary">
            Ver proyectos
          </a>
        </div>
      </div>

      <div className="hero-floating">
        <div className="float-circle c1" />
        <div className="float-circle c2" />
        <div className="float-circle c3" />
      </div>
    </section>
  );
}

export default Hero;
