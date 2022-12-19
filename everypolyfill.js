// contains a polyfil of every functions available on array objects in JavaScript

// definition of every from mdn docs
/* 
    The every() method tests whether all elements in the array 
    pass the test implemented by the provided function. It returns 
    a Boolean value.
    
    possible ways of calling array map

    // Arrow function
    [].every((element) => { // })
    [].every((element, index) => { // })
    [].every((element, index, array) => { // })

    // Callback function
    [].every(callbackFn)
    [].every(callbackFn, thisArg)

    // Inline callback function
    [].every(function (element) { // })
    [].every(function (element, index) { // })
    [].every(function (element, index, array) { // })
    [].every(function (element, index, array) { // }, thisArg)

*/

Array.prototype.every1 = function(fn, thisArg){
    if(!fn){
        throw ('error')
    }
    for(let i=0; i<this.length; i++){
        if(!fn.call(thisArg, this[i], i, this)){
            return false;
        }
    }
    return true;
}

console.log([1, 2].every1((x, i, arr)=>x * arr[i] > 0))
console.log([1,2,3,4].every1())