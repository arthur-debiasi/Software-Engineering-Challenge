const formatValues = (value) => value
  .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 });

export default formatValues;
