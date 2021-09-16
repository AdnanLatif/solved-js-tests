const timesFunc = (repeatTimes, repeatItem, repeated) => {
      if(repeatTimes <= 0) {
          return repeated
      }
          repeated.push(repeatItem)
          return timesFunc(repeatTimes - 1, repeatItem, repeated)
  }
  
  console.log(timesFunc(3, 3, []))
