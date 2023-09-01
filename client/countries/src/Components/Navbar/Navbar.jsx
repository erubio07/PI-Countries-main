import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import logout from "./logout.png";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { logOut } from "../../Redux/actions";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

function Navbar() {
  const auth = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogOut = () => {
    auth.logOut();
    dispatch(logOut());
    Swal.fire({
      title: "Sesión cerrada",
      text: "Has cerrado tu sesión",
      icon: "success",
      timer: 2000,
    });
    setTimeout(() => {
      navigate("/");
    }, 3500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.globeContainer} onClick={handleLogOut}>
        <img className={styles.globe} src={logout} alt="logout" />
      </div>
      <NavLink className={styles.link} to="/home">
        Home
      </NavLink>
      <NavLink className={styles.link} to="/favorites">
        Favoritos
      </NavLink>
      <NavLink className={styles.link} to="/activities">
        Actividades
      </NavLink>
      <NavLink className={styles.link} to="/activity">
        Crear Actividad
      </NavLink>
      <NavLink className={styles.link} to="/about">
        Acerca de
      </NavLink>
    </div>
  );
}

export default Navbar;
