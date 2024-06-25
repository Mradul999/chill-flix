import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideo: null,
    popularMovies: null,
    topratedMovies: null,

    upcomingMovies: null,
    moviesBySearch:null,
  },
  reducers: {
    addnowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },

    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },

    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topratedMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addMoviesBySearch:(state,action)=>{
        state.moviesBySearch=action.payload;

    },
    resetMoviesBySearch:(state,action)=>{
        state.moviesBySearch=null;
    },
  },
});

export default moviesSlice.reducer;
export const {
  addnowPlayingMovies,
  addTrailerVideo,
  addPopularMovies,
  addTopRatedMovies,
  addUpcomingMovies,
  resetMoviesBySearch,
  addMoviesBySearch,
} = moviesSlice.actions;
