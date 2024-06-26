import { configureStore } from "@reduxjs/toolkit";
import popularReducer from './popularSlice';
import topRatedReducer from './topRatedSlice';
import upcomingReducer from './upcomingSlice';
import searchReducer from './searchSlice';
import movieDetailsReducer from './movieDetailsSlice';
const store = configureStore({
  reducer: {
    popular: popularReducer,
    topRated: topRatedReducer,
    upcoming: upcomingReducer,
    movieDetails: movieDetailsReducer,
    search: searchReducer,
  },
});

export default store;
