import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { APISTATUS } from "../utils/constant";

const popularSlice = createSlice({
  name: "popular",
  initialState: {
    data: [],
    status: APISTATUS.LOADING,
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

export const fetchPopular = createAsyncThunk("/fetch", async ({ page }) => {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=2ceb90f0b3bba0d43fcefbd0a6af8dbb&language=en-US&page=${page}`
  );
  const data = await res.json();
  return data;
});

export default popularSlice.reducer;
