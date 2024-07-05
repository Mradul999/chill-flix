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

  return (
    <div className="w-screen p-10   bg text-white flex flex-col  ">
      <h1 className="text-[2.5rem] font-semibold mb-1">{title}</h1>
      <div className="h-[400px]  flex gap-2 mb-16  ">
        <img
          className="rounded-xl w-[20%] h-[100%] object-cover  "
          src={IMG_URL + poster}
        ></img>
        <div className="w-[700px]  rounded-xl overflow-hidden">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center ">
              <p className="text-white">No available trailer</p>
            </div>
          )}
          {trailer ? (
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${trailer.key}&rel=0`}
              playing
              width="100%"
              height="100%"
              controls
              className=""
              onReady={() => setIsLoading(false)}
            />
          ) : (
            <div className="h-full flex items-center justify-center">
              <p className="text-white"> </p>
            </div>
          )}
        </div>
        <div className="max-w-[260px] flex flex-col gap-2 ml-2">
          <h1 className="font-bold text-[1.7rem]">Movie Overview</h1>
          <div className="flex flex-col text-[13px]">
            <span className="text-[13px] mb-2">
              <span>{overview}</span>
            </span>
            <span className="font-semibold">
              Release date:{" "}
              <span className="text-green-600">{releaseDate}</span>
            </span>
            <span className="font-semibold">
              Average Vote:{" "}
              <span className="text-green-600"> {vote_average}</span>
            </span>
            <span className="font-semibold">
              Vote count: <span className="text-green-600">{voteCount}</span>{" "}
            </span>
            <span className="font-semibold">
              Popularity: <span className="text-green-600">{popularity}</span>
            </span>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-[2rem] mb-1">Movie Cast</h1>
      <div className="flex flex-wrap  gap-6 flex-row">
        {cast.map((member) => (
          <CastCard
            profilePath={member.profile_path}
            name={member.name}
            character={member.character}
          />
        ))}
      </div>
    </div>
  );
}
