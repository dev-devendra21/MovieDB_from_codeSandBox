import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { APISTATUS } from "../utils/constant";

const searchSlice = createSlice({
    name: "search",
    initialState: {
        data: [],
        status: APISTATUS.LOADING,
        currentPage: 1,
        searchTerm: "",
    },
    reducers: {
        setCurrentPage: (state, action) => {
            state.currentPage = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSearch.pending, (state, action) => {
                state.status = APISTATUS.LOADING;
            })
            .addCase(fetchSearch.fulfilled, (state, action) => {
                state.status = APISTATUS.IDLE;
                state.data = action.payload;
            })
            .addCase(fetchSearch.rejected, (state, action) => {
                state.status = APISTATUS.ERROR;
            })
    }
})

export const fetchSearch = createAsyncThunk("/search?query", async (query, { getState }) => {
    const { currentPage } = getState().search;
    const API_KEY = process.env.REACT_APP_API_KEY
    const res = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=${currentPage}`
    );
    const data = await res.json();
    return data;
});

export const { setCurrentPage, setSearchTerm } = searchSlice.actions
export default searchSlice.reducer