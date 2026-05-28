import { useScrollReveal } from "../../hooks/useScrollReveal";
import "./Contacto.css";

const steps = [
  { num: "01", label: "Conversamos", icon: "💡" },
  { num: "02", label: "Diseñamos", icon: "🎨" },
  { num: "03", label: "Desarrollamos", icon: "💻" },
  { num: "04", label: "Desplegamos", icon: "🚀" },
];

function Contacto() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="contacto" id="contacto" ref={ref}>
      <div className="contacto-container">
        <div className="contacto-info reveal">
          <span className="section-label">Contacto</span>

          <h2>¿Tienes una idea en mente?</h2>

          <p>
            Conversamos sobre tu proyecto, diseñamos la solución ideal y
            desarrollamos una experiencia moderna para tu negocio.
          </p>

          <div className="road">
            {steps.map((s, i) => (
              <div className="road-step" key={s.num}>
                <div className="road-dot">
                  <span>{s.icon}</span>
                </div>
                <span className="road-label">{s.label}</span>
                {i < steps.length - 0 && <div className="road-line" />}
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/51944501816"
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            Hablar por WhatsApp
          </a>
        </div>

        <form
          className="contact-form reveal reveal-delay-2"
          action="https://formsubmit.co/pastor.jhosue07@gmail.com"
          method="POST"
        >
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />

          <div className="form-group">
            <input
              type="text"
              name="nombre"
              id="nombre"
              placeholder=" "
              required
            />
            <label htmlFor="nombre">Tu nombre</label>
          </div>

          <div className="form-group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              required
            />
            <label htmlFor="email">Tu correo</label>
          </div>

          <div className="form-group">
            <textarea
              name="mensaje"
              id="mensaje"
              placeholder=" "
              rows={5}
              required
            ></textarea>
            <label htmlFor="mensaje">Cuéntame sobre tu proyecto...</label>
          </div>

          <button type="submit" className="submit-btn">
            Enviar mensaje
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 2 11 13" />
              <path d="m22 2-7 20-4-9-9-4 20-7z" />
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contacto;
