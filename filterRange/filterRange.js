// Two ways of doing the same thing

function filterRange(arr, a, b) {
  return arr.filter((num) => num >= a && num <= b);
}

const filterRange = (arr, a, b) => arr.filter((num) => num >= a && num <= b);
