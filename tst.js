function calculateBalance(arr) {
  return arr
    .map((innerArr) => {
      return innerArr.reduce((accInner, amount) => {
        return accInner - amount;
      });
    })
    .reduce((accFinal, el) => accFinal + el);
}
console.log(
  calculateBalance([
    [10, 8],
    [5, 1],
  ])
);

// 6

// function sumArrays(n, size) {
//   const arr = [];
//   let depth = 1;

//   (function dig() {
//     if (depth === n) return;

//     if (arr.length === 0) {
//       arr.push([]);
//       depth += 1;
//       console.log(arr, depth);
//     } else {
//       // console.log(arr);
//       arr[depth - 2].push([]);
//       depth += 1;
//     }

//     dig();
//   })();
// }
