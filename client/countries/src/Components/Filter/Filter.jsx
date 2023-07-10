import React from "react";
import styles from "./Filter.module.css";
import refresh from "./refresh-icon.png";

function Filter({
  searchHandle,
  handleChange,
  handleRefresh,
  input,
  hadleFilterByContinent,
  handleSortByName,
  handleSortByPopulation,
  activities,
  handleFIlterByActivities,
}) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="search"
          onChange={(e) => handleChange(e)}
          value={input}
        />
        <button className={styles.button} onClick={(e) => searchHandle(e)}>
          Buscar
        </button>
        <button className={styles.refresh} onClick={(e) => handleRefresh(e)}>
          <img className={styles.img} src={refresh} alt="refresh"/>
        </button>
      </div>
      <div className={styles.sortContainer}>
        Continente
        <select
          className={styles.select}
          onChange={(e) => {
            hadleFilterByContinent(e);
          }}
        >
          <option className={styles.option} value={"All"}>
            All{" "}
          </option>
          <option className={styles.option} value={"South America"}>
            South America
          </option>
          <option className={styles.option} value={"North America"}>
            North America
          </option>
          <option className={styles.option} value={"Africa"}>
            Africa
          </option>
          <option className={styles.option} value={"Asia"}>
            Asia
          </option>
          <option className={styles.option} value={"Europe"}>
            Europe
          </option>
          <option className={styles.option} value={"Oceania"}>
            Oceanía
          </option>
          <option className={styles.option} value={"Antarctica"}>
            Antarctica
          </option>
        </select>
      </div>
      <div className={styles.sortContainer}>
        Nombre
        <select
          className={styles.select}
          onChange={(e) => {
            handleSortByName(e);
          }}
        >
          <option className={styles.option} value={"-"}>
            -
          </option>
          <option className={styles.option} value={"A-Z"}>
            A-Z
          </option>
          <option className={styles.option} value={"Z-A"}>
            Z-A
          </option>
        </select>
      </div>
      <div className={styles.sortContainer}>
        Población
        <select
          className={styles.select}
          onChange={(e) => {
            handleSortByPopulation(e);
          }}
        >
          <option className={styles.option} value={"-"}>
            -
          </option>
          <option className={styles.option} value={"ASC"}>
            ASC
          </option>
          <option className={styles.option} value={"DESC"}>
            DESC
          </option>
        </select>
      </div>
      <div className={styles.sortContainer}>
        Actividades
        <select
          className={styles.select}
          onChange={(e) => handleFIlterByActivities(e)}
        >
          <option className={styles.option} value={"-"}>
            -
          </option>
          {activities.map((a) => (
            <option value={a.name} key={a.id} className={styles.option}>
              {a.name}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Filter;
