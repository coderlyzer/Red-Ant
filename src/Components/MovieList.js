import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Movies from "./Movies";
import { fetchMovies } from "../actions/movieAsyncActions";

const MovieContents = () => {
  // useSelector for extracting data from the Redux store
  const { movies, loading } = useSelector((state) => state.movieReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <Movies movies={movies} />
    </>
  );
};

export default MovieContents;
