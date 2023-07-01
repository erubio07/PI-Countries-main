import { GET_ALL_COUNTRIES, GET_DETAIL } from "./types";
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
