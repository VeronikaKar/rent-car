import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import Loader from "../../components/Loader/Loader";
import CardsList from "../../components/CardsList/CardsList";
import SearchForm from "../../components/SearchForm/SearchForm";

import { increaseCatalogCount } from "../../redux/catalog/slice.js";
import {
  selectCatalog,
  selectIsLimit,
  selectIsLoading,
} from "../../redux/catalog/selectors.js";
import {
  fetchCatalogThunk,
  fetchMoreCarsThunk,
  fetchRefCatalogThunk,
} from "../../redux/catalog/operations.js";

import css from "./CatalogPage.module.scss";

const CatalogPage = () => {
  const catalog = useSelector(selectCatalog);
  const isLimit = useSelector(selectIsLimit);
  const isLoading = useSelector(selectIsLoading);
  const currentPage = useRef(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(increaseCatalogCount(12));
    dispatch(fetchRefCatalogThunk());
    dispatch(fetchCatalogThunk());
  }, [dispatch]);

  const handleLoadMoreClick = () => {
    currentPage.current++;
    dispatch(increaseCatalogCount(12));
    dispatch(fetchMoreCarsThunk(currentPage.current));
  };

  return (
    <>
      <SearchForm />
      {isLoading && <Loader />}
      {!isLoading && (
        <>
          <CardsList catalog={catalog} />
          {!isLimit && (
            <button className={css.button} onClick={handleLoadMoreClick}>
              Load more
            </button>
          )}
        </>
      )}
    </>
  );
};

export default CatalogPage;
