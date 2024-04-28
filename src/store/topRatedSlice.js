import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APISTATUS } from "../utils/constant";

const topRatedSlice = createSlice({
    name: "topRated",
    initialState: {
        data: [],
        status: APISTATUS.LOADING,
        currentPage: 1,
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTopRated.pending, (state, action) => {
                state.status = APISTATUS.LOADING;
            })
            .addCase(fetchTopRated.fulfilled, (state, action) => {
                state.status = APISTATUS.IDLE;
                state.data = action.payload;
            })
            .addCase(fetchTopRated.rejected, (state, action) => {
                state.status = APISTATUS.ERROR;
            });
    },
});

export const fetchTopRated = createAsyncThunk("/topRated", async (_, { getState }) => {
    const { currentPage } = getState().topRated;
    const API_KEY = process.env.REACT_APP_API_KEY
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    if (res.ok) {
        const data = await res.json();
        return data;
    }
});

export const { setCurrentPage } = topRatedSlice.actions;

export default topRatedSlice.reducer;
