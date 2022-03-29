import React from "react";
import { useGlobalContext } from "../context";

const Header = () => {
  const { openFavourites, setOpenFavourites } = useGlobalContext();
  return (
    <header className="site-header">
      <h1 className="site-heading">Red Ant Comic</h1>
      <button
        className="favourites-toggle js-favourites-toggle"
        onClick={() => setOpenFavourites(true)}
      ></button>
    </header>
  );
};

export default Header;
