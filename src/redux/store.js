import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./catalog/slice";

export const store = configureStore({
  reducer: {
    cars: carsReducer,
  },
});
