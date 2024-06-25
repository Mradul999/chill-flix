import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:"gpt",
    initialState:{
        showGPTsearch:false,
    },
    reducers:{
        toggleGPTsearch:(state)=>{
            state.showGPTsearch=!state.showGPTsearch;
        },
        
    },
});

export  const {toggleGPTsearch}=gptSlice.actions;
export default gptSlice.reducer;