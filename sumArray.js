const arrSum = (array) => {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      sum += arrSum(array[i]);
    } else {
      if(typeof array[i] == 'number') {
        sum += array[i]; 
      }
    }
  }
  return sum;
}
const array = [3, 5, 6, "a", 4,[7, 9, [2, "d"]], "b", "c", 10]
console.log(arrSum(array))