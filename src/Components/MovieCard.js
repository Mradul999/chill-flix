import { IMG_URL } from "../utils/constants";
import "./MovieCard.css";

import { useNavigate } from "react-router-dom";

export const MoviesCard = ({ poster, movieId, overview, vote_average ,title,releaseDate,voteCount,popularity }) => {
  const navigate = useNavigate();
  const clickhandler = () => {
    navigate("/movieinfo", {
      state: { poster, movieId, overview, vote_average,title,releaseDate,voteCount,popularity },
    });
  };

  return (
    <div className="relative cursor-pointer hover:scale-90  transition-all md:w-[130px]  w-[100px] lg:w-[150px] flex-shrink-0 ">
      <img
        onClick={clickhandler}
        className="w-full image-tile "
        src={IMG_URL + poster}
        alt="Movie Poster"
      />
    </div>
  );
};
