import React, { useState } from 'react';
import './index.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="container header-content">
          <div className="logo" onClick={() => setActiveSection('home')} style={{ cursor: 'pointer' }}>EVANVIMAR</div>
          <nav className="nav">
            <ul>
              <li><button onClick={() => setActiveSection('about')} className={activeSection === 'about' ? 'active' : ''}>Nosotros</button></li>
              <li><button onClick={() => setActiveSection('projects')} className={activeSection === 'projects' ? 'active' : ''}>Proyectos</button></li>
              <li><button onClick={() => setActiveSection('contact')} className={activeSection === 'contact' ? 'active' : ''}>Redes Sociales</button></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <section id="home" className="hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <h1>LIDERANDO CON EL EJEMPLO</h1>
            <p>Un proyecto social dedicado a crear impacto positivo con conciencia y compromiso.</p>
            <button onClick={() => setActiveSection('about')} className="btn">Descubre Más</button>
          </div>
        </section>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
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
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section id="projects" className="projects">
          <div className="container">
            <h2 className="section-title">Nuestros Proyectos</h2>
            <p style={{ textAlign: 'center' }}>Próximamente más información sobre nuestros proyectos.</p>
          </div>
        </section>
      )}

      {/* Redes Sociales Section (formerly Footer/Contact) */}
      {activeSection === 'contact' && (
        <footer id="contact" className="footer" style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <div className="container footer-content">
            <div className="footer-logo">EVANVIMAR</div>
            <div className="footer-links">
              <h3>Redes Sociales</h3>
            </div>
            <div className="social-links">
              <a href="https://www.instagram.com/evanvimar_/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.facebook.com/100085644576439/" target="_blank" rel="noopener noreferrer">Facebook</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Evanvimar. Todos los derechos reservados.</p>
          </div>
        </footer>
      )}
    </div>
  );
}

export default App;
