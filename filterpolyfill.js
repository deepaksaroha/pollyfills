// contains a filter of every functions available on array objects in JavaScript

// definition of filter from mdn docs
/* 
    The filter() method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given
    array that pass the test implemented by the provided function.
    
    possible ways of calling array filter

    // Arrow function
    [].filter((element) => { // })
    [].filter((element, index) => { // })
    [].filter((element, index, array) => { // })
    
    // Callback function
    [].filter(callbackFn)
    [].filter(callbackFn, thisArg)
    
    // Inline callback function
    [].filter(function (element) { // })
    [].filter(function (element, index) { // })
    [].filter(function (element, index, array) { // })
    [].filter(function (element, index, array) { // }, thisArg)
*/

Array.prototype.filter1 = function(fn, thisArg){
    if(!fn){
        throw ('error')
    }
    
    const ansArr = [];

    for(let i=0; i<this.length; i++){
        if(fn.call(thisArg, this[i], i, this)){
            ansArr.push(this[i]);
        }
    }
    return ansArr;
}

console.log([1, 2].filter1((x, i, arr)=>x > 1))
console.log([1,2,3,4].filter1((x, i)=>x % 2 == 0))