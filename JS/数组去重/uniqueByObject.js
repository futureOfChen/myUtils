let obj = {};
let arr = [1,2,4,1,3,2,8,8,9];

arr.forEach( (item) => {
    if( !obj[item] ) {
        obj[item] = true;
    }
} ) 

let  res = Object.keys( obj );

console.log( res )