// const util = require('util');

function createChunks(numbers) {
  return numbers
    .map((el, ind) => {
      if (el % 2 || el === 1) {
        return ind;
      }
      return null;
    })
    .filter((el) => el);
}

console.log(createChunks([1, 2, 3, 4, 5]));

// console.log(
//   util.inspect(createNDimensionalArray(4, 2), {
//     depth: null,
//     maxArrayLength: null,
//   })
// );
