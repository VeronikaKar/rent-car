import { Formik, Form, Field } from "formik";
import Select from "react-select";
import s from "./Filter.module.scss";

const brandOptions = [
  { value: "Buick", label: "Buick" },
  { value: "Volvo", label: "Volvo" },
  { value: "HUMMER", label: "HUMMER" },
  { value: "Subaru", label: "Subaru" },
  { value: "Mitsubishi", label: "Mitsubishi" },
  { value: "Nissan", label: "Nissan" },
  { value: "Lincoln", label: "Lincoln" },
  { value: "GMC", label: "GMC" },
  { value: "Hyundai", label: "Hyundai" },
  { value: "MINI", label: "MINI" },
  { value: "Bentley", label: "Bentley" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Aston Martin", label: "Aston Martin" },
  { value: "Pontiac", label: "Pontiac" },
  { value: "Lamborghini", label: "Lamborghini" },
  { value: "Audi", label: "Audi" },
  { value: "BMW", label: "BMW" },
  { value: "Chevrolet", label: "Chevrolet" },
  { value: "Mercedes-Benz", label: "Mercedes-Benz" },
  { value: "Chrysler", label: "Chrysler" },
  { value: "Kia", label: "Kia" },
  { value: "Land", label: "Land" },
];

const priceOptions = [
  { value: "30", label: "$30" },
  { value: "40", label: "$40" },
  { value: "50", label: "$50" },
  { value: "60", label: "$60" },
  { value: "70", label: "$70" },
  { value: "80", label: "$80" },
  { value: "90", label: "$90" },
  { value: "100", label: "$100" },
  { value: "110", label: "$110" },
  { value: "120", label: "$120" },
  { value: "130", label: "$130" },
];

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    padding: "6px",
    borderRadius: "14px",
    backgroundColor: "#f7f7fb",
    fontSize: "18px",
    lineHeight: "111%",
    color: "#121417",
    border: state.isFocused ? "1px solid #ccc" : "1px solid transparent",
    boxShadow: state.isFocused ? "0 0 0 1px #ccc" : "none",
    "&:hover": {
      borderColor: "transparent",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px solid rgba(18, 20, 23, 0.05)",
    backgroundColor: state.isSelected ? "#f7fafc" : "white",
    color: state.isSelected ? "#121417" : "#12141733",
    padding: 8,
    cursor: "pointer",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorContainer: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  menuList: (provided) => ({
    ...provided,
    "&::-webkit-scrollbar": {
      width: "8px",
    },
    "&::-webkit-scrollbar-thumb": {
      background: "#ccc",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#f7f7fb",
    },
  }),
};

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

export const Filter = () => {
  const initialValues = {
    brand: "",
    price: "",
    min_mileage: "",
    max_mileage: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <div className={s.wrapper}>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ setFieldValue }) => (
          <Form className={s.form}>
            <label className={s.label_brand}>
              <span className={s.label_text}>Car brand</span>
              <Select
                name="brand"
                options={brandOptions}
                placeholder="Enter the text"
                styles={selectStyles}
                onChange={(option) =>
                  setFieldValue("brand", option ? option.value : "")
                }
              />
            </label>

            <label className={s.label_price}>
              <span className={s.label_text}>Price / 1 hour</span>
              <Select
                name="price"
                options={priceOptions}
                placeholder="To $"
                styles={selectStyles}
                onChange={(option) =>
                  setFieldValue("price", option ? option.value : "")
                }
              />
            </label>

            <div className={s.block_mileage}>
              <label className={s.label}>
                <span className={s.label_text}>Сar mileage / km</span>
                <Field
                  name="min_mileage"
                  className={s.input_mileage_left}
                  placeholder="From"
                />
              </label>
              <label className={s.label}>
                <Field
                  name="max_mileage"
                  className={s.input_mileage_right}
                  placeholder="To"
                />
              </label>
            </div>

            <Button text="Search" className={s.search_btn} width={136} height={48} padding={14} />
          </Form>
        )}
      </Formik>
    </div>
  );
};
