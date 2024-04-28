import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APISTATUS } from "../utils/constant";

const upcomingSlice = createSlice({
    name: "upcoming",
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
            .addCase(fetchUpcoming.pending, (state, action) => {
                state.status = APISTATUS.LOADING;
            })
            .addCase(fetchUpcoming.fulfilled, (state, action) => {
                state.status = APISTATUS.IDLE;
                state.data = action.payload;
            })
            .addCase(fetchUpcoming.rejected, (state, action) => {
                state.status = APISTATUS.ERROR;
            });
    },
});

export const fetchUpcoming = createAsyncThunk("/Upcoming", async (_, { getState }) => {
    const { currentPage } = getState().upcoming;
    const API_KEY = process.env.REACT_APP_API_KEY
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPage}`
    );
    if (res.ok) {
        const data = await res.json();
        return data;
    }
});

export const { setCurrentPage } = upcomingSlice.actions;

export default upcomingSlice.reducer;
