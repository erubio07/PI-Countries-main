import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import linkedIn from "./linkedIn.png";
import gitHub from "./gitHub.png";
import Swal from "sweetalert2";
import { useAuth } from "../../AuthProvider/AuthProvider";

function Landing() {
  const u = "erubio07";
  const p = "123456";

  const auth = useAuth();
  // console.log(auth);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  // console.log(user);
  // console.log(password);
  const navigate = useNavigate();
  const success = () => {
    Swal.fire({
      title: "Success",
      text: "Login exitoso, redireccionando",
      showConfirmButton: false,
      timer: 2000,
      icon: "success",
    });

    setTimeout(() => {
      navigate("/home");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user || !password) {
      return Swal.fire({
        title: "Campos incompletos",
        text: "Hay campos sin completar",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
    if (user === u && password === p) {
      auth.setIsAuthenticated(true);
      success();
    } else {
      return Swal.fire({
        title: "Error!",
        text: "Verifica los campos ingresados",
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const handleUsername = (e) => {
    setUser(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
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
      {/* <h3 className={styles.subtitle}>
        El lugar donde econtraras todo sobre tu país favorito.
      </h3> */}
      <form
        className={styles.form}
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <label className={styles.label}>Username</label>
        <input
          className={styles.input}
          type="text"
          placeholder="username"
          value={user}
          onChange={(e) => handleUsername(e)}
        />
        <label className={styles.label}>Password</label>
        <input
          className={styles.input}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
}

export default Landing;
