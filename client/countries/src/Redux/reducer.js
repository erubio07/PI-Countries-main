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

const initialState = {
  countries: [],
  detail: {},
  countriesFilter: [],
  activities: [],
  user: {},
  favorites: [],
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
        countriesFilter: action.payload,
      };

    case GET_ALL_ACTIVITIES:
      // console.log(action.payload);
      return {
        ...state,
        activities: action.payload,
      };

    case POST_ACTIVITY:
      return {
        ...state,
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

    case FILTER_BY_ACTIVITY:
      // console.log(action.payload);
      return {
        ...state,
        countries: state.countries,
        countriesFilter: action.payload,
      };

    case SORT_BY_NAME:
      const sortedCities =
        action.payload === "A-Z"
          ? state.countriesFilter.sort((a, b) =>
              a.name.localeCompare(b.name, "fr", {
                ignorePunctuation: true,
              })
            )
          : state.countriesFilter.sort((a, b) =>
              b.name.localeCompare(a.name, "fr", {
                ignorePunctuation: true,
              })
            );

      // console.log(sortedCities);

      return {
        ...state,
        countries: state.countries,
        countriesFilter: sortedCities,
      };

    case SORT_BY_POPULATION:
      const sortedName =
        action.payload === "ASC"
          ? state.countriesFilter.sort(function (a, b) {
              if (a.population > b.population) {
                return 1;
              }
              if (a.population < b.population) {
                return -1;
              }
              return 0;
            })
          : state.countriesFilter.sort(function (a, b) {
              if (a.population > b.population) {
                return -1;
              }
              if (a.popualtion < b.population) {
                return 1;
              }
              return 0;
            });
      // console.log(sortedName);
      return {
        ...state,
        countriesFilter: sortedName,
      };

    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case LOG_OUT:
      return {
        ...state,
        user: {},
      };

    case "ADD_FAVORITE":
      return {
        ...state,
      };

    case "GET_FAVORITES":
      return {
        ...state,
        favorites: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
