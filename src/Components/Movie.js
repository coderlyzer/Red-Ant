import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add_favourite_movie } from "../actions/moveActionTypes";

const Movie = ({ item }) => {
  // Demonstrating the use of local state variable
  const [changeText, setChangeText] = useState(true);

  // Destructuring to access the title and image path
  const {
    id,
    title,
    thumbnail: { path },
  } = item;

  const dispatch = useDispatch();

  // function for dispatching favourites and changing text
  const handleButtonClick = (item) => {
    dispatch(add_favourite_movie(item));
    setChangeText(!changeText);
  };

  return (
    <>
      <ul className="comics-list">
        <li className="comic-item">
          <div className="comic-card">
            {/* append size to the image path */}
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

export default Movie;
