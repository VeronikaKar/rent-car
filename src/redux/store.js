import storage from "redux-persist/lib/storage";
import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import { carsReducer } from "./catalog/slice";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
  whitelist: ["catalog", "favorites", "value", "car"],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carsReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
