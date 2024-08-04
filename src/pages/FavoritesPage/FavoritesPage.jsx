import React, { useEffect, useState } from "react";
import s from "./FavoritesPage.module.scss";
import { CatalogItem } from "../../components/CatalogItem/CatalogItem";

const FavoritesPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [cars, setCars] = useState([]); 

  useEffect(() => {
    
    const savedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(savedFavorites);

    
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
    
      const response = await fetch(
        "https://667d5847297972455f64b57d.mockapi.io/v1/adverts"
      );
      const data = await response.json();
      setCars(data);
    } catch (error) {
      console.error("Failed to fetch cars", error);
    }
  };

  const handleToggleFavorite = (id) => {
    const updatedFavorites = favorites.includes(id)
      ? favorites.filter((itemId) => itemId !== id)
      : [...favorites, id];

    setFavorites(updatedFavorites);

    
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

 
  const favoriteCars = cars.filter((car) => favorites.includes(car.id));

  return (
    <div className={s.container}>
      {favoriteCars.length === 0 ? (
        <p>No favorite items found.</p>
      ) : (
        <ul className={s.list}>
          {favoriteCars.map((car) => (
            <CatalogItem
              key={car.id}
              {...car}
              isFavorited={true}
              onToggleFavorite={handleToggleFavorite}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default FavoritesPage;
