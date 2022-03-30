import React from "react";
import Favourites from "../Components/Favourites";
import Header from "../Components/Header";
import MovieContents from "../Components/MovieContents";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <>
      <Header />
      <MovieContents />
      {/* <MovieList /> */}

      <Favourites />
    </>
  );
};

export default Home;
