import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Landing.module.css";
import linkedIn from "./linkedIn.png";
import gitHub from "./gitHub.png";
import Swal from "sweetalert2";
import { useAuth } from "../../AuthProvider/AuthProvider";
import axios from "axios";

function Landing() {
  const auth = useAuth();
  // console.log(auth);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // console.log(user);
  // console.log(password);
  const navigate = useNavigate();

  useEffect(() => {
    if (auth.isAuthenticated) {
      navigate("/home");
    }
  });

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        return Swal.fire({
          title: "Campos incompletos",
          text: "Hay campos sin completar",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
      if (username && password) {
        const data = await axios.post("http://localhost:3001/login", {
          username,
          password,
        });
        const userData = data.data;
        // console.log(userData);
        // console.log(data);
        if (data.statusText === "OK") {
          const { accessToken, refreshToken } = userData;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          auth.setIsAuthenticated(true);
          success();
        }
        // console.log(localStorage);
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "Error",
          text: "Nombre de usuario o contraseña incorrectos",
          icon: "error",
          timer: 2000,
        });
      }
    }
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
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
          value={username}
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
        <p className={styles.text}>
          No tienes una cuenta? <NavLink to="/signup">Registrate</NavLink>
        </p>
      </form>
    </div>
  );
}

export default Landing;
