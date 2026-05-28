import "./Footer.css";

const footerLinks = [
  {
    title: "Navegación",
    links: [
      { label: "Servicios", href: "#servicios" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "WhatsApp", href: "https://wa.me/51944501816" },
      { label: "Correo", href: "mailto:correo@rplabs.dev" },
      { label: "GitHub", href: "https://github.com/" },
    ],
  },
  {
    title: "Servicios",
    links: [
      { label: "Desarrollo Web", href: "#servicios" },
      { label: "Landing Pages", href: "#servicios" },
      { label: "Software", href: "#servicios" },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="url(#logo-grad-f)" />
              <text x="50%" y="55%" dominantBaseline="middle" textAnchor="middle" fill="white" fontSize="16" fontWeight="800" fontFamily="system-ui">R</text>
              <defs>
                <linearGradient id="logo-grad-f" x1="0" y1="0" x2="32" y2="32">
                  <stop stopColor="#6366f1" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
              </defs>
            </svg>
            <span>RP Labs</span>
          </div>
          <p>
            Desarrollo web y software moderno para negocios y proyectos
            digitales.
          </p>
        </div>

        {footerLinks.map((col) => (
          <div className="footer-col" key={col.title}>
            <h4>{col.title}</h4>
            <ul>
              {col.links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    {...(l.href.startsWith("http") || l.href.startsWith("mailto")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} RP Labs. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
