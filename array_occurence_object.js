const a = ['orange','banana','orange','apple','red','blue','red','orange','red']

function count_duplicate(a){
 let counts = {}

 for(let i =0; i < a.length; i++){ 
     if (counts[a[i]]){
     counts[a[i]] += 1
     } else {
     counts[a[i]] = 1
     }
    }  
  console.log(counts)
}

count_duplicate(a)