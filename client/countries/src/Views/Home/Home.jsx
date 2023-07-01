import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Redux/actions";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";

export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  // console.log(countries);

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      {countries
        .map((c) => {
          return (
            <Card
              key={c.id}
              id={c.id}
              flag={c.image}
              name={c.name}
              continent={c.continent}
              population={c.population}
            />
          );
        })
        .slice(0, 10)}
    </div>
  );
};
