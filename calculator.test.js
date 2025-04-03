const { add, subtract, multiply } = require('./calculator');

// three lines below are doing what line one is doing in one line (short-hand)
// const calculator = require('./calculator');
// const add = calculator.add;
// const subtract = calculator.subtract;

test('adds 2 + 3 which equals 5', () => {
  expect(add(2, 3)).toBe(5);
})

test('subtracts 5 + 3 which equals 2', () => {
  expect(subtract(5, 3)).toBe(2);
})

test('mutiplies 2 * 2 which equals 4', () => {
  expect(multiply(2, 2)).toBe(4);
})

test('multiplies 3 * 5 which equals 15', () => {
  expect(multiply(3, 5)).toBe(15);
})

// when running tests in the terminal use: [npm test] command