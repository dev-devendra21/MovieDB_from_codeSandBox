import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APISTATUS } from "../utils/constant";

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    data: [],
    status: APISTATUS.LOADING,
    currentPage: 1,
    totalPages: 500,
  },
  reducers: {
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPopular.pending, (state, action) => {
        state.status = APISTATUS.LOADING;
      })
      .addCase(fetchPopular.fulfilled, (state, action) => {
        state.status = APISTATUS.IDLE;
        state.data = action.payload;
      })
      .addCase(fetchPopular.rejected, (state, action) => {
        state.status = APISTATUS.ERROR;
      });
  },
});

export const fetchPopular = createAsyncThunk("/popular", async (_, { getState }) => {
  const { currentPage } = getState().popular;
  const API_KEY = process.env.REACT_APP_API_KEY
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  );
  if (res.ok) {
    const data = await res.json();
    return data;
  }
});

export const { setCurrentPage } = popularSlice.actions;

export default popularSlice.reducer;
