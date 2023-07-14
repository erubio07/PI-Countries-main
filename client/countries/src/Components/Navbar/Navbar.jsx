import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import logout from "./logout.png";

function Navbar() {
  return (
    <div className={styles.container}>
      <NavLink className={styles.globeContainer} to="/">
        <img className={styles.globe} src={logout} alt="logout" />
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
