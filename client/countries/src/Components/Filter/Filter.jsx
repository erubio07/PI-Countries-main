import React from "react";
import styles from "./Filter.module.css";

function Filter({ searchHandle, handleChange }) {
  return (
    <div className={styles.container}>
      <div className={styles.inputContainer}>
        <input
          className={styles.input}
          type="search"
          onChange={(e) => handleChange(e)}
        />
        <button className={styles.button} onClick={(e) => searchHandle(e)}>
          Buscar
        </button>
      </div>
    </div>
  );
}

export default Filter;
