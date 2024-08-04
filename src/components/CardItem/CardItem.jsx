import { selectFavorites } from "../../redux/catalog/selectors";
import css from "./CardItem.module.scss";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { AiTwotoneHeart } from "react-icons/ai";
import { sliceCity, sliceCountry } from "../../utils/sliceAddress";
const CardItem = ({ car, handleClick }) => {
  const favorites = useSelector(selectFavorites);
  const { toggleAddToFavoritesClick, handleLearnMoreClick } = handleClick;
  const {
    img,
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    accessories,
    photoLink,
  } = car;

  return (
    <>
      <div className={css.thumb}>
        <img src={photoLink || img} alt={`${make} ${model}`} />
        <AiTwotoneHeart
          className={clsx(css.icon, {
            [css.active]: favorites.some((car) => car.id === id),
          })}
          onClick={() => toggleAddToFavoritesClick(id)}
          size={18}
        />
      </div>
      <div className={css.content_wrapper}>
        <div className={css.title_wrapper}>
          <h3 className={css.title}>
            {make} <span className={css.accent}>{model}</span>, {year}
          </h3>
          <span className={css.price}>{rentalPrice}</span>
        </div>
        <ul className={css.list}>
          <li className={css.item}>{sliceCity(address)}</li>
          <li className={css.item}>{sliceCountry(address)}</li>
          <li className={css.item}>{rentalCompany}</li>
          <li className={css.item}>{type}</li>
          <li className={css.item}>{model}</li>
          <li className={css.item}>{id}</li>
          <li className={css.item}>{accessories[0]}</li>
        </ul>
        <button
          className={css.button}
          onClick={() => handleLearnMoreClick(id)}
          type="button"
        >
          Learn more
        </button>
      </div>
    </>
  );
};

export default CardItem;
