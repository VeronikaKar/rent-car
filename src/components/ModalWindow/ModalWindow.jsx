import { useEffect } from "react";
import s from "./ModalWindow.module.scss";
import { IoCloseOutline } from "react-icons/io5";

const moveFirstCharToEnd = (str) => {
  if (str.length > 1) {
    return str.substring(1) + str.charAt(0);
  }
  return str;
};

const getCityAndCountry = (address) => {
  if (!address) return { city: "Unknown City", country: "Unknown Country" };
  const parts = address.split(", ");
  const city = parts[parts.length - 2]?.trim() || "Unknown City";
  const country = parts[parts.length - 1]?.trim() || "Unknown Country";
  return { city, country };
};

export const ModalWindow = ({ onClose, car }) => {
  if (!car) return null;

  const {
    img,
    make,
    model,
    year,
    description,
    rentalConditions = "",
    mileage,
    rentalPrice,
    address,
    id,
    type,
    fuelConsumption,
    engineSize,
    functionalities = [],
    accessories = [],
  } = car;

  const { city, country } = getCityAndCountry(address);
  const rentalConditionsArray = rentalConditions.split("\n");

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleClickOutside = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const formatCondition = (condition) => {
    const parts = condition.split(/(\d+)/);
    return (
      <>
        {parts.map((part, index) =>
          /\d+/.test(part) ? <span key={index}>{part}</span> : part
        )}
      </>
    );
  };

  return (
    <div className={s.modal} onClick={handleClickOutside}>
      <div className={s.modal_content}>
        <button className={s.close} onClick={onClose}>
          <IoCloseOutline size={24} />
        </button>
        <div className={s.img_block}>
          <img src={img} alt={`${make} ${model}`} />
        </div>
        <div className={s.title_block}>
          <h2 className={s.title}>
            {make} <span className={s.model}>{model}</span>,{" "}
            <span className={s.year}>{year}</span>
          </h2>
        </div>
        <div className={s.tag_block}>
          <ul className={s.list}>
            <li className={s.item}>{city}</li>
            <li className={s.item}>{country}</li>
            <li className={s.item}>Id: {id}</li>
            <li className={s.item}>Year: {year}</li>
            <li className={s.item}>Type: {type}</li>
          </ul>
          <ul className={s.bottom_list}>
            <li className={s.item}>Fuel Consumption: {fuelConsumption}</li>
            <li className={s.item}>Engine Size: {engineSize}</li>
          </ul>
        </div>
        <p className={s.description_text}>{description}</p>
        <div className={s.functional_block}>
          <h3 className={s.functional_title}>
            Accessories and functionalities:
          </h3>
          <div className={s.functionality}>
            <ul className={s.list}>
              {accessories.map((item, index) => {
                return (
                  <li key={index} className={s.item}>
                    {item}
                  </li>
                );
              })}
            </ul>
            <ul className={s.bottom_list}>
              {functionalities.map((item, index) => {
                return (
                  <li key={index} className={s.item}>
                    {item}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={s.rental_block}>
          <h3 className={s.rental_title}>Rental Conditions: </h3>
          <ul className={s.rental_list}>
            {rentalConditionsArray.map((condition, index) => (
              <li key={index} className={s.rental_item}>
                {formatCondition(condition)}
              </li>
            ))}
            <li className={s.rental_item}>
              Mileage: <span>{mileage}</span>
            </li>
            <li className={s.rental_item}>
              Price: <span>{moveFirstCharToEnd(rentalPrice)}</span>
            </li>
          </ul>
        </div>
        <div className={s.link_block}>
          <a href="tel:+380730000000" className={s.link}>
            Rental car
          </a>
        </div>
      </div>
    </div>
  );
};
