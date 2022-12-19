// contains a polyfil of concat functions available on array objects in JavaScript

// definition of concat from mdn docs
/* 
    The concat() method is used to merge two or more arrays. This method does not 
    change the existing arrays, but instead returns a new array.

    possible ways of calling array concat
    [].concat()
    [].concat(value0)
    [].concat(value0, value1)
    [].concat(value0, value1, // valueN)
*/

Array.prototype.concat1 = function(...rest){
    const ansArr = [];
    for(let i=0; i<this.length; i++){
        ansArr.push(this[i]);
    }
    for(let i=0; i<rest.length; i++){
        if(Array.isArray(rest[i])){
            for(let j=0; j<rest[i].length; j++){
                ansArr.push(rest[i][j]);
            }
        }else{
            ansArr.push(rest[i]);
        }
    }
    return ansArr;
}

console.log([1,2,3,4].concat1())
console.log([1, 2].concat1([1, 2, [3, 4]], 5, 6))