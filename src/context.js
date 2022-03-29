import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = React.createContext();

const url =
  "https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [openFavourites, setOpenFavourites] = useState(false);
  const [movieAdded, setMovieAdded] = useState(true);
  const [moviesList, setMoviesList] = useState([]);
  const [favourites, setFavourites] = useState([]);

  // console.log(favourites);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const { results } = response.data.data;
      // console.log(results);
      if (results) {
        setMoviesList(results);
      } else {
        setMoviesList([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{
        moviesList,
        loading,
        favourites,
        setFavourites,
        openFavourites,
        setOpenFavourites,
        movieAdded,
        setMovieAdded,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MovieContext);
};
