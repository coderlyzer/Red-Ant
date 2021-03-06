import React from "react";
import { useDispatch } from "react-redux";
import { open_favourites } from "../actions/moveActionTypes";
// import { useGlobalContext } from "../context";

const Header = () => {
  const dispatch = useDispatch();
  return (
    <header className="site-header">
      <h1 className="site-heading">Red Ant Comic</h1>
      <button
        className="favourites-toggle js-favourites-toggle"
        onClick={() => dispatch(open_favourites())}
      ></button>
    </header>
  );
};

export default Header;
