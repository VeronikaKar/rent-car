import Modal from "react-modal";
import { IoClose } from "react-icons/io5";
import { useSelector } from "react-redux";

import Loader from "../Loader/Loader";

import { useModal } from "../../hooks/useModal";
import { customStyles } from "../../data/modalStyles";
import { getRentalConditions } from "../../utils/getRentalConditions";
import { sliceCity, sliceCountry } from "../../utils/sliceAddress";
import { selectCar, selectIsLoading } from "../../redux/catalog/selectors.js";

import css from "./CardModal.module.scss";

Modal.setAppElement("#root");

const CardModal = () => {
  const car = useSelector(selectCar);
  const isLoading = useSelector(selectIsLoading);
  const { modalIsOpen, closeModal } = useModal();

  const {
    img,
    id,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    accessories,
    photoLink,
    description,
    functionalities,
    mileage,
    rentalConditions,
    engineSize,
    fuelConsumption,
  } = car;

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && (
        <Modal
          className={css.modal}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <IoClose className={css.icon} onClick={closeModal} size={24} />
          <div className={css.thumb}>
            <img src={photoLink || img} alt={`${make} ${model}`} />
          </div>
          <div className={css.content_wrapper}>
            <div>
              <div className={css.title_wrapper}>
                <h3 className={css.title}>
                  {make} <span className={css.accent}>{model}</span>, {year}
                </h3>
              </div>
              <ul className={css.list}>
                <li className={css.item}>{sliceCity(address)}</li>
                <li className={css.item}>{sliceCountry(address)}</li>
                <li className={css.item}>Id: {id}</li>
                <li className={css.item}>Year: {year}</li>
                <li className={css.item}>Type: {type}</li>
                <li className={css.item}>
                  Fuel Consumption: {fuelConsumption}
                </li>
                <li className={css.item}>Engine Size: {engineSize}</li>
              </ul>
              <p className={css.description}>{description}</p>
            </div>
            <div>
              <h4 className={css.sub_heading}>
                Accessories and functionalities:
              </h4>
              <ul className={css.accessories_list}>
                <li className={css.item}>{accessories[0]}</li>
                <li className={css.item}>{accessories[1]}</li>
                <li className={css.item}>{functionalities[0]}</li>
                <li className={css.item}>{accessories[2]}</li>
                <li className={css.item}>{functionalities[1]}</li>
                <li className={css.item}>{functionalities[2]}</li>
              </ul>
            </div>
            <div>
              <h4 className={css.sub_heading}>Rental Conditions:</h4>
              <ul className={css.conditions_list}>
                <li className={css.conditions_item}>
                  Minimum age :{" "}
                  <span className={css.tag_accent}>
                    {getRentalConditions(rentalConditions)[0]}
                  </span>
                </li>
                <li className={css.conditions_item}>
                  {getRentalConditions(rentalConditions)[1]}
                </li>
                <li className={css.conditions_item}>
                  {getRentalConditions(rentalConditions)[2]}
                </li>
                <li className={css.conditions_item}>
                  Mileage:{" "}
                  <span className={css.tag_accent}>
                    {mileage.toLocaleString()}
                  </span>
                </li>
                <li className={css.conditions_item}>
                  Price:{" "}
                  <span className={css.tag_accent}>
                    {`${rentalPrice.slice(1, rentalPrice.length)}$`}
                  </span>
                </li>
              </ul>
            </div>
            <a
              className={css.button}
              onClick={() => null}
              href="tel:+380730000000"
            >
              Rental car
            </a>
          </div>
        </Modal>
      )}
    </>
  );
};

export default CardModal;
