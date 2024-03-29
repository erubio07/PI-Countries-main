import { React, useState, useEffect } from "react";
import { getAllCountries } from "../../Redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import styles from "./Update.module.css";

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

export default function Update() {
  const { id } = useParams();
  // console.log(id);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries);
  //   console.log(countries);
  const [input, setInput] = useState({
    name: "",
    dificulty: "",
    duration: "",
    season: "",
    countries: [],
  });
  // console.log(input);

  const getData = async () => {
    let { data } = await axios.get(`http://localhost:3001/activities/${id}`);
    // console.log(data);
    setInput({
      ...input,
      name: data.name,
      dificulty: data.dificulty,
      duration: data.duration,
      season: data.season,
      countries: data.countries.map((c) => c.id) || [],
    });
  };
  // getData(id);
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

  const alert = () => {
    Swal.fire("Modificar Actividad", "Hay campos sin completar", "error");
  };

  const great = () => {
    Swal.fire({
      title: "¿Seguro quieres modificar la actividad?",

      icon: "warning",
      showCancelButton: true,
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Modificar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        await axios.put(`http://localhost:3001/activities/${id}`, input);
        Swal.fire("Modificada", "Actividad modificada con éxito!", "success");
        setTimeout(() => {
          navigate("/activities");
        }, 1000);
      }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !input.name ||
      !input.dificulty ||
      !input.duration ||
      !input.season ||
      !input.countries
    )
      return alert();
    great();
    setInput({
      name: "",
      dificulty: "",
      duration: "",
      season: "",
      countries: [],
    });
  };

  // console.log(input.countries);
  const onClose = (c) => {
    setInput({
      ...input,
      countries: input.countries.filter((i) => i !== c),
    });
  };

  useEffect(() => {
    dispatch(getAllCountries());
    getData();
  }, [dispatch]);

  return (
    <div className={styles.container}>
      <h1>Modificar Actividad</h1>
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
        {errors.name && <p className={styles.error}>{errors.name}</p>}
        <label className={styles.label}>Dificultad:</label>
        <input
          className={styles.input}
          type="number"
          name="dificulty"
          value={input.dificulty}
          onChange={handleChange}
          placeholder="Dificultad"
        />
        {errors.dificulty && <p className={styles.error}>{errors.dificulty}</p>}
        <label className={styles.label}>Duracion:</label>
        <input
          className={styles.input}
          type="number"
          name="duration"
          value={input.duration}
          onChange={handleChange}
          placeholder="Duracion"
        />
        {errors.duration && <p className={styles.error}>{errors.duration}</p>}

        <label className={styles.label}>Temporada:</label>
        <select className={styles.select} onChange={handleSeason}>
          <option value={input.season}>{input.season}</option>
          <option value="Verano">Verano</option>
          <option value="Otoño">Otoño</option>
          <option value="Invierno">Invierno</option>
          <option value="Primavera">Primavera</option>
        </select>
        {errors.season && <p className={styles.error}>{errors.season}</p>}

        <label className={styles.label}>Paises:</label>
        <div>
          <ul>
            <li>
              {input.countries.map((i) => (
                <div key={i}>
                  {i}
                  <button
                    className={styles.close}
                    onClick={() => onClose(i)}
                    type="button"
                  >
                    X
                  </button>
                </div>
              ))}
            </li>
          </ul>
        </div>
        <select className={styles.select} onChange={handleCountries}>
          <option value="vacio">Seleccione un pais</option>
          {countries.map((country) => (
            <option value={country.id} key={country.id}>
              {country.name}
            </option>
          ))}
        </select>
        {errors.countries && <p className={styles.error}>{errors.countries}</p>}

        <button className={styles.button}>Modificar Actividad</button>
      </form>
    </div>
  );
}
