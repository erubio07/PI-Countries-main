import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { getAllActivities } from "../../Redux/actions";
import styles from "./Activities.module.css";
import axios from "axios";
import Swal from "sweetalert2";
import icon from "./update.png";
import del from "./delete.png";

function Activities() {
  const activities = useSelector((state) => state.activities);
  //   console.log(activities);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllActivities());
  }, [dispatch]);

  const deleteAlert = () => {
    Swal.fire("Borrar Actividad", "Actividad borrada con éxito", "info");
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3001/activities/${id}`);
    deleteAlert();
    setTimeout(() => {
      dispatch(getAllActivities());
    }, 1000);
  };

  return (
    <div className={styles.container}>
      {activities && activities.length ? (
        activities.map((a) => {
          return (
            <div key={a.id} className={styles.card}>
              <ul className={styles.ul}>
                <li className={styles.li}>Nombre: {a.name}</li>
                <li className={styles.li}>Duracion: {a.duration}</li>
                <li className={styles.li}>Dificultad: {a.dificulty}</li>
                <li className={styles.li}>Temporada: {a.season}</li>
                <li className={styles.li}>
                  Paises:
                  {a.countries && a.countries.length ? (
                    a.countries.map((c) => {
                      return <p key={c.id}>{c.name}</p>;
                    })
                  ) : (
                    <p className={styles.p}>
                      Esta Actividad no tiene Paises definidos
                    </p>
                  )}
                </li>
              </ul>
              <NavLink className={styles.button} to={`/${a.id}/update`}>
                <img className={styles.update} src={icon} alt="update" />
              </NavLink>
              <button
                className={styles.deleteButton}
                onClick={() => handleDelete(a.id)}
              >
                <img className={styles.delete} src={del} alt="delete" />
              </button>
            </div>
          );
        })
      ) : (
        <h2>
          Todavía no hay Actividades Creadas. Puedes crear una haciendo click{" "}
          <Link to={"/activity"}>aqui</Link>
        </h2>
      )}
    </div>
  );
}

export default Activities;
