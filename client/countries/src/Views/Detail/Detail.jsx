import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../../Redux/actions";
import styles from "./Detail.module.css";

function Detail() {
  const { id } = useParams();
  // console.log(id);
  const country = useSelector((state) => state.detail);
  // console.log(country);
  const dispatch = useDispatch();

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
        {country.activities.length ? (
          country.activities.map((e) => {
            return (
              <div className={styles.description}>
                <h4 className={styles.descriptionName}>{e.name}</h4>
                <p className={styles.p}>Dificulty: {e.dificulty}</p>
                <p className={styles.p}>Duration: {e.duration} hrs</p>
                <p className={styles.p}>Season: {e.season}</p>
              </div>
            );
          })
        ) : (
          <p className={styles.p}>No Hay Actividades para este País</p>
        )}
      </div>
    </div>
  );
}

export default Detail;
