  import { useDispatch } from "react-redux";
  import { options } from "../utils/constants";
  import { addTopRatedMovies} from "../utils/moviesSlice";
  import { useEffect } from "react";


  export const useTopratedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/top_rated?page=1",
        options
      );
      const json = await response.json();
      console.log(json);
      
      dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
      getTopRatedMovies();
    }, []);
  };
