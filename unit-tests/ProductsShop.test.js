const ProductsShop = require('./ProductsShop')

const someShop = new ProductsShop()

test('ProductsShop: showProduct should be defined for getting information about every product from shop', () => {
  expect(someShop.showProduct).toBeDefined()
})