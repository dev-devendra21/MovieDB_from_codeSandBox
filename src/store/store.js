import { configureStore } from "@reduxjs/toolkit";
import popularReducer from './popularSlice';
import topRatedReducer from './topRatedSlice';
import upcomingReducer from './upcomingSlice';
const store = configureStore({
  reducer: {
    popular: popularReducer,
    topRated: topRatedReducer,
    upcoming: upcomingReducer,
  },
});

export default store;
