import { createAsyncThunk } from "@reduxjs/toolkit";

import { mockApi } from "../../services/mockApi";

export const fetchRefCatalogThunk = createAsyncThunk(
  "cars/fetchRefCatalog",
  async (_, thunkApi) => {
    try {
      const { data } = await mockApi.get("adverts/");
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
export const fetchCatalogThunk = createAsyncThunk(
  "cars/fetchCatalog",
  async (_, thunkApi) => {
    try {
      const { data } = await mockApi.get("adverts/", {
        params: {
          page: 1,
          limit: 12,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchMoreCarsThunk = createAsyncThunk(
  "cars/fetchMoreCars",
  async (page, thunkApi) => {
    try {
      const { data } = await mockApi.get("adverts/", {
        params: {
          page,
          limit: 12,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsByIdThunk = createAsyncThunk(
  "cars/fetchCarsByIdThunk",
  async (id, thunkApi) => {
    try {
      const { data } = await mockApi.get("adverts/", {
        params: {
          id,
        },
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarsByQueryThunk = createAsyncThunk(
  "cars/fetchCarsByQuery",
  async (params, thunkApi) => {
    try {
      const { data } = await mockApi.get("adverts/", {
        params: {
          make: params.make,
          rentalPrice: params.rentalPrice,
        },
      });
      if (params.from || params.to) {
        const filteredData = data.filter(
          (car) => car.mileage <= params.to && car.mileage >= params.from
        );
        return filteredData;
      }
      if (params.rentalPrice) {
        return data.filter(
          (car) =>
            +car.rentalPrice.slice(1, car.rentalPrice.length) <=
            +params.rentalPrice
        );
      }
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
