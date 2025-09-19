// const util = require('util');

function getMaxItems(arr, n) {
  if (n === -1) {
    arr.unshift(arr.splice(Math.abs(n)));
  } else {
    arr.unshift(arr.splice(n + 1));
  }
  return arr.flat();
}

console.log(getMaxItems([10, 20, 30, 40, 50], -3));
console.log(getMaxItems([1, 2, 3, 4, 5], 2));
console.log(getMaxItems(['a', 'b', 'c', 'd'], -1));

// 10,7,5

// console.log(
//   util.inspect(createNDimensionalArray(4, 2), {
//     depth: null,
//     maxArrayLength: null,
//   })
// );
