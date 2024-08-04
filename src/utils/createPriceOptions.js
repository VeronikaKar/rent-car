export const createPriceOptions = (catalog) => {
  const rawPriceOptions = catalog.map((car) =>
    car.rentalPrice.slice(1, car.rentalPrice.length)
  );

  const filteredPriceOptions = rawPriceOptions.filter(
    (item, index, self) => self.indexOf(item) === index
  );
  const sortedPriceOptions = filteredPriceOptions.toSorted((a, b) => a - b);

  const priceOptions = sortedPriceOptions.map((option) => {
    return {
      value: option,
      label: option,
    };
  });
  return priceOptions;
};
