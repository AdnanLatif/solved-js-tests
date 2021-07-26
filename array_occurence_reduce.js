const colors = ['orange','banana','orange','apple','red','blue','red','orange','red'];

const result = colors.reduce((color, index) => {
  if(color[index]) {
  	color[index] = color[index] + 1
  } else {
    color[index] = 1;
  }
  return color
}, {})

console.log('reuslt', result)