import React, { useState } from 'react';
import './index.css';
import ceoImage from './assets/ceo.png';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  // Helper to go back to menu or home
  const goBack = () => {
    if (activeSection === 'home') return;
    if (activeSection === 'menu') setActiveSection('home');
    else setActiveSection('menu');
  };

  return (
    <div className="app">
      {/* Back Button (visible unless on Home) */}
      {activeSection !== 'home' && (
        <div className="back-btn" onClick={goBack}>
          {activeSection === 'menu' ? '← Inicio' : '← Menú'}
        </div>
      )}

      {/* Home Button (bottom right, visible unless on Home) */}
      {activeSection !== 'home' && (
        <div className="home-btn" onClick={() => setActiveSection('home')}>
          🏠 Inicio
        </div>
      )}

      {/* Home Section (Landing) */}
      {activeSection === 'home' && (
        <section id="home" className="hero">
          <div className="hero-overlay"></div>
          <div className="container hero-content">
            <div className="logo">EVANVIMAR</div>
            <h1>LIDERANDO CON EL EJEMPLO</h1>
            <p>Un proyecto social dedicado a crear impacto positivo con conciencia y compromiso.</p>
            <button onClick={() => setActiveSection('menu')} className="btn">Descubre Más</button>
          </div>
        </section>
      )}

      {/* Menu Section */}
      {activeSection === 'menu' && (
        <div className="menu-section">
          <div className="menu-items">
            <button className="menu-btn" onClick={() => setActiveSection('about')}>Acerca de Nosotros</button>
            <button className="menu-btn" onClick={() => setActiveSection('projects')}>Proyectos</button>
            <button className="menu-btn" onClick={() => setActiveSection('ceo')}>CEO</button>
            <button className="menu-btn" onClick={() => setActiveSection('contact')}>Redes Sociales</button>
          </div>
        </div>
      )}

      {/* About Section */}
      {activeSection === 'about' && (
        <section id="about" className="about" style={{ paddingTop: '80px' }}>
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
                <div className="image-placeholder"></div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {activeSection === 'projects' && (
        <section id="projects" className="projects" style={{ paddingTop: '80px' }}>
          <div className="container">
            <h2 className="section-title">Nuestros Proyectos</h2>
            <p style={{ textAlign: 'center' }}>Próximamente más información sobre nuestros proyectos.</p>
          </div>
        </section>
      )}

      {/* CEO Section */}
      {activeSection === 'ceo' && (
        <section className="ceo-section">
          <div className="ceo-container">
            <div className="ceo-image-container">
              <img src={ceoImage} alt="Jaime Rivas Carvajal" className="ceo-image" />
            </div>
            <div className="ceo-content">
              <h2>Jaime Rivas Carvajal</h2>
              <p>
                Jaime Rivas Carvajal es un joven nicaragüense, escritor, poeta, dibujante, mentor y fundador de iniciativas culturales enfocadas en la creatividad y el desarrollo juvenil.
              </p>

              <h3>Biografía y Trayectoria</h3>
              <p>
                Nació en Managua, Nicaragua, el 15 de mayo de 2008. Desde muy temprana edad ha mostrado un interés profundo por la cultura, la poesía y la formación intelectual, participando activamente en proyectos que fomentan la creatividad y el desarrollo personal de otros jóvenes.
              </p>

              <h3>Actividad Literaria y Cultural</h3>
              <p>
                Es fundador y Coordinador General del Movimiento Poético “Espejos del Tiempo”, una iniciativa cultural que brinda un espacio para la expresión poética juvenil y la introspección creativa. Ha publicado textos y artículos en medios como Revista Montaje y Cultura Libre, abordando temas de literatura, salud mental, formación personal y social.
              </p>
              <p>
                Además, es creador del proyecto <strong>EVANVIMAR</strong>, un espacio social con diversas secciones destinado a desarrollar talentos, habilidades y capacidades en jóvenes, en honor a sus abuelos.
              </p>

              <h3>Obra y Reflexión Personal</h3>
              <p>
                Rivas Carvajal combina su creatividad literaria con otras expresiones artísticas como ilustraciones y reflexiones sobre psicología y desarrollo humano. En sus poemas, aborda emociones complejas, experiencias humanas y la búsqueda de significado en la vida, mezclando introspección y crítica social.
              </p>
              <p>
                También comparte su visión sobre la importancia de la formación frente a la fama efímera, promoviendo siempre el crecimiento intelectual y personal como pilares para la vida y el éxito sostenido.
              </p>

              <h3>Futuro Profesional</h3>
              <p>
                Aspirando a una carrera profesional amplia, Jaime proyecta desarrollarse como administrador de empresas, psicólogo y diplomático, y planea impulsar programas de impacto social como FAMENDS.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Redes Sociales Section */}
      {activeSection === 'contact' && (
        <footer id="contact" className="footer">
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
