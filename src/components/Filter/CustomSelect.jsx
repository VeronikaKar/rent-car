import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { saveValue } from "../../redux/catalog/slice";
import { selectFilterValue } from "../../redux/catalog/selectors";

const selectStyles = {
  control: (provided) => ({
    ...provided,
    width: 224,
    height: 48,
    borderRadius: 14,
    border: "none",
    padding: "14px 18px",
    backgroundColor: "#f7f7fb",
  }),
  container: (provided) => ({
    ...provided,
    color: "#121417",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.11,
  }),
  valueContainer: (provided) => ({
    ...provided,
    width: 186,
    height: 18,
    padding: 0,
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  placeholder: (provided) => ({
    ...provided,
    color: "#121417",
  }),
  input: (provided) => ({
    ...provided,
    width: 186,
    height: 18,
    padding: 0,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  dropdownIndicator: (provided, state) => ({
    ...provided,
    height: 20,
    width: 20,
    position: "absolute",
    cursor: "pointer",
    top: 14,
    right: 14,
    transform: state.isFocused ? "rotate(180deg)" : "none",
  }),
  menu: (provided) => ({
    ...provided,
    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: 14,
    padding: "14px 18px",
    paddingRight: 8,
    margin: 0,
  }),
  menuList: (provided) => ({
    ...provided,
    color: "rgba(18, 20, 23, 0.2)",
    fontSize: 16,
    lineHeight: 1.25,
    display: "flex",
    flexDirection: "column",
    gap: 8,
    maxHeight: 272,
    overflowY: "auto",
    "&::-webkit-scrollbar": {
      width: 8,
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: 10,
      backgroundColor: "rgba(18, 20, 23, 0.2)",
    },
  }),
  option: (provided, state) => ({
    ...provided,
    cursor: "pointer",
    color: state.isSelected ? "#F8466D" : "#121417",
    backgroundColor: state.isFocused
      ? "rgba(248, 70, 109, 0.1)"
      : "transparent",
    borderRadius: 8,
    padding: "14px 18px",
  }),
};

const CustomSelect = ({ field, form, options, placeholder }) => {
  const dispatch = useDispatch();
  const savedValue = useSelector(selectFilterValue);

  const handleChange = (selectedOption) => {
    dispatch(saveValue(selectedOption.value));
    form.setFieldValue(field.name, selectedOption.value);
  };

  const selectedOption = options.find((option) => option.value === savedValue);

  return (
    <Select
      name={field.name}
      placeholder={placeholder}
      value={selectedOption}
      onChange={handleChange}
      options={options}
      styles={selectStyles}
    />
  );
};

export default CustomSelect;
