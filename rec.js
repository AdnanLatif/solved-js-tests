
const timesFunc = (repeatTimes, repeatItem, repeated) => {
      if(repeatTimes === 0) {
          return repeated
      }
      if(repeatTimes < 0) {
          return []
      } 
          repeated.push(repeatItem)
          return timesFunc(repeatTimes - 1, repeatItem)
  }
  
  console.log(timesFunc(3, 3, []))
  
