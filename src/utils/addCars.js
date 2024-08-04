import axios from "axios";

import cars from "../assets/adsCars.json";

export const addCars = () => {
  cars.forEach((car) =>
    axios.post("https://667d5847297972455f64b57d.mockapi.io/v1/adverts", car)
  );
};
