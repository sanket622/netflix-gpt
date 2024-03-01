import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        popularMovies:null,
        horrorMovies:null,
        trendingMovies:null,
        upcomingMovies:null,
        trailerVideo:null,
    },
    reducers:{
        addNowPlayingMovies : (state,action) => {
               state.nowPlayingMovies = action.payload;
        },
        addTrailerVideo:(state,action) =>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies : (state,action) => {
            state.popularMovies = action.payload;
     },
     addHorrorMovies : (state,action) => {
        state.horrorMovies = action.payload;
 },
 addTrendingMovies : (state,action) => {
    state.trendingMovies = action.payload;
},
addUpcomingMovies : (state,action) => {
    state.upcomingMovies = action.payload;
},
    },
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addHorrorMovies,addTrendingMovies,addUpcomingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;