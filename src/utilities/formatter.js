const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

export const format = (number) => {
  return formatter.format(number);
};
