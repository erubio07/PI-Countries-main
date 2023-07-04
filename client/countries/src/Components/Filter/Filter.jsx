import React from "react";
import styles from "./Filter.module.css";

function Filter({
  searchHandle,
  handleChange,
  handleRefresh,
  input,
  hadleFilterByContinent,
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
        <button className={styles.button} onClick={(e) => handleRefresh(e)}>
          Refresh
        </button>
      </div>
      <div>
        Filtrar por Continente
        <select
          onChange={(e) => {
            hadleFilterByContinent(e);
          }}
        >
          <option value={"All"}>All </option>
          <option value={"South America"}>South America</option>
          <option value={"North America"}>North America</option>
          <option value={"Africa"}>Africa</option>
          <option value={"Asia"}>Asia</option>
          <option value={"Europe"}>Europe</option>
          <option value={"Oceania"}>Oceanía</option>
          <option value={"Antarctica"}>Antarctica</option>
        </select>
      </div>
    </div>
  );
}

export default Filter;
