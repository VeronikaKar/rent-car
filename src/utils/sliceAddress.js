export const sliceCity = (address) => {
  const firstSeparator = address.indexOf(",");
  const slicedAddress = address.slice(firstSeparator + 2, address.length);
  const secondSeparator = slicedAddress.indexOf(",");
  const slicedCity = slicedAddress.slice(0, secondSeparator);
  return slicedCity;
};

export const sliceCountry = (address) => {
  const firstSeparator = address.indexOf(",");
  const slicedAddress = address.slice(firstSeparator + 2, address.length);
  const secondSeparator = slicedAddress.indexOf(",");
  const slicedCountry = slicedAddress.slice(
    secondSeparator + 2,
    slicedAddress.length
  );
  return slicedCountry;
};
