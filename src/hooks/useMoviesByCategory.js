import { useDispatch } from "react-redux";
import {
  addMoviesByCategory,
  resetMoviesByCategory,
} from "../utils/moviesSlice";
import { options } from "../utils/constants";
import { useEffect, useState } from "react";

export const useMoviesByCategory = (category, page = 1) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  const getMoviesByCategory = async () => {
    if (!category) {
      dispatch(resetMoviesByCategory());
      setMovies([]);

      return;
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${category}&page=${page}`,
        options
      );
      const json = await response.json();
      const filteredResults = json.results.filter((movie) => movie.poster_path);

      dispatch(addMoviesByCategory(filteredResults));
      setMovies(filteredResults);
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getMoviesByCategory();
  }, [category, dispatch, page]);

  return movies;
};
