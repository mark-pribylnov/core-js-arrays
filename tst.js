// const util = require('util');

function getMaxItems(arr) {
  let middleIndex = null;

  switch (arr.length) {
    case 0:
      return arr;
    case 1:
      return arr;
    case 2:
      arr.push(arr.shift());
      return arr;
    default:
      break;
  }

  if (!arr.length % 2) {
    middleIndex = Math.trunc(arr.length / 2);
    const tail = arr.splice(middleIndex + 1, middleIndex);
    const head = arr.splice(0, middleIndex);

    arr.unshift(tail);
    arr.push(head);

    return arr.flat();
  }
  middleIndex = Math.trunc(arr.length / 2);
  // console.log(arr[middleIndex]);

  const tail =
    arr.length === 4 ? arr.splice(middleIndex) : arr.splice(middleIndex + 1);
  const head = arr.splice(0, middleIndex);

  console.log(tail);
  console.log(head);

  arr.unshift(tail);
  arr.push(head);

  return arr.flat();
}

console.log(getMaxItems([1, 2, 3, 4]));

// 41,60,80

// console.log(
//   util.inspect(createNDimensionalArray(4, 2), {
//     depth: null,
//     maxArrayLength: null,
//   })
// );
