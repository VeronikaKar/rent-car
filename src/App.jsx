
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { easyLazy } from "./helpers/easyLazy";
import { useDispatch } from "react-redux";
import { Suspense, useEffect } from "react";
import { fetchCarsThunk } from "./redux/catalog/operations";

const HomePage = easyLazy("HomePage");
const CatalogPage = easyLazy("CatalogPage");
const FavoritesPage = easyLazy("FavoritesPage");

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Suspense fallback={<div>Loading HomePage...</div>}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="catalog"
          element={
            <Suspense fallback={<div>Loading CatalogPage...</div>}>
              <CatalogPage />
            </Suspense>
          }
        />
        <Route
          path="favorites"
          element={
            <Suspense fallback={<div>Loading FavoritesPage...</div>}>
              <FavoritesPage />
            </Suspense>
          }
        />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
