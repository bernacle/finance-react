const formatValue = (value: number): string =>
  `R$ ${Intl.NumberFormat('pt-BR', { currency: 'BRL' }).format(value)},00`;

export default formatValue;
