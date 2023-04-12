const HyperShop = require('./showCategory')

const shop = new HyperShop()

test('HyperShop: showCategory should return the certain category of products from shop', () => {
  expect(shop.showCategory('Товары для дома')).not.toBeFalsy()
})

