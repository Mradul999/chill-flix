import React from "react";
import useFetchMovieTrailer from "../hooks/useFetchMovieTrailer";
import { IMG_URL } from "../utils/constants";
import { useLocation } from "react-router-dom";
import ReactPlayer from "react-player";
import useFetchCast from "../hooks/useFetchCast";
import "./MovieInfo.css";
import CastCard from "./CastCard";
import { useState } from "react";
import { useEffect } from "react";
export default function MovieInfo() {
  const location = useLocation();
  const {
    poster,
    movieId,
    overview,
    vote_average,
    title,
    releaseDate,
    voteCount,
    popularity,
  } = location.state || {};
  const [isLoading, setIsLoading] = useState(true);
  const trailer = useFetchMovieTrailer(movieId);
  const cast = useFetchCast(movieId);

  useEffect(() => {
    setIsLoading(true);
  }, [movieId]);

  useEffect(() => {
    if (trailer) {
      setIsLoading(false);
    }
  }, [trailer]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-screen p-3 sm:p-10   bg text-white flex flex-col  ">
      <h1 className="sm:text-[2.5rem]  text-[1.3rem] font-semibold mb-2">
        {title}
      </h1>
      <div className=" flex flex-col md:flex-row   md:gap-3 gap-10 mb-16  ">
        <div className="w-full md:w-[900px] h-[200px] sm:h-full  sm:max-h-[500px] order-first md:order-none rounded-xl overflow-hidden movie-bg">
          {isLoading && (
            <div className="absolute left-[30%] top-[20%] flex items-center justify-center ">
              <p className="text-white">Trailer not Available</p>
            </div>
          )}
          {trailer ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer.key}&rel=0`}
              playing
              width="100%"
              height="100%"
              controls
              className=" "
              onReady={() => setIsLoading(false)}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-white"> </p>
            </div>
          )}
        </div>

        <div className="flex sm:flex-row flex-col  gap-3 ">
          <img
            className="rounded-xl w-[90%] sm:w-[44%]    object-fill  "
            src={IMG_URL + poster}
          ></img>

          <div className="max-w-[260px] flex flex-col gap-2 ml-2">
            <h1 className="font-bold text-[1.2rem] sm:text-[1.7rem]">
              Movie Overview
            </h1>
            <div className="flex flex-col   ">
              <span className="text-[13px] mb-2">
                <span className=" text-[15px]">{overview}</span>
              </span>
              <span className="font-semibold text-[15px] ">
                Release date:{" "}
                <span className="text-green-600">{releaseDate}</span>
              </span>
              <span className="font-semibold text-[15px]">
                Average Vote:{" "}
                <span className="text-green-600"> {vote_average}</span>
              </span>
              <span className="font-semibold text-[15px]">
                Vote count: <span className="text-green-600">{voteCount}</span>{" "}
              </span>
              <span className="font-semibold text-[15px]">
                Popularity: <span className="text-green-600">{popularity}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-[1.3rem] sm:text-[2rem] mb-1">
        Movie Cast
      </h1>
      <div className="grid gap-6 lg:grid-cols-7 md:grid-cols-5 sm:grid-cols-4 grid-cols-2">
        {cast.map((member) => (
          <CastCard
            key={member.id}
            profilePath={member.profile_path}
            name={member.name}
            character={member.character}
          />
        ))}
      </div>
    </div>
  );
}
