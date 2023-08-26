import React, { useEffect } from "react";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useSelector, useDispatch } from "react-redux";
import { getFavorites } from "../../Redux/actions";
import Card from "../../Components/Card/Card";
import styles from "./Favorites.module.css";
import Swal from "sweetalert2";
import axios from "axios";

function Favorites() {
  // console.log(localStorage.getItem("userName"));
  // console.log(localStorage.getItem("userId"));
  // console.log(localStorage.getItem("name"));
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites);
  console.log(favorites);

  const userId = localStorage.getItem("userId");
  const name = localStorage.getItem("name");

  useEffect(() => {
    dispatch(getFavorites(userId));
  }, [dispatch, userId]);

  return (
    <div className={styles.container}>
      {userId ? (
        <div>
          <h1>Bienvenido, {name}!</h1>
          {favorites && favorites.length > 0 ? (
            <div>
              <h2>Tus favoritos:</h2>
              <div className={styles.cardContainer}>
                {favorites.map((c) => (
                  <Card
                    key={c.country.id}
                    id={c.country.id}
                    flag={c.country.image}
                    name={c.country.name}
                    continent={c.country.continent}
                    population={c.country.population}
                  />
                ))}
              </div>
            </div>
          ) : (
            <p>No posees favoritos todavía.</p>
          )}
        </div>
      ) : (
        <p>
          No posees derechos para ver esta sección. Por favor, inicia sesión.
        </p>
      )}
    </div>
  );
}

export default Favorites;
