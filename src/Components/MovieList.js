import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_favourite_movie, change_button } from "../actions/moveActionTypes";
import { fetchMovies } from "../actions/movieAsyncActions";
import Loading from "./Loading";

const MovieList = () => {
  const [changeText, setChangeText] = useState(false);
  const { movies, loading, change } = useSelector(
    (state) => state.movieReducer
  );
  const dispatch = useDispatch();
  // console.log(AllMovies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, []);

  const handleButtonClick = (item) => {
    dispatch(add_favourite_movie(item));
    dispatch(setChangeText(!changeText));
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {movies.map((item, index) => {
        const {
          title,
          thumbnail: { path },
        } = item;

        return (
          <main className="site-content" key={item.id}>
            <ul className="comics-list">
              <li className="comic-item">
                <div className="comic-card">
                  <img src={`${path}/portrait_uncanny.jpg`} alt="" />
                  <h2>{title}</h2>
                  <button
                    className="button js-add"
                    onClick={() => handleButtonClick(item)}
                  >
                    {changeText
                      ? "Add to favourites"
                      : "Remove from favourites"}
                  </button>
                </div>
              </li>
            </ul>
          </main>
        );
      })}
    </>
  );

  // const AddFavouriteMovie = (movie) => {
  //   const newFavouriteList = [...favourites, movie];
  //   setFavourites(newFavouriteList);
  // };

  // const removeFavouriteMovie = (movie) => {
  //   const newFavouriteList = favourites.filter(
  //     (favourite) => favourite.id !== movie.id
  //   );
  //   setFavourites(newFavouriteList);

  // return (
  //   <>
  //     {moviesList.map((movie, index) => {
  //       // console.log(movie);
  //       return (
  //         <main className="site-content" key={movie.id}>
  //           <ul className="comics-list">
  //             <li className="comic-item">
  //               <div className="comic-card">
  //                 {/* <img src="" alt="" /> */}
  //                 <h2>Comic name</h2>
  //                 <button
  //                   className="button js-add"
  //                   onClick={() => AddFavouriteMovie(movie)}
  //                 >
  //                   {movieAdded
  //                     ? "Add to favourites"
  //                     : "Remove from favourites"}
  //                 </button>
  //               </div>
  //             </li>
  //           </ul>
  //         </main>
  //       );
  //     })}
  //   </>
  // );
};

export default MovieList;
