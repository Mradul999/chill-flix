import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useFetchMovieTrailer = (movieId) => {
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const fetchMovieTrailer = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          options
        );
        const json = await response.json();
        const filteredData = json.results.filter(video => video.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];

        setTrailer(trailer);
      } catch (error) {
        console.error("Error fetching movie trailer:", error);
      }
    };

    if (movieId) {
      fetchMovieTrailer();
    }
  }, [movieId]);

  return trailer;
};

export default useFetchMovieTrailer;
