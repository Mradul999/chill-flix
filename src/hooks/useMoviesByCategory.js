import { useDispatch } from "react-redux";
import { addMoviesByCategory, resetMoviesByCategory, resetMoviesBySearch } from "../utils/moviesSlice";
import { options } from "../utils/constants";
import { useEffect } from "react";

export const useMoviesByCategory = (category) => {
  const dispatch = useDispatch();

  const getMoviesByCategory = async () => {
    if (!category) {
      dispatch(resetMoviesByCategory());

      return;
    }
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${category}`,
        options
      );
      const json = await response.json();
      console.log(json);
      const filteredResults = json.results.filter(movie => movie.poster_path);

      dispatch(addMoviesByCategory(filteredResults));
    } catch (error) {
      console.log("error");
    }
  };
  useEffect(() => {
    getMoviesByCategory();
  }, [category,dispatch]);
};
