import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";

import {
  fetchCarsByIdThunk,
  fetchCarsByQueryThunk,
  fetchCatalogThunk,
  fetchMoreCarsThunk,
  fetchRefCatalogThunk,
} from "./operations.js";

const initialState = {
  catalog: [],
  refCatalog: [],
  catalogCount: 0,
  favorites: [],
  car: null,
  value: "",
  isLimit: false,
  isLoading: false,
  isError: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState,
  reducers: {
    increaseCatalogCount: (state, { payload }) => {
      state.catalogCount += payload;
    },
    saveValue: (state, { payload }) => {
      state.value = payload;
    },
    addToFavorites: (state, { payload }) => {
      const carToAdd = state.catalog.find((car) => car.id === payload);
      state.favorites.push(carToAdd);
    },
    removeFromFavorites: (state, { payload }) => {
      state.favorites = state.favorites.filter((car) => car.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRefCatalogThunk.fulfilled, (state, { payload }) => {
        state.refCatalog = payload;
      })
      .addCase(fetchCatalogThunk.fulfilled, (state, { payload }) => {
        state.isLimit = false;
        state.isLoading = false;
        state.catalog = payload;
      })
      .addCase(fetchCatalogThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchMoreCarsThunk.fulfilled, (state, { payload }) => {
        if (
          payload.length === 0 ||
          state.catalogCount === state.refCatalog.length
        ) {
          state.isLimit = true;
          toast("Sorry, that's all we got!", {
            icon: "🤷‍♂️",
          });
        }
        state.catalog = [...state.catalog, ...payload];
      })
      .addCase(fetchCarsByIdThunk.fulfilled, (state, { payload }) => {
        const [car] = payload;
        state.car = car;
      })
      .addCase(fetchCarsByQueryThunk.fulfilled, (state, { payload }) => {
        payload.length < 12 || payload.length > 12
          ? (state.isLimit = true)
          : null;
        state.catalog = payload;
      })
      .addCase(fetchCarsByQueryThunk.rejected, () => {
        toast("Sorry, no matches... Try again!", {
          icon: "🤷‍♂️",
        });
      });
  },
});

export const {
  addToFavorites,
  removeFromFavorites,
  saveValue,
  increaseCatalogCount,
} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
