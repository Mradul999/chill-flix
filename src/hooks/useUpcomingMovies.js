import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addUpcomingMovies} from "../utils/moviesSlice";
import { useEffect } from "react";


export const useUpcomingMovies = () => {
  const dispatch = useDispatch();

  const getUpcomingMovies = async () => {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?page=1",
      options
    );
    const json = await response.json();
    console.log(json);
    
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    getUpcomingMovies();
  }, []);
};
