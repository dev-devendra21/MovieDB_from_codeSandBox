import { configureStore } from "@reduxjs/toolkit";
import popularReducer from "./popularSlice";
const store = configureStore({
  reducer: {
    popular: popularReducer,
  },
});

export default store;
