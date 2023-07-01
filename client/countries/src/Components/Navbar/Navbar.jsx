import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <NavLink className={styles.link} to="/home">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/activity">
        Crear Actividad
      </NavLink>
    </div>
  );
}

export default Navbar;
