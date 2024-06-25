import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addMoviesBySearch, resetMoviesBySearch } from "../utils/moviesSlice";
import { useEffect } from "react";

export const useMoviesBySearch = (query) => {
  const dispatch = useDispatch();

  const getMoviesBySearch = async () => {
    if (!query) {
        dispatch(resetMoviesBySearch());
      return;
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=true`,
        options
      );
      const json = await response.json();
      // console.log(json);

      dispatch(addMoviesBySearch(json.results));
    } catch (error) {

    }
  };

  useEffect(() => {
    getMoviesBySearch();
  }, [query]);
};
