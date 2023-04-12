const brandsImages = require('./brandsImages')

test('brandsImages should return the images of every brand', () => {
  expect(brandsImages).not.toBeNull();
})