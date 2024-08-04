export const selectStyles = {
  control: (baseStyles) => ({
    ...baseStyles, // Use baseStyles here
    width: 224,
    height: 48,
    borderRadius: 14,
    border: "none",
    padding: "14px 18px",
    backgroundColor: "#f7f7fb",
  }),
  container: (baseStyles) => ({
    ...baseStyles,
    color: "#121417",
    fontWeight: 500,
    fontSize: 18,
    lineHeight: 1.11,
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles, // Use baseStyles here
    width: 186,
    height: 18,
    padding: 0,
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles, // Use baseStyles here
    color: "#121417",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles, // Use baseStyles here
    color: "#121417",
  }),
  input: (baseStyles) => ({
    ...baseStyles, // Use baseStyles here
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
  dropdownIndicator: (baseStyles, state) => ({
    ...baseStyles, // Use baseStyles here
    height: 20,
    width: 20,
    position: "absolute",
    cursor: "pointer",
    top: 14,
    right: 14,
    transform: state.isFocused ? "rotate(180deg)" : null,
  }),
  menu: (baseStyles) => ({
    ...baseStyles, // Use baseStyles here
    border: "1px solid rgba(18, 20, 23, 0.05)",
    borderRadius: 14,
    padding: "14px 18px",
    paddingRight: 8,
    margin: 0,
  }),
  menuList: (baseStyles) => ({
    ...baseStyles, // Use baseStyles here
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
      height: 130,
      borderRadius: 10,
      cursor: "pointer",
      backgroundColor: "rgba(18, 20, 23, 0.05)",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "rgba(18, 20, 23, 0.07)",
    },
  }),
  option: (baseStyles, state) => ({
    ...baseStyles, // Use baseStyles here
    padding: 0,
    cursor: "pointer",
    color: state.isSelected ? "#121417" : "rgba(18, 20, 23, 0.2)",
    "&:hover": {
      color: state.isSelected ? "#121417" : "rgba(18, 20, 23, 0.4)",
    },
  }),
};
