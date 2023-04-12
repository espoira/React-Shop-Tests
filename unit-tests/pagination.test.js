const pagination = require('./pagination')


test('pagination should return array of links with pages numbers in products list', () => {
  expect(pagination).toContain({<a id={`link-1`} className="pageNumber"> 1 </a>})
})
