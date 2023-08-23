import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "./SignUp.module.css";
import Swal from "sweetalert2";
import axios from "axios";

const SignUp = () => {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  console.log(error);
  const navigate = useNavigate();

  const validate = (e) => {
    let error = {};
    if (!name) {
      error.name = "Campo requerido";
    }
    if (/[^A-Za-z ]+/g.test(name)) {
      error.name = "El nombre solo puede contener letras";
    }
    if (!username) {
      error.username = "Campo requerido";
    }
    if (/[^A-Za-z0-9 ]+/g.test(username)) {
      error.username = "El username solo puede contener letras y números";
    }
    if (!password) {
      error.password = "Campo requerido";
    }
    if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/g.test(password)) {
      error.password =
        "La contraseña debe tener al entre 8 y 15 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede contener caracteres especiales";
    }

    return error;
  };

  const handleName = (e) => {
    setName(e.target.value);
    setError(validate(e.target.value));
  };

  const handleUsername = (e) => {
    setUsername(e.target.value);
    setError(validate(e.target.value));
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setError(validate(e.target.value));
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
    <div className={style.container}>
      <h2 className={style.title}>Crear Usuario</h2>
      <form className={style.form} onSubmit={(e) => handleSUbmit(e)}>
        <label className={style.label}>Nombre</label>
        <input
          className={style.input}
          type="text"
          placeholder="nombre"
          value={name}
          onChange={(e) => handleName(e)}
        />
        {error.name && <p className={style.error}>{error.name}</p>}
        <label className={style.label}>Username</label>
        <input
          className={style.input}
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => handleUsername(e)}
        />
        {error.username && <p className={style.error}>{error.username}</p>}
        <label className={style.label}>Password</label>
        <input
          className={style.input}
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => handlePassword(e)}
        />
        {error.password && <p className={style.error}>{error.password}</p>}
        <button className={style.button} type="submit">
          Registrarse
        </button>
      </form>
    </div>
  );
};

export default SignUp;
