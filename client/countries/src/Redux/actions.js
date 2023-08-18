import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENT,
  GET_ALL_ACTIVITIES,
  SORT_BY_NAME,
  SORT_BY_POPULATION,
  POST_ACTIVITY,
  FILTER_BY_ACTIVITY,
  GET_USER,
  LOG_OUT,
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

export const getAllActivities = () => {
  return async function (dispatch) {
    let activities = await axios.get("http://localhost:3001/activities");
    // console.log(activities);
    return dispatch({
      type: GET_ALL_ACTIVITIES,
      payload: activities.data,
    });
  };
};

export const postActivity = (info) => {
  return async function (dispatch) {
    let activity = await axios.post("http://localhost:3001/activities", info);
    return activity;
  };
};

export const filterByContinent = (continent) => {
  // console.log(continent);
  return {
    type: FILTER_BY_CONTINENT,
    payload: continent,
  };
};

export const filterByActivities = (value) => {
  console.log(value);
  if (value === "-") {
    return async function (dispatch) {
      let allCountries = await axios.get("http://localhost:3001/countries");
      // console.log(allCountries);
      return dispatch({
        type: FILTER_BY_ACTIVITY,
        payload: allCountries.data,
      });
    };
  } else {
    return async function (dispatch) {
      let countries = await axios.get(
        `http://localhost:3001/countries/activities/${value}`
      );
      // console.log(countries.data);
      return dispatch({
        type: FILTER_BY_ACTIVITY,
        payload: countries.data,
      });
    };
  }
};

export const sortByName = (value) => {
  // console.log(value);
  return {
    type: SORT_BY_NAME,
    payload: value,
  };
};

export const sortByPopulation = (value) => {
  // console.log(value);
  return {
    type: SORT_BY_POPULATION,
    payload: value,
  };
};

export const getUser = (id) => {
  console.log(id);
  return async function (dispatch) {
    let user = await axios.get(`http://localhost:3001/user/${id}`);
    return dispatch({
      type: GET_USER,
      payload: user.data,
    });
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};
