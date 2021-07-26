Array.prototype.myFilter = function(callback) {
    const filterArr = [];
    for(let index = 0; index<this.length; index++) {
        if(!!callback(this[index], index, this)) {
            filterArr.push(this[index]);
        }
    }
    return filterArr;
}

const filterNames = names.myFilter(name => name !== 'Adnan');
console.log(filterNames) // [ 'Imran', 'Arslan' ]