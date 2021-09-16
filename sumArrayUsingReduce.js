const countArray = (array) => 
  array.reduce((acc, curr) =>
   acc + (Array.isArray(curr) ? countArray(curr) : typeof curr == 'number' ? curr: 0), 0)

const array = [3, 5, 6, "a", 4,[7, 9, [2, "d"]], "b", "c", 10]

console.log(countArray(array))