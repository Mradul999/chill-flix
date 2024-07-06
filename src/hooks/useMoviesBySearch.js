import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addMoviesBySearch, resetMoviesBySearch } from "../utils/moviesSlice";
import { useEffect } from "react";
import { useState } from "react";

export const useMoviesBySearch = (query,page=1) => {
  const dispatch = useDispatch();
  const [movies, setMovies] = useState([]);

  const getMoviesBySearch = async () => {
    if (!query) {
      dispatch(resetMoviesBySearch());
      setMovies([]);
      return;
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true&page=${page}`,
        options
      );
      const json = await response.json();

     
      const filteredResults = json.results.filter(movie => movie.poster_path);
      setMovies(filteredResults);

      dispatch(addMoviesBySearch(filteredResults));

    } catch (error) {
      console.error('Failed to fetch movies:', error);
    }
  };

  useEffect(() => {
    getMoviesBySearch();
  }, [query]);
  return movies;
};
