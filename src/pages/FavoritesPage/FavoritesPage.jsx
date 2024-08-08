// FavoritesPage.jsx
import { useSelector } from "react-redux";
import CardsList from "../../components/CardsList/CardsList";
import { selectFavorites } from "../../redux/catalog/selectors.js";
import css from "./FavoritesPage.module.scss";

const FavoritesPage = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <>
      <div className={css.cardsListWrapper}>
        <CardsList favorites={favorites} />
      </div>
      {favorites.length === 0 && (
        <div className={css.wrapper}>
          <p className={css.title}>You don’t have any favorite cars.</p>
          <p className={css.description}>
            Your favorite cars will appear here once you add some.
          </p>
        </div>
      )}
    </>
  );
};

export default FavoritesPage;
