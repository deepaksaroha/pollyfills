// contains a polyfil of reduce functions available on array objects in JavaScript

// definition of reduce from mdn docs
/* 
    Array.prototype.reduce()
    The reduce() method executes a user-supplied "reducer" 
    callback function on each element of the array, in order, 
    passing in the return value from the calculation on the 
    preceding element. The final result of running the reducer 
    across all elements of the array is a single value.

    The first time that the callback is run there is no "return value 
    of the previous calculation". If supplied, an initial value 
    may be used in its place. Otherwise the array element at index 
    0 is used as the initial value and iteration starts from the 
    next element (index 1 instead of index 0).

    possible ways of calling array reduce
    [].reduce((accumulator, currentValue) => { // })
    [].reduce((accumulator, currentValue, currentIndex) => { // })
    [].reduce((accumulator, currentValue, currentIndex, array) => { // })

    [].reduce((accumulator, currentValue) => { // }, initialValue)
    [].reduce((accumulator, currentValue, currentIndex) => { // }, initialValue)
    [].reduce((accumulator, currentValue, currentIndex, array) => { // }, initialValue)

    // Callback function
    [].reduce(callbackFn)
    [].reduce(callbackFn, initialValue)

    // Inline callback function
    [].reduce(function (accumulator, currentValue) { // })
    [].reduce(function (accumulator, currentValue, currentIndex) { // })
    [].reduce(function (accumulator, currentValue, currentIndex, array) { // })

    [].reduce(function (accumulator, currentValue) { // }, initialValue)
    [].reduce(function (accumulator, currentValue, currentIndex) { // }, initialValue)
    [].reduce(function (accumulator, currentValue, currentIndex, array) { // }, initialValue)
*/

Array.prototype.reduce1 = function(fn, initVal){
    if(!initVal && this.length == 0){
        throw('error');
    }
    let ans;
    let startInd = 0;
    if(this.length != 0){
        ans = this[0];
        startInd = 1;
    }
    if(initVal){
        ans = initVal;
        startInd = 0;
    }

    for(let i=startInd; i<this.length; i++){
        ans = fn(ans, this[i], i, this);
    }
    return ans;
}

console.log([1,2,3,4].reduce1((acc, val, i, arr)=>acc*val))
console.log([].reduce1((acc, val, i, arr)=>acc*val))