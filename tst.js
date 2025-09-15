function distinct(arr) {
  const set = new Set();

  arr.forEach((el) => set.add(el));

  return Array.from(set);
}

console.log(distinct([1, 2, 3, 3, 2, 1]));
