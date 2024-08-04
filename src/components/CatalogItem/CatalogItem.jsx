import React, { useState } from "react";
import PropTypes from "prop-types";
import s from "./CatalogItem.module.scss";
import EmptyHeart from "../images/Icon/EmptyHeart";
import FilledHeart from "../images/Icon/FilledHeart";

const Button = ({
  text,
  width,
  handleClick,
  type = "submit",
  height = 44,
  padding = 12,
}) => (
  <button
    type={type}
    className={s.btn}
    style={{
      maxWidth: `${width}px`,
      height: `${height}px`,
      padding: `${padding}px`,
    }}
    onClick={handleClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  text: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  height: PropTypes.number,
  padding: PropTypes.number,
};

Button.defaultProps = {
  handleClick: () => {},
  type: "submit",
  height: 44,
  padding: 12,
};

const getCityAndCountry = (address) => {
  if (!address) return { city: "Unknown City", country: "Unknown Country" };
  const parts = address.split(", ");
  const city = parts[parts.length - 2]?.trim() || "Unknown City";
  const country = parts[parts.length - 1]?.trim() || "Unknown Country";
  return { city, country };
};

export const CatalogItem = ({
  onOpen,
  img,
  make,
  model,
  rentalPrice,
  year,
  address,
  rentalCompany,
  type,
  id,
  accessories,
  isFavorited,
  onToggleFavorite,
}) => {
  const { city, country } = getCityAndCountry(address);

  return (
    <li className={s.item}>
      <div className={s.img_block}>
        <img src={img} alt={`${make} ${model}`} />
        <button className={s.heart} onClick={() => onToggleFavorite(id)}>
          {isFavorited ? <FilledHeart size={18} /> : <EmptyHeart size={18} />}
        </button>
      </div>
      <div className={s.titles_block}>
        <h3>
          {make}
          <span className={s.model}> {model}</span>, {year}
        </h3>
        <p className={s.title_price}>{rentalPrice}</p>
      </div>
      <div className={s.tags_block}>
        <ul className={s.tag_list}>
          <li className={s.tag_item}>{city}</li>
          <li className={s.tag_item}>{country}</li>
          <li className={s.tag_item}>{rentalCompany}</li>
        </ul>
        <ul className={s.tag_list}>
          <li className={s.tag_item}>{type}</li>
          <li className={s.tag_item}>{model}</li>
          <li className={s.tag_item}>{id}</li>
          <li className={s.tag_item}>{accessories[0]?.slice(0, 15)}</li>
        </ul>
      </div>
      <div className={s.btn_block}>
        <Button width={274} text={"Learn more"} handleClick={onOpen} />
      </div>
    </li>
  );
};

CatalogItem.propTypes = {
  onOpen: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  make: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  rentalPrice: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  address: PropTypes.string,
  rentalCompany: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  accessories: PropTypes.arrayOf(PropTypes.string),
  isFavorited: PropTypes.bool,
  onToggleFavorite: PropTypes.func.isRequired,
};

CatalogItem.defaultProps = {
  address: "",
  accessories: [],
  isFavorited: false,
};
