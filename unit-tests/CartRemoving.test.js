const CartRemoving = require('./CartRemoving')

const cart = new CartRemoving()

const cart.order = [
    { "id": 0,
      "brand": "VERNEL",
      "price": 298,
      "category": "Бытовая химия",
      "quantity": 2,
    },
    { "id": 1,
      "brand": "PERSIL",
      "price": 979,
      "category": "Бытовая химия"
      "quantity": 1,
    },
]

test('CartRemoving: removeFromCart should return the amount of goods in the cart after item removing', () => {
  expect(cart.removeFromCart(0)).toBe(1)
})