import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";

import CustomSelect from "../CustomSelect/CustomSelect";

import { initialValues } from "../../data/initialValues";
import { selectRefCatalog } from "../../redux/catalog/selectors.js";
import { createPriceOptions } from "../../utils/createPriceOptions.js";
import { createBrandOptions } from "../../utils/createBrandOptions.js";
import { fetchCarsByQueryThunk } from "../../redux/catalog/operations.js";

import css from "./SearchForm.module.scss";

const SearchForm = () => {
  const refCatalog = useSelector(selectRefCatalog);
  const dispatch = useDispatch();

  const handleSubmit = (values) => {
    dispatch(fetchCarsByQueryThunk(values));
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {() => (
          <Form className={css.form}>
            <label className={css.label}>
              Car brand
              <Field
                name="make"
                component={CustomSelect}
                options={createBrandOptions(refCatalog)}
                placeholder="Enter the text"
              />
            </label>
            <label className={css.label}>
              Price / 1 hour
              <Field
                name="rentalPrice"
                component={CustomSelect}
                options={createPriceOptions(refCatalog)}
                placeholder="To $"
              />
            </label>

            <label className={css.label}>
              Car mileage / km
              <div className={css.input_wrapper}>
                <Field
                  className={css.input}
                  type="number"
                  name="from"
                  placeholder="From"
                />
                <Field
                  className={css.input}
                  type="number"
                  name="to"
                  placeholder="To"
                />
              </div>
            </label>
            <ErrorMessage name="from" component="span" />
            <ErrorMessage name="to" component="span" />
            <button className={css.button} type="submit">
              Search
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default SearchForm;
