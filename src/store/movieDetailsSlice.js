import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APISTATUS } from "../utils/constant";

const movieDetailsSlice = createSlice({
    name: "movieDetails",
    initialState: {
        description: [],
        cast: [],
        status: APISTATUS.LOADING,

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovieDescription.pending, (state, action) => {
                state.status = APISTATUS.LOADING;
            })
            .addCase(fetchMovieDescription.fulfilled, (state, action) => {
                state.status = APISTATUS.IDLE;
                state.description = action.payload;
            })
            .addCase(fetchMovieDescription.rejected, (state, action) => {
                state.status = APISTATUS.ERROR;
            })
            .addCase(fetchMovieCast.pending, (state, action) => {
                state.status = APISTATUS.LOADING;
            })
            .addCase(fetchMovieCast.fulfilled, (state, action) => {

                state.status = APISTATUS.IDLE;
                state.cast = action.payload;

            })
            .addCase(fetchMovieCast.rejected, (state, action) => {

                state.status = APISTATUS.ERROR;

            })
    }

})

const fetchMovieDescription = createAsyncThunk("/movieDescription", async (movieId) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${API_KEY}&language=en-US`)
    if (response.ok) {
        const data = await response.json();
        return data;
    }
});

const fetchMovieCast = createAsyncThunk("/movieCast", async (movieId) => {
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`)
    if (response.ok) {
        const data = await response.json();
        return data;
    }
})

export { fetchMovieDescription, fetchMovieCast }

export default movieDetailsSlice.reducer