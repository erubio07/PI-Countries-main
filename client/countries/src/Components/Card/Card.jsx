import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Card.module.css";

function Card({ flag, name, continent, id, capital, area, population }) {
  // console.log(id);
  return (
    <div className={styles.card}>
      <img className={styles.image} src={flag} alt="flag" />
      <h1 className={styles.title}>{name}</h1>
      {/* <h2>{capital}</h2> */}
      <h3 className={styles.continent}>{continent}</h3>
      <h3 className={styles.population}>{population}</h3>
      <NavLink className={styles.button} to={`/countries/${id}`}>
        Detalles
      </NavLink>
    </div>
  );
}

export default Card;
