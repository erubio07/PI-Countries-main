import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/actions";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  // console.log(id);
  const country = useSelector((state) => state.detail);
  // console.log(country);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDetail(id));
  }, [dispatch, id]);

  return (
    <div className={styles.container}>
      <div className={styles.countryContainer}>
        <h1 className={styles.name}>{country.name}</h1>
        <img className={styles.image} src={country.image} alt="flag" />
        <h3 className={styles.capital}>Capital: {country.capital}</h3>
        <h4 className={styles.h4}>Continente: {country.continent}</h4>
        <h4 className={styles.h4}>Subregion: {country.subregion}</h4>
        <h4 className={styles.h4}>Población: {country.population} Hab.</h4>
        <h4 className={styles.h4}>Área: {country.area} Km2</h4>
      </div>
      <div className={styles.activities}>
        <h2 className={styles.title}>Actividades Turísticas</h2>
        {country.activities && country.activities.length ? (
          country.activities.map((e) => {
            return (
              <div key={e.id}>
                <h4>{e.name}</h4>
                <p>Dificultad: {e.dificulty}</p>
                <p>Duración: {e.duration} hrs</p>
                <p>Season: {e.season}</p>
              </div>
            );
          })
        ) : (
          <p>No hay actividades para este País</p>
        )}
        <button className={styles.button} onClick={() => navigate(-1)}>
          Volver
        </button>
      </div>
    </div>
  );
}

export default Detail;
