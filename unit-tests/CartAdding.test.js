const CartAdding = require('./CartAdding')

const cart = new CartAdding()

const product = { 
  "id": 0,
  "brand": "VERNEL",
  "price": 298,
  "category": "Бытовая химия",
  "quantity": 1,
}


test('CartAdding: addToCart should return the new state of cart with added product item', () => {
  expect(cart.addToCart(product)).toContain(product)
})