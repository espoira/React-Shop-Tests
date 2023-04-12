const arrayPushing = require('./arrayPushing')

let types = ['Уход за лицом', 'Уход за руками']

let items = [
    { "id": 1,
      "target": "Уход за телом",
    },
    { "id": 2,
      "target": "Уход за лицом",
    },
]

test('arrayPushing should return the array with unique value of type(target) for each category', () => {
  expect(arrayPushing(types, items[0].target)).toEqual(['Уход за лицом', 'Уход за руками', "Уход за телом"])
  expect(arrayPushing(types, items[1].target)).toEqual(['Уход за лицом', 'Уход за руками'])
})