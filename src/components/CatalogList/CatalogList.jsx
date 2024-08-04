import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCarsThunk } from "../../redux/catalog/operations";
import { ModalWindow } from "../ModalWindow/ModalWindow";
import s from "./CatalogList.module.scss";
import { CatalogItem } from "../CatalogItem/CatalogItem";

export const CatalogList = ({ cars = [] }) => {
  const dispatch = useDispatch();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);
  const [favoritedItems, setFavoritedItems] = useState([]);

  const handleOpenModal = (car) => {
    setSelectedCar(car);
    setIsOpenModal(true);
  };

  const handleCloseModal = () => {
    setIsOpenModal(false);
    setSelectedCar(null);
  };

  const handleLoadMore = () => {
    dispatch(fetchCarsThunk());
  };

  const handleToggleFavorite = (id) => {
    setFavoritedItems((prevFavoritedItems) =>
      prevFavoritedItems.includes(id)
        ? prevFavoritedItems.filter((itemId) => itemId !== id)
        : [...prevFavoritedItems, id]
    );
  };

  return (
    <>
      <ul className={s.list}>
        {cars.map((item) => (
          <CatalogItem
            onOpen={() => handleOpenModal(item)}
            key={item.id}
            {...item}
            isFavorited={favoritedItems.includes(item.id)}
            onToggleFavorite={handleToggleFavorite}
          />
        ))}
      </ul>
      {isOpenModal && (
        <ModalWindow onClose={handleCloseModal} car={selectedCar} />
      )}
      <button className={s.btn_load_more} onClick={handleLoadMore}>
        Load more
      </button>
    </>
  );
};
