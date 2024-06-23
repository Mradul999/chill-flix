import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.js";
import moviesReducer from "./moviesSlice.js";


export const Appstore=configureStore({
    reducer:{
        user:userReducer,
        movies:moviesReducer,

    },
});


