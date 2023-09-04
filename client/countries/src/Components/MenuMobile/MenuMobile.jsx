import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./MenuMobile.module.css";

const MenuMobile = ({ isOpen, handleMenuMobile }) => {
  return (
    <div className={`${styles.mobileMenu} ${isOpen ? styles.open : ""}`}>
      <NavLink
        className={styles.mobileLink}
        onClick={handleMenuMobile}
        to="/home"
      >
        Home
      </NavLink>
      <NavLink
        className={styles.mobileLink}
        onClick={handleMenuMobile}
        to="/favorites"
      >
        Favoritos
      </NavLink>
      <NavLink
        className={styles.mobileLink}
        onClick={handleMenuMobile}
        to="/activities"
      >
        Actividades
      </NavLink>
      <NavLink
        className={styles.mobileLink}
        onClick={handleMenuMobile}
        to="/activity"
      >
        Crear Actividad
      </NavLink>
      <NavLink
        className={styles.mobileLink}
        onClick={handleMenuMobile}
        to="/about"
      >
        Acerca de
      </NavLink>
    </div>
  );
};

export default MenuMobile;
