function sumArrays(arr) {
  if (arr.length === 0) return 0;
  const sum = arr.reduce((acc, el) => {
    const accumulator = acc;
    return accumulator + el;
  }, 0);

  return ((sum * 10) / (arr.length * 10)).toFixed(2);
}

console.log(sumArrays([2, 3, 3]));
