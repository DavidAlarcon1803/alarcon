import "./index.css"; // Solo necesitas este si consolidaste tus estilos

function App() {
  return (
    <div className="app">
      <section className="intro-section fade-in">
        <div className="intro-image">
          <img
            src="img/David_Alarcon.png"
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

      <section className="tech-section fade-in" id="python">
        <h2>🐍 Python / FastAPI</h2>
        <p>
          Cuento con experiencia en Python y FastAPI para construir APIs rápidas
          y eficientes, ideales para proyectos que requieren alto rendimiento y
          escalabilidad. En un proyecto empresarial, desarrollé un gestor de
          archivos con Django para almacenar y administrar documentos en un
          servidor local, como parte de un aplicativo interno. Inicié con la
          integración del inicio de sesión único (SSO) mediante Microsoft, y
          posteriormente implementé integraciones con sistemas contables como
          Siesa y OpenETL. Me enfoqué en exponer endpoints para ser consumidos
          por otros módulos backend e integré RabbitMQ para ejecutar tareas en
          segundo plano de forma asíncrona, optimizando los procesos de
          comunicación y carga del sistema.
        </p>
      </section>

      <section className="tech-section fade-in" id="react">
        <h2>⚛️ React / Maquetado y Consumo de APIs</h2>
        <p>
          Tengo experiencia desarrollando interfaces interactivas con React,
          aplicando buenas prácticas de maquetado responsive con HTML, CSS y
          bibliotecas como Material UI. En un proyecto empresarial, fui
          responsable de construir módulos de frontend conectados a APIs
          generadas con FastAPI desde el backend. Me encargué de consumir estos
          servicios mediante `axios` o `fetch`, manejando peticiones asíncronas,
          validación de datos y manejo de errores. Trabajé en la implementación
          de formularios dinámicos, visualización de datos en tablas, y
          navegación fluida con React Router. Además, realicé integración
          completa con lógica empresarial, asegurando que el frontend
          respondiera correctamente a los flujos definidos desde el backend.
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
