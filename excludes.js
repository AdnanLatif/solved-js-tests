let items = [
  {color: 'red', type: 'tv', age: 18},
  {color: 'silver', type: 'phone', age: 20},
  {color: 'blue', type: 'phone', age: 20},
  {color: 'green', type: 'phone', age: 20}
];

let excludes = [
  {k: 'color', v: 'silver'},
  {k: 'type', v: 'tv'},
];


console.log( 
  items.filter((item)=>{
    for(let i =0 ; i < excludes.length; i++){
      if( item[excludes[i].k] === excludes[i].v ){
        return false;
      }
    }
    return true;
  })
);