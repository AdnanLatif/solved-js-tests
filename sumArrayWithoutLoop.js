const countArray = (array, index = 0) => {
  let sum = 0;
  if (index >= array.length) {
    return 0;
  }
  
  if (typeof array[index] === 'number') {
    sum += array[index];
  }

  if (Array.isArray(array[index])) {
    sum += countArray(array[index]);
  }
  
  sum += countArray(array, index + 1);
  
  return sum;
}
  
  console.log(countArray(['x', 3, 5, 6, "a", 4, [7, 9, [2, "d"]], "b", "c", 10]))