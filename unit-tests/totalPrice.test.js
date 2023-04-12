const totalPrice = require('./totalPrice')

const order = [
    { "name": "Кондиционер для белья VERNEL Свежий бриз",
      "id": 1002,
      "brand": "VERNEL",
      "price": 298,
      "category": "Бытовая химия",
      "quantity": 2,
    },
    { "name": "Гель для стирки белого белья PERSIL Свежесть от Vernel",
      "id": 1003,
      "brand": "PERSIL",
      "price": 979,
      "category": "Бытовая химия"
      "quantity": 1,
    },
]

test('totalPrice should return the price of all order with the certain currency coefficient', () => {
  expect(totalPrice).toBe(9450)
})

