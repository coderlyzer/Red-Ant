import {
  ADD_FAVOURITE_MOVIE,
  CLOSE_FAVOURITES,
  FETCH_ALL,
  LOADING,
  OPEN_FAVOURITES,
  REMOVE_FAVOURITE_MOVIE,
} from "./movieActions";

// Action Creators
export const loading_movies = () => {
  return {
    type: LOADING,
  };
};

export const fetch_movies = (movies) => {
  return {
    type: FETCH_ALL,
    payload: movies,
  };
};

export const open_favourites = () => {
  return {
    type: OPEN_FAVOURITES,
  };
};

export const close_favourites = () => {
  return {
    type: CLOSE_FAVOURITES,
  };
};

export const add_favourite_movie = (movie) => {
  return {
    type: ADD_FAVOURITE_MOVIE,
    payload: movie,
  };
};

export const remove_favourite_movie = (id) => {
  return {
    type: REMOVE_FAVOURITE_MOVIE,
    payload: id,
  };
};
