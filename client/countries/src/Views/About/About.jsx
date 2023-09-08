import React from "react";
import styles from "./About.module.css";
import postgres from "./postgres-icon.png";
import express from "./express-icon.png";
import sequelize from "./sequelize-icon.png";
import jwt from "./jwt-icon.png";
import react from "./react-icon.png";
import redux from "./redux-icon.png";
import css from "./css-icon.png";
import sweetalert from "./sweetalert2-icon.png";

function About() {
  const userId = localStorage.getItem("userId");

  return (
    <div className={styles.container}>
      {userId ? (
        <div>
          <h1>Country App</h1>
          <p>
            ¡Bienvenido a Country App! Mi nombre es Ezequiel Rubio, y soy un
            Desarrollador Full Stack con especialización en Back End. Esta
            aplicación nació como parte de mi proyecto individual durante el
            Bootcamp de Soy Henry. Desde entonces, he realizado mejoras
            significativas en la aplicación para ofrecerte una experiencia aún
            mejor. Country App te brinda la oportunidad de explorar información
            detallada sobre diversos países y agregar emocionantes actividades
            turísticas a tu lista de deseos para cada destino. Además, puedes
            llevar un registro de las actividades turísticas que has realizado
            en cada país y etiquetar tus destinos favoritos. La aplicación te
            permite personalizar tu experiencia, ya que puedes editar
            actividades y quitar países de tu lista de favoritos en cualquier
            momento. Para disfrutar de todas estas funciones, simplemente
            regístrate como usuario y luego inicia sesión con tu nombre de
            usuario y contraseña. ¡Te invitamos a explorar el mundo a través de
            Country App y crear recuerdos inolvidables en tus viajes!
          </p>
          <h2>Tecnologías usadas:</h2>
          <p>
            Para la creación de Country App, empleé una variedad de herramientas
            y tecnologías de vanguardia:
          </p>
          <div className={styles.technologiesList}>
            <div className={styles.technologyItem}>
              <span>
                <img src={postgres} alt="postgres" />
              </span>
              <h3>PostgreSQL:</h3>
              <p>
                Una robusta base de datos relacional que proporciona una sólida
                estructura de almacenamiento.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <span>
                <img src={express} alt="express" />
              </span>
              <h3>Express:</h3>
              <p>
                Un framework de Node.js que facilita la creación de aplicaciones
                web robustas y eficientes.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <span>
                <img src={sequelize} alt="sequelize" />
              </span>
              <h3>Sequelize:</h3>
              <p>
                Una poderosa ORM (Object-Relational Mapping) que simplifica la
                interacción con la base de datos PostgreSQL.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <span>
                <img src={jwt} alt="jwt" />
              </span>
              <h3>JSON Web Token:</h3>
              <p>
                Una tecnología de autenticación segura que garantiza la
                protección de datos confidenciales.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <span>
                <img src={react} alt="react" />
              </span>
              <h3>React:</h3>
              <p>
                Una biblioteca de JavaScript para la construcción de interfaces
                de usuario interactivas y dinámicas.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <span>
                <img src={redux} alt="redux" />
              </span>
              <h3>Redux:</h3>
              <p>
                Un estado global para la gestión eficiente de datos y la
                sincronización en la aplicación.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <span>
                <img src={css} alt="css" />
              </span>
              <h3>CSS:</h3>
              <p>
                Estilización cuidadosa y personalizada para una experiencia de
                usuario atractiva y consistente.
              </p>
            </div>
            <div className={styles.technologyItem}>
              <span>
                <img src={sweetalert} alt="sweetalert" />
              </span>
              <h3>Sweet Alert para las Notificaciones:</h3>
              <p>
                Integración de Sweet Alert para proporcionar notificaciones
                intuitivas y elegantes a los usuarios.
              </p>
            </div>
          </div>
          <p>
            Estas tecnologías se combinaron de manera sinérgica para brindar una
            experiencia excepcional en Country App, asegurando un rendimiento
            confiable y una interfaz atractiva para nuestros usuarios.
          </p>
        </div>
      ) : (
        (window.location.href = "/")
      )}
    </div>
  );
}

export default About;
