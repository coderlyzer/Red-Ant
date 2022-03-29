import React, { useContext, useEffect, useState } from "react";
import axios from "axios";

const MovieContext = React.createContext();

const url =
  "https://gateway.marvel.com/v1/public/comics?apikey=3cb62d086d5debdeea139095cbb07fe4&ts=redant&hash=140e85a50884cef76d614f6dacada288";

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState();

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      const { results } = response.data.data;
      console.log(results);
      if (results) {
        setMovies(results);
      } else {
        setMovies([]);
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
    <MovieContext.Provider value={{ movies, loading }}>
      {children}
    </MovieContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(MovieContext);
};
