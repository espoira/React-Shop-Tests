const CartAmounts = require('./CartAmounts')

const cart = new CartAmounts()

const cart.order = [
    { "id": 0,
      "brand": "VERNEL",
      "price": 298,
      "category": "Бытовая химия",
    },
    { "id": 1,
      "brand": "PERSIL",
      "price": 979,
      "category": "Бытовая химия"
      "quantity": 1,
    },
]

test('CartAmounts: incQuantity should return the current item of cart with adding amount', () => {
  expect(cart.incQuantity(cart.order[0].id)).toEqual({"id": 0, "brand": "VERNEL", "price": 298, "category": "Бытовая химия", "quantity": 1})
  expect(cart.incQuantity(cart.order[1].id)).toEqual({"id": 1, "brand": "PERSIL", "price": 979, "category": "Бытовая химия", "quantity": 2})
})