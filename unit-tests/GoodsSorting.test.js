const GoodsSorting = require('./GoodsSorting')

const goodsList = new GoodsSorting()
let event = new Event('change')


test('GoodsSorting: handleChange should return the existing value from select', () => {
  expect(goodsList.handleChange(event)).toBeTruthy()
})


