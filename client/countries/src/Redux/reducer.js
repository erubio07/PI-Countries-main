import { GET_ALL_COUNTRIES, GET_DETAIL, GET_COUNTRY_BY_NAME } from "./types";

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
    default:
      return state;
  }
}

export default rootReducer;
