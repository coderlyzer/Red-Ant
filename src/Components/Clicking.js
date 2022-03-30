import React from "react";

const Clicking = ({ clicked, setClicked }) => {
  return (
    <div onClick={() => setClicked(!clicked)}>
      {clicked ? "Remove from favourites" : "Add to favourites"}
    </div>
  );
};

export default Clicking;
