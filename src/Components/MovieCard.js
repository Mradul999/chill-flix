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
    <div className="relative group md:w-[130px]  w-[100px] lg:w-[150px] flex-shrink-0 overflow-visible">
      <img
        onClick={clickhandler}
        className="w-full image-tile transition-transform duration-300 ease-in-out lg:group-hover:scale-105"
        src={IMG_URL + poster}
        alt="Movie Poster"
      />
    </div>
  );
};
