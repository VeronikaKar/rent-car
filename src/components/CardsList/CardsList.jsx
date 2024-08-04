import { useDispatch, useSelector } from "react-redux";

import CardItem from "../CardItem/CardItem";

import { useModal } from "../../hooks/useModal";
import { selectFavorites } from "../../redux/catalog/selectors.js";
import { fetchCarsByIdThunk } from "../../redux/catalog/operations.js";
import {
  addToFavorites,
  removeFromFavorites,
} from "../../redux/catalog/slice.js";

import css from "./CardsList.module.scss";

const CardsList = ({ catalog, favorites }) => {
  const savedFavorites = useSelector(selectFavorites);
  const dispatch = useDispatch();
  const { openModal } = useModal();

  const carsList = catalog || favorites;

  const handleLearnMoreClick = (id) => {
    openModal();
    dispatch(fetchCarsByIdThunk(id));
  };

  const toggleAddToFavoritesClick = (id) => {
    if (savedFavorites.some((car) => car.id === id)) {
      dispatch(removeFromFavorites(id));
      return;
    }
    dispatch(addToFavorites(id));
  };
  return (
    <ul className={css.list}>
      {carsList.map((car) => {
        return (
          <li className={css.item} key={car.id}>
            <CardItem
              car={car}
              handleClick={{
                handleLearnMoreClick,
                toggleAddToFavoritesClick,
              }}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsList;
