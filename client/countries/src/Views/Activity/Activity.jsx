import { React, useState, useEffect } from "react";
import { getAllCountries, postActivity } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Activity.module.css";

const validate = (input) => {
  let errors = {};
  let dif = Number(input.dificulty);
  let dur = Number(input.duration);

  if (!input.name) errors.name = "Campo Necesario";
  else if (/[^A-Za-z0-9 ]+/g.test(input.name))
    errors.name = "Nombre no puede tener caracteres especiales o tildes";

  if (!input.dificulty) errors.dificulty = "Campo Necesario";
  else if (dif <= 0 || dif > 5) errors.dificulty = "Debe ser entre 1 y 5";

  if (!input.duration) errors.duration = "Campo Necesario";
  else if (dur <= 0 || dur > 24) errors.duration = "Debe ser entre 1 y 24";

  if (!input.season || input.season === "vacio")
    errors.season = "Campo Necesario";
  /* 
	if (!input.countries || input.countries.length === 0)
		errors.countries = "Campo Necesario"; */

  return errors;
};

export default function Activity() {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  //   console.log(countries);
  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSeason = (e) => {
    setInput({
      ...input,
      season: e.target.value,
    });
  };

  const handleCountries = (e) => {
    setInput({
      ...input,
      countries: [...input.countries, e.target.value],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postActivity(input));
    setInput({
      name: "",
      dificulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  useEffect(() => {
    dispatch(getAllCountries());
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Crear Actividad</h1>
      <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <label className={styles.label}>Nombre:</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={input.name}
          onChange={handleChange}
          placeholder="Nombre"
        />
        <label className={styles.label}>Dificultad:</label>
        <input
          className={styles.input}
          type="number"
          name="dificulty"
          value={input.dificulty}
          onChange={handleChange}
          placeholder="Dificultad"
        />
        <label className={styles.label}>Duracion:</label>
        <input
          className={styles.input}
          type="number"
          name="duration"
          value={input.duration}
          onChange={handleChange}
          placeholder="Duracion"
        />

        <label className={styles.label}>Temporada:</label>
        <select className={styles.select} onChange={handleSeason}>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>

        <label className={styles.label}>Paises:</label>
        <div>
          <ul>
            <li>
              {input.countries.map((i) => (
                <div>
                  {i}
                  <button onClick={() => alert("hola")} type="button">
                    X
                  </button>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <select className={styles.select} onChange={handleCountries}>
          {countries.map((country) => (
            <option value={country.id} key={country.id}>
              {country.id}
            </option>
          ))}
        </select>

        <button className={styles.button}>Crear Actividad</button>
      </form>
    </div>
  );
}
