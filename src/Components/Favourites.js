import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  close_favourites,
  remove_favourite_movie,
} from "../actions/moveActionTypes";

const Favourites = () => {
  const { openFavourites, favourites } = useSelector(
    (state) => state.movieReducer
  );
  const dispatch = useDispatch();
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
          onClick={() => dispatch(close_favourites())}
        ></button>
      </div>
      <div className="favourites-content">
        {favourites.map((movie) => {
          // console.log(movie);
          return (
            <div key={movie.id}>
              <ul className="favourites-list">
                <li>
                  {movie.title}
                  <button
                    className="favourites-list remove"
                    onClick={() => dispatch(remove_favourite_movie(movie.id))}
                  ></button>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
