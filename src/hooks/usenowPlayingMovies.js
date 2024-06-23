import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addnowPlayingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

export const usenowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      options
    );
    const json = await response.json();
    
    dispatch(addnowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};
