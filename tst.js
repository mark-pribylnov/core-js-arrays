function sumArrays(arr1, arr2) {
  let longArr = arr1;
  let shortArr = arr2;

  if (arr1.length === arr2.length) {
    const arr = Array.from({ length: arr1.length }, (el, index) => {
      return arr1[index] + arr2[index];
    });

    return arr;
  }

  longArr = arr1.length > arr2.length ? arr1 : arr2;
  shortArr = arr1.length < arr2.length ? arr1 : arr2;

  const arr = Array.from({ length: longArr.length }, (el, index) => {
    if (Number.isInteger(longArr[index]) && Number.isInteger(shortArr[index])) {
      return longArr[index] + shortArr[index];
    }
    return longArr[index];
  });

  return arr;
}

console.log(sumArrays([10, 20, 30], [5, 10, 15]));
