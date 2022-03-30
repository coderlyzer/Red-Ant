import { fetch_movies, loading_movies } from "./moveActionTypes";
import axios from "axios";

const url =
  "https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";

// Special Action Creator
export const fetchMovies = () => {
  return async (dispatch) => {
    dispatch(loading_movies());
    try {
      const response = await axios.get(url);
      const { results } = response.data.data;
      dispatch(fetch_movies(results));
    } catch (error) {
      console.log(error.message);
    }
  };
};
