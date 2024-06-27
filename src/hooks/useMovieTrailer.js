import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { options } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

export const useMovieTrailer=(movie_ID)=>{
    const dispatch = useDispatch();
    try {
      const getmovieTrailer = async () => {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie_ID}/videos`,
          options
        );
        const json = await response.json();
        // console.log(json);
        
        const filterdata = json.results.filter((video) => video.type === "Trailer");
        const trailer = filterdata.length ? filterdata[0] : json.results[0];
       
        dispatch(addTrailerVideo(trailer));
      };

      useEffect(() => {
        getmovieTrailer();
      }, []);
      
    } catch (error) {
      <div><h1>Site Under Construction</h1></div>
      
    }
    
    
      
}