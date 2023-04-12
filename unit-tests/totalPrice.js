const totalPrice = order.reduce((sum, el) => {
  let currencyCoeff = 6;
  return sum + currencyCoeff * el.price * el.quantity;
}, 0);