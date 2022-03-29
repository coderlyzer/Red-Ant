import React from "react";
import { useGlobalContext } from "../context";

const Favourites = () => {
  const { favourites, openFavourites, setOpenFavourites } = useGlobalContext();
  return (
    <div
      className={`${
        openFavourites
          ? "favourites-panel favourites-panel-open"
          : "favourites-panel"
      }`}
    >
      <div className="favourites-header">
        <h2>Favourites</h2>
        <button
          className="close js-close"
          onClick={() => setOpenFavourites(false)}
        ></button>
      </div>
      <div className="favourites-content">
        {favourites.map((movie) => {
          // console.log(movie);
          return (
            <div key={movie.id}>
              <ul className="favourites-list">
                <li>{movie.title}</li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
