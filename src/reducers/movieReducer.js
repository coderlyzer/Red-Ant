import {
  ADD_FAVOURITE_MOVIE,
  CLOSE_FAVOURITES,
  FETCH_ALL,
  LOADING,
  OPEN_FAVOURITES,
  REMOVE_FAVOURITE_MOVIE,
} from "../actions/movieActions";

// initialState
const initialState = {
  loading: true,
  openFavourites: false,
  movieAdded: false,
  moviesList: [],
  favourites: [],
  movies: [],
};

// movie reducer for handling the actions

export const movieReducer = (state = initialState, action) => {
  if (action.type === LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === FETCH_ALL) {
    return { ...state, loading: false, movies: action.payload };
  }
  if (action.type === OPEN_FAVOURITES) {
    return { ...state, loading: false, openFavourites: true };
  }
  if (action.type === CLOSE_FAVOURITES) {
    return { ...state, loading: false, openFavourites: false };
  }
  if (action.type === ADD_FAVOURITE_MOVIE) {
    const check = state.favourites.find(
      (item) => item.id === action.payload.id
    );
    const newFavourites = state.favourites.filter(
      (item) => item.id !== action.payload.id
    );
    if (check) {
      return { ...state, loading: false, favourites: [...newFavourites] };
    } else {
      return {
        ...state,
        loading: false,
        favourites: [...state.favourites, action.payload],
      };
    }
  }
  if (action.type === REMOVE_FAVOURITE_MOVIE) {
    const newFavourites = state.favourites.filter(
      (item) => item.id !== action.payload
    );
    return {
      ...state,
      loading: false,
      favourites: [...newFavourites],
    };
  }
  return state;
};
