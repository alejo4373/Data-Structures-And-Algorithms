const DynamicArray = require('./dynamicArray');

it('creates an empty array with allocated space 10', () => {
  let testArray = new DynamicArray(10);
  expect(testArray.limit).toBe(10)
  expect(testArray.length).toBe(0)
})

it('has resize, insert, index, delete methods', () => {
  let testArray = new DynamicArray(10);
  expect(testArray).toHaveProperty('resize');
  expect(testArray).toHaveProperty('insert');
  expect(testArray).toHaveProperty('index');
  expect(testArray).toHaveProperty('delete');
})

it('fill in the array with limit + 1 values see if it resizes correctly', () => {
  let myArray = new DynamicArray(10);
  for (var n = 0; n <= 11; n++) {
    myArray.insert(n)
  }
  console.log(myArray);   
})