// const util = require('util');

function createChunks(arr, chunkSize) {
  if (chunkSize === 1) {
    return arr.map((el) => [el]);
  }

  const numberOfChunks = Math.trunc(arr.length / chunkSize);

  const newArr = Array.from({ length: numberOfChunks + 1 }, () => {
    return Array.from({ length: chunkSize }, () => arr.shift());
  });

  const lastChunk = newArr.at(-1).filter((el) => el);
  newArr.pop();
  newArr.push(lastChunk);

  return newArr;
}

console.log(createChunks([1, 2, 3, 4, 5, 6, 7], 1));

// console.log(
//   util.inspect(createNDimensionalArray(4, 2), {
//     depth: null,
//     maxArrayLength: null,
//   })
// );
