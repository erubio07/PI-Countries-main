import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Landing.module.css";
import linkedIn from "./linkedIn.png";
import gitHub from "./gitHub.png";

function Landing() {
  return (
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <NavLink
          to={"https://www.linkedin.com/in/ezequiel-rubio-97a70a266/"}
          target="_about"
        >
          <img className={styles.iconL} src={linkedIn} alt="linkedin" />
        </NavLink>
        <NavLink to={"https://github.com/erubio07"} target="_about">
          <img className={styles.iconG} src={gitHub} alt="github" />
        </NavLink>
      </div>
      <h1 className={styles.title}>Bienvenidos a Countries App.</h1>
      <h3 className={styles.subtitle}>
        El lugar donde econtraras todo sobre tu país favorito.
      </h3>
      <NavLink className={styles.button} to={"/home"}>
        Comencemos
      </NavLink>
    </div>
  );
}

export default Landing;
