import { useEffect, useState } from "react";
import { options } from "../utils/constants";

const useFetchCast = (movieId) => {
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/credits`,
          options
        );
        const json = await response.json();
        setCast(json.cast);
      } catch (error) {
        console.error("Error fetching movie cast:", error);
      }
    };

    if (movieId) {
      fetchCast();
    }
  }, [movieId]);

  return cast;
};

export default useFetchCast;
