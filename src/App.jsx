import React from 'react';
import './index.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo">EVANVIMAR</div>
          <nav className="nav">
            <ul>
              <li><a href="#home">Inicio</a></li>
              <li><a href="#about">Nosotros</a></li>
              <li><a href="#projects">Proyectos</a></li>
              <li><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-content">
          <h1>LIDERANDO CON EL EJEMPLO</h1>
          <p>Un proyecto social dedicado a crear impacto positivo con conciencia y compromiso.</p>
          <a href="#about" className="btn">Descubre Más</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">Nuestra Misión</h2>
          <div className="about-grid">
            <div className="about-text">
              <p>
                En <strong>Evanvimar</strong>, creemos que la ayuda social no está reñida con la excelencia.
                Nos esforzamos por brindar apoyo a comunidades vulnerables a través de iniciativas sostenibles
                y bien estructuradas, manteniendo siempre un estándar de dignidad y respeto.
              </p>
              <p>
                Nuestro enfoque combina la pasión por el servicio con una gestión transparente y eficiente,
                asegurando que cada recurso llegue a quien más lo necesita.
              </p>
            </div>
            <div className="about-image">
              {/* Placeholder for an image */}
              <div className="image-placeholder"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container footer-content">
          <div className="footer-logo">EVANVIMAR</div>
          <div className="footer-links">
            <h3>Contacto</h3>
            <p>info@evanvimar.org</p>
            <p>+123 456 7890</p>
          </div>
          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Evanvimar. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
