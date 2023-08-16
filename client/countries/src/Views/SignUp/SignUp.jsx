import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./SignUp.module.css";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  //   console.log(name, username, password);

  const handleSUbmit = async (e) => {
    e.preventDefault();
    try {
      if (!name || !username || !password) {
        return Swal.fire({
          title: "Campos incompletos",
          text: "Hay campos sin completar",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
      if (name && username && password) {
        const response = await axios.post("http://localhost:3001/signup", {
          name,
          username,
          password,
        });
        console.log(response);
        if (response.statusText === "OK") {
          Swal.fire({
            title: "Success",
            text: "Te has registrado correctamente, redireccionando",
            showConfirmButton: false,
            timer: 2000,
            icon: "success",
          });

          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      }
    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire({
          title: "Nombre de usuario incorrecto",
          text: "El nombre de usuario ya existe",
          icon: "error",
        });
      } else {
        Swal.fire({
          title: "Error",
          text: "Hubo un problema durante el registro",
          icon: "error",
        });
      }
    }
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <form className={style.form} onSubmit={(e) => handleSUbmit(e)}>
        <label className={style.label}>Nombre</label>
        <input
          className={style.input}
          type="text"
          placeholder="nombre"
          value={name}
          onChange={(e) => handleName(e)}
        />
        <label className={style.label}>Username</label>
        <input
          className={style.input}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => handleUsername(e)}
        />
        <label className={style.label}>Password</label>
        <input
          className={style.input}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        <button className={style.button} type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SignUp;
