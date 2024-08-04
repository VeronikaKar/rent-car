import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";

import { saveValue } from "../../redux/catalog/slice.js";
import { selectValue } from "../../redux/catalog/selectors.js";
import { selectStyles } from "../../data/selectStyles";

const CustomSelect = ({ field, form, options, placeholder }) => {
  const dispatch = useDispatch();
  const savedValue = useSelector(selectValue);

  const handleChange = (selectedOption) => {
    dispatch(saveValue(selectedOption.value));
    form.setFieldValue(field.name, selectedOption.value);
  };

  const selectedOption = options.find((option) => option.value === savedValue);

  return (
    <>
      <Select
        name={field.name}
        placeholder={placeholder}
        value={selectedOption}
        onChange={handleChange}
        options={options}
        styles={selectStyles}
      />
    </>
  );
};

export default CustomSelect;
