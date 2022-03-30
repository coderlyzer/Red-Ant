import React from "react";
import { useDispatch } from "react-redux";
import MovieFinal from "./MovieFinal";

const MovieArray = ({ movies }) => {
  return (
    <>
      {movies.map((item, index) => {
        return (
          <main className="site-content" key={item.id}>
            <MovieFinal key={item.id} item={item} />
          </main>
        );
      })}
    </>
  );
};

export default MovieArray;
