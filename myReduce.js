Array.prototype.myReduce = function(callback) {
    if(this.length < 1) {
        throw new Error("Array is Empty")
    }

    var a =0;                              
    for(let i=0; i<this.length; i++) {
        callback(a = a + this[i])           
    }
    return a;
}

const names = ['Adnan', 'Imran', 'Arslan'];

const statment = names.myReduce((acc, ele) => acc + ' ' + ele);
console.log(statment); // Adnan Imran Arslan
