import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

export const useMovieTrailer=(movie_ID)=>{
    const dispatch = useDispatch();
    const getmovieTrailer = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_ID}/videos`,
          options
        );
        const json = await response.json();
        
        const filterdata = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
       
        dispatch(addTrailerVideo(trailer));
      };
    
      useEffect(() => {
        getmovieTrailer();
      }, []);
}