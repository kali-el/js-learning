let strings = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index);
  // return [...new Set(arr)];
}

console.log(unique(strings))
