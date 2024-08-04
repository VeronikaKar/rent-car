import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  favorites: [],
  isLoading: false,
  isError: null,
};

const slice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    fetchDataSuccess: (state, action) => {
      state.cars = action.payload;
      state.isLoading = false;
      state.isError = null;
    },
    isError: (state, action) => {
      state.isError = action.payload;
    },
    isLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const carsReducer = slice.reducer;
export const { fetchDataSuccess, isError, isLoading } = slice.actions;
