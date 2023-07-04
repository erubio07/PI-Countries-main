import {
  GET_ALL_COUNTRIES,
  GET_DETAIL,
  GET_COUNTRY_BY_NAME,
  FILTER_BY_CONTINENT,
} from "./types";

const initialState = {
  countries: [],
  detail: {},
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
      };

    case GET_DETAIL:
      return {
        ...state,
        detail: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countries: action.payload,
      };

    case FILTER_BY_CONTINENT:
      let filteredCountries =
        action.payload === "All"
          ? state.countries
          : state.countries.filter((c) => c.continent === action.payload);
      return {
        ...state,
        countries: filteredCountries,
      };
    default:
      return state;
  }
}

export default rootReducer;
