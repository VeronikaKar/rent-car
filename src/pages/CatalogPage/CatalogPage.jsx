import s from "./CatalogPage.module.scss";
import { Filter } from "../../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectIsLoading } from "../../redux/catalog/selectors.js";
import { useEffect } from "react";
import { fetchCarsThunk } from "../../redux/catalog/operations.js";
import { Loader } from "../../components/Loader/Loader";
import { CatalogList } from "../../components/CatalogList/CatalogList.jsx";

 const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchCarsThunk());
  }, [dispatch]);
  return (
    <div className={s.container}>
      <Filter />
      {isLoading ? <Loader /> : <CatalogList cars={cars} />}
    </div>
  );
};
export default CatalogPage