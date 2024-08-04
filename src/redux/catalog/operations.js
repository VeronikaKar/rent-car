import axios from "axios";
import { fetchDataSuccess, isError, isLoading } from "./slice";

axios.defaults.baseURL = "https://667d5847297972455f64b57d.mockapi.io/v1/";

export const fetchCarsThunk = () => async (dispatch) => {
  try {
    dispatch(isLoading(true));
    dispatch(isError(false));
    const { data } = await axios.get("/adverts");

    const processedData = data.map((car) => ({
      ...car,
      id: String(car.id),
    }));

    dispatch(fetchDataSuccess(processedData));
  } catch (error) {
    console.log(error);
    dispatch(isError(true));
  } finally {
    dispatch(isLoading(false));
  }
};
