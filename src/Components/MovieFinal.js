import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_favourite_movie, change_button } from "../actions/moveActionTypes";

const MovieFinal = ({ item }) => {
  const [changeText, setChangeText] = useState(true);
  const { change } = useSelector((state) => state.movieReducer);

  const {
    id,
    title,
    thumbnail: { path },
  } = item;

  const dispatch = useDispatch();

  const handleButtonClick = (item) => {
    dispatch(add_favourite_movie(item));
    setChangeText(!changeText);
  };

  return (
    <>
      <ul className="comics-list">
        <li className="comic-item">
          <div className="comic-card">
            <img src={`${path}/portrait_uncanny.jpg`} alt="" />
            <h2>{title}</h2>
          </div>
          <button
            className="button js-add"
            onClick={() => handleButtonClick(item)}
          >
            {changeText ? "Add to favourites" : "Remove from favourites"}
          </button>
        </li>
      </ul>
    </>
  );
};

export default MovieFinal;
