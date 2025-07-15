import "./index.css"; // Solo necesitas este si consolidaste tus estilos

function App() {
  return (
    <div className="app">
      <section className="intro-section fade-in">
        <div className="intro-image">
          <img
            src="/src/img/David_Alarcon.png"
            alt="Foto de David Alarcón"
            className="intro-img"
          />
        </div>

        <div className="intro-text">
          <h1>👋 Bienvenido a mi portafolio</h1>
          <p>
            ¡Hola! Soy David Alarcón, desarrollador Full Stack con muchas ganas
            de seguir creciendo en este mundo del código. Aunque mi experiencia
            laboral es corta, no he parado de aprender ni un solo día. Soy
            autodidacta por naturaleza: me gusta investigar, experimentar, y
            entender cómo funciona todo detrás de escena.
            <br />
            <br />
            En poco tiempo he trabajado con tecnologías como{" "}
            <strong>React</strong>, <strong>Node.js</strong>,{" "}
            <strong>FastAPI</strong>,<strong>RabbitMQ</strong>,{" "}
            <strong>Docker</strong> y <strong>PostgreSQL</strong>. He
            desarrollado interfaces, automatizado procesos, trabajado con APIs
            externas y montado sistemas que se comunican entre sí mediante
            colas.
            <br />
            <br />
            No me asusta enfrentarme a nuevos retos. Todo lo contrario: cada
            proyecto es una oportunidad para aprender y mejorar. Si algo no lo
            sé, lo aprendo. Y si ya lo sé, trato de hacerlo mejor.
          </p>

          <button>Contáctame</button>
        </div>
      </section>

      <section className="tech-section fade-in" id="react">
        <h2>⚛️ React</h2>
        <p>
          Mi herramienta diaria para construir interfaces modernas, usando hooks
          y componentes reutilizables.
        </p>
      </section>

      <section className="tech-section fade-in" id="node">
        <h2>🟩 Node.js</h2>
        <p>
          Ideal para APIs rápidas y eficientes, manejando colas, lógica de
          negocio y procesos backend.
        </p>
      </section>

      <section className="tech-section fade-in" id="python">
        <h2>🐍 Python / FastAPI</h2>
        <p>
          cuento con experiencia en Python y FastAPI para construir APIs
          rápidas y eficientes, ideal para proyectos que requieren alta
        </p>
      </section>

      <section className="tech-section fade-in" id="docker">
        <h2>🐳 Docker</h2>
        <p>
          Contenerizo mis proyectos para que corran igual en cualquier máquina.
          DevOps básico 🔧.
        </p>
      </section>

      <section className="contact-section fade-in">
        <h2>📬 ¿Charlamos?</h2>
        <a href="mailto:tuemail@correo.com" className="contact-button">
          Contáctame
        </a>
      </section>
    </div>
  );
}

export default App;
