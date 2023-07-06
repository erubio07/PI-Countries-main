import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENT,
} from "./types";

const initialState = {
  countries: [],
  countriesFilter: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFilter: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
      // console.log(action.payload);
      return {
        ...state,
        countries: action.payload,
      };

    case FILTER_BY_CONTINENT:
      // console.log(action.payload);
      if (action.payload === "All") {
        return {
          ...state,
          countries: state.countries,
          countriesFilter: state.countries,
        };
      } else {
        const data = state.countries.filter(
          (c) => c.continent === action.payload
        );
        // console.log(data);
        return {
          ...state,
          countries: state.countries,
          countriesFilter: data,
        };
      }
    default:
      return state;
  }
}

export default rootReducer;
