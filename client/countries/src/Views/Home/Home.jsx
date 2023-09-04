import React from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllCountries,
  getCountryByName,
  filterByContinent,
  getAllActivities,
  sortByName,
  sortByPopulation,
  filterByActivities,
  getUser,
  addFavorites,
} from "../../Redux/actions";
import Card from "../../Components/Card/Card";
import styles from "./Home.module.css";
import Pagination from "../../Components/Pagination/Pagination";
import Filter from "../../Components/Filter/Filter";
import Swal from "sweetalert2";

export const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  // console.log(countries);
  const countriesFilter = useSelector((state) => state.countriesFilter);
  // console.log(countriesFilter);
  const activities = useSelector((state) => state.activities);
  // console.log(activities);
  const user = useSelector((state) => state.user);
  // console.log(user);
  const userId = user.id;
  // console.log(userId);

  const totalCountries = countries.length;
  // console.log(totalCountries);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const [input, setInput] = useState("");
  const forceUpdate = React.useReducer((bool) => !bool)[1]; //fureza la actualizacion del estado

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const searchHandle = () => {
    if (input === "") {
      alert("Ingrese un país");
    }
    dispatch(getCountryByName(input));
    setInput("");
    setCurrentPage(1);
  };

  const handleRefresh = () => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
  };

  const hadleFilterByContinent = (e) => {
    dispatch(filterByContinent(e.target.value));
    setCurrentPage(1);
  };

  const handleFIlterByActivities = (e) => {
    dispatch(filterByActivities(e.target.value));
    setCurrentPage(1);
  };

  const handleSortByName = (e) => {
    dispatch(sortByName(e.target.value));
    forceUpdate();
  };

  const handleSortByPopulation = (e) => {
    dispatch(sortByPopulation(e.target.value));
    forceUpdate();
  };

  const handleFavorite = (info) => {
    dispatch(addFavorites(info));
    Swal.fire({
      title: "País agregado a favoritos",
      showConfirmButton: false,
      timer: 2000,
      icon: "success",
    });
  };

  useEffect(() => {
    dispatch(getAllCountries());
    dispatch(getAllActivities());
    const savedUserName = localStorage.getItem("userName");
    if (savedUserName) {
      dispatch(getUser(savedUserName));
    }
  }, [dispatch]);

  useEffect(() => {
    if (user && user.username) {
      localStorage.setItem("userName", user.username);
      localStorage.setItem("userId", user.id);
      localStorage.setItem("name", user.name);
    }
  }, [user]);

  return (
    <div className={styles.container}>
      <Filter
        searchHandle={searchHandle}
        handleChange={handleChange}
        handleRefresh={handleRefresh}
        input={input}
        hadleFilterByContinent={hadleFilterByContinent}
        handleSortByName={handleSortByName}
        handleSortByPopulation={handleSortByPopulation}
        activities={activities}
        handleFIlterByActivities={handleFIlterByActivities}
      />
      <div className={styles.welcomeContainer}>
        <h1>Bienvenido/a a Countries App {user && user.name} 👋</h1>
      </div>
      <div className={styles.cardContainer}>
        {countriesFilter
          .map((c) => {
            return (
              <Card
                key={c.id}
                id={c.id}
                flag={c.image}
                name={c.name}
                continent={c.continent}
                population={c.population}
                handleFavorite={handleFavorite}
                userId={userId}
              />
            );
          })
          .slice(firstIndex, lastIndex)}
      </div>
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalCountries={totalCountries}
      />
    </div>
  );
};
