import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCountries } from "../../Redux/actions";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";
import Pagination from "../../Components/Pagination/Pagination";

export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  // console.log(countries);
  const totalCountries = countries.length;
  // console.log(totalCountries);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

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
        .slice(firstIndex, lastIndex)}
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalCountries}
      />
    </div>
  );
};
