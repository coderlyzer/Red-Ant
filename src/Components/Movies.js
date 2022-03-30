import React from "react";
import Movie from "./Movie";

const Movies = ({ movies }) => {
  return (
    <>
      {movies.map((item) => {
        return (
          <main className="site-content" key={item.id}>
            <Movie key={item.id} item={item} />
          </main>
        );
      })}
    </>
  );
};

export default Movies;
