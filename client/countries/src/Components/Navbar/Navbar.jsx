import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import globe from "./globe.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <NavLink className={styles.globeContainer} to="/">
        <img className={styles.globe} src={globe} alt="globe" />
      </NavLink>
      <NavLink className={styles.link} to="/home">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/activities">
        Actividades
      </NavLink>
      <NavLink className={styles.link} to="/activity">
        Crear Actividad
      </NavLink>
    </div>
  );
}

export default Navbar;
