import React from "react";
// import components
import Favourites from "../Components/Favourites";
import Header from "../Components/Header";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <>
      <Header />
      <MovieList />
      <Favourites />
    </>
  );
};

export default Home;
