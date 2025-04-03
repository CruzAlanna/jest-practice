function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

// console.log(add(3, 2));
// console.log(subtract(5, 3));

module.exports = { add, subtract, multiply };

// module.exports = {
//   add: add,
//   subtract: subtract
// };

//short-hand example
// const person = {
//   name: "Damen",
//   age: 20,
//   village: "yigo"
// }

// const { name, age } = person;

// console.log(name);
// console.log(age);