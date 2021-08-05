import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import heroReducer from "../features/heroesSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    heroes: heroReducer,
  },
});
