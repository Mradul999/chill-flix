import { useSelector } from "react-redux";
import { VideoTitle } from "./VideoTitle.js";
import { VideoBackground } from "./VideoBackground.js";

export const VideContainer=()=>{

    
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);

  if(!movies) return;

  const mainMovie=movies[2];
 
  const{original_title,overview,id}=mainMovie;

    return(
        <div className="w-screen  m    ">
            <VideoTitle title={original_title} overview={overview} />
            <VideoBackground movie_ID={id}/>
        </div>
    );
}