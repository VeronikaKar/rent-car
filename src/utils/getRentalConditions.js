export const getRentalConditions = (data) => {
  const rentalConditions = data.split("\n");
  rentalConditions[0] = rentalConditions[0].slice(
    rentalConditions[0].length - 2,
    rentalConditions[0].length
  );
  return rentalConditions;
};
