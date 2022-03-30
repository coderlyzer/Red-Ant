import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import MovieArray from "./MovieArray";
import { fetchMovies } from "../actions/movieAsyncActions";

const MovieContents = () => {
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
      <MovieArray movies={movies} />
    </>
  );
};

export default MovieContents;
