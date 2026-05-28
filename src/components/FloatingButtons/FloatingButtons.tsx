// import { useState } from "react";
import "./FloatingButtons.css";

function FloatingButtons() {
  // const [showOfertas, setShowOfertas] = useState(false);

  return (
    <>
      <div className="fab-whatsapp">
        <a
          href="https://wa.me/51944501816"
          target="_blank"
          rel="noopener noreferrer"
          className="fab-wa-link"
          aria-label="WhatsApp"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
        </a>
      </div>

      {/* <div className="fab-ofertas-container">
        <button
          className="fab-ofertas-trigger"
          onClick={() => setShowOfertas(!showOfertas)}
          aria-label="Ofertas"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          </svg>
        </button>

        {showOfertas && (
          <div className="fab-ofertas-popover">
            <div className="fab-ofertas-header">
              <h4>Planes desde S/ 99</h4>
              <button onClick={() => setShowOfertas(false)} aria-label="Cerrar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>
            <ul>
              <li>
                <strong>Landing Page</strong>
                <span>S/ 99</span>
              </li>
              <li>
                <strong>Web Profesional</strong>
                <span>S/ 249</span>
              </li>
              <li>
                <strong>Sistema Web</strong>
                <span>S/ 599</span>
              </li>
            </ul>
            <a href="#ofertas" className="fab-ofertas-link" onClick={() => setShowOfertas(false)}>
              Ver detalles
            </a>
          </div>
        )}
      </div> */}
    </>
  );
}

export default FloatingButtons;
