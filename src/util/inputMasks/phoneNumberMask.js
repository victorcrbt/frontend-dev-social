export default (value, setFunction) => {
  const regex = /(\d{0,2})(\d{0,5})(\d{0,4})/;

  const newValue = value.replace(/\D/g, '').match(regex);
  const formattedValue = !newValue[2]
    ? newValue[1]
    : `(${newValue[1]}) ${newValue[2]}${newValue[3] ? `-${newValue[3]}` : ''}`;

  if (!setFunction) return formattedValue;

  return setFunction(formattedValue);
};
