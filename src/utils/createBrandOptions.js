export const createBrandOptions = (catalog) => {
  const carModels = catalog.map((car) => car.model);

  const rawBrandOptions = catalog.map((car) => car.make);

  const brandDublicates = rawBrandOptions.filter((option, index, self) =>
    self.indexOf(option) !== index ? option : null
  );

  const uniqueBrandOptions = rawBrandOptions.map((option, index) =>
    brandDublicates.includes(option)
      ? (option = `${option} ${carModels[index]}`)
      : option
  );

  const brandOptions = uniqueBrandOptions.map((option) => {
    const index = option.indexOf(" ");
    return {
      value: option.includes(" ")
        ? option.toLowerCase().slice(0, index)
        : option.toLowerCase(),
      label: option,
    };
  });
  return brandOptions;
};
