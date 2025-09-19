// const util = require('util');

function getMaxItems(arr) {
  const sequences = [];

  sequences.push(
    arr.reduce((acc, el, ind) => {
      if (ind === 0) {
        acc.push(el);
        return acc;
      }
      if (acc.at(-1) < el) {
        acc.push(el);
        return acc;
      }
      sequences.push(acc.slice());
      acc.length = 0;
      acc.push(el);

      return acc;
    }, [])
  );

  return sequences.reduce((acc, el) => {
    if (acc.length < el.length) return el;
    return acc;
  });
}

console.log(getMaxItems([10, 22, 9, 33, 21, 50, 41, 60, 80]));

// 41,60,80

// console.log(
//   util.inspect(createNDimensionalArray(4, 2), {
//     depth: null,
//     maxArrayLength: null,
//   })
// );
