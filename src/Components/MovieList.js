import React from "react";
import { useGlobalContext } from "../context";

const MovieList = () => {
  const { moviesList, favourites, setFavourites, movieAdded, setMovieAdded } =
    useGlobalContext();

  const handleFavouriteClick = (movie) => {
    const newFavouriteList = [...favourites, movie];
    setFavourites(newFavouriteList);
    setMovieAdded(!movieAdded);
  };
  return (
    <>
      {moviesList.map((movie, index) => {
        console.log(movie);
        return (
          <main className="site-content" key={movie.id}>
            <ul className="comics-list">
              <li className="comic-item">
                <div className="comic-card">
                  {/* <img src="" alt="" /> */}
                  <h2>Comic name</h2>
                  <button
                    className="button js-add"
                    onClick={() => handleFavouriteClick(movie)}
                  >
                    {`${
                      movieAdded
                        ? "Add to favourites"
                        : "Remove from favourites"
                    }`}
                  </button>
                </div>
              </li>
            </ul>
          </main>
        );
      })}
    </>
  );
};

export default MovieList;
