import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

export const useMovieTrailer = (movie_ID) => {
  const dispatch = useDispatch();
  const trailer = useSelector((state) => state.movies.trailer);

  useEffect(() => {
    const getMovieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_ID}/videos`,
          options
        );
        const json = await response.json();
        
        const filterData = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : json.results[0];
       
        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching the trailer:", error);
      }
    };

    getMovieTrailer();
  }, [dispatch, movie_ID]);

  return trailer;
};
