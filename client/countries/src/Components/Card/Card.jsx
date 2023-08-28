import React from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Card.module.css";

function Card({
  flag,
  name,
  continent,
  id,
  population,
  handleFavorite,
  userId,
  favoriteId,
  handleDelete,
}) {
  console.log(favoriteId);
  return (
    <div className={styles.card}>
      <img className={styles.image} src={flag} alt="flag" />
      <h1 className={styles.title}>{name}</h1>
      {/* <h2>{capital}</h2> */}
      <h3 className={styles.continent}>{continent}</h3>
      <h3 className={styles.population}>{population}</h3>
      <div className={styles.action}>
        <NavLink className={styles.button} to={`/countries/${id}`}>
          Detalles
        </NavLink>
        <button
          className={styles.favorite}
          onClick={() => handleFavorite({ userId: userId, countryId: id })}
        >
          ❤️
        </button>
        <button
          className={styles.favorite}
          onClick={() => handleDelete(favoriteId)}
        >
          🖤
        </button>
      </div>
    </div>
  );
}

export default Card;
