Array.prototype.unique = function() {

    let res = [ this[0] ];
    
    for( let i =1; i< this.length ; i++ ) {
        if( this[i] !== res[ res.length -1 ]) {
            res.push( this[i] );
        }
    }

    return res;
}

let arr = [11,12,13,14,12,22,18,15,18,13,14,16,19];

let out = arr.unique();
console.log( out );