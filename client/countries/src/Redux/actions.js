import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENT,
} from "./types";
import axios from "axios";

export const getAllCountries = () => {
  return async function (dispatch) {
    let countries = await axios.get("http://localhost:3001/countries");
    return dispatch({
      type: GET_ALL_COUNTRIES,
      payload: countries.data,
    });
  };
};

export const getDetail = (id) => {
  return async function (dispatch) {
    let country = await axios.get(`http://localhost:3001/countries/${id}`);
    return dispatch({
      type: GET_DETAIL,
      payload: country.data,
    });
  };
};

export const getCountryByName = (name) => {
  return async function (dispatch) {
    let country = await axios.get(
      `http://localhost:3001/countries/?name=${name}`
    );
    return dispatch({
      type: GET_COUNTRY_BY_NAME,
      payload: country.data,
    });
  };
};

export const filterByContinent = (continent) => {
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};
