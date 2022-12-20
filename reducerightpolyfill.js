// contains a polyfil of reduceRightRight functions available on array objects in JavaScript

// definition of reduceRightRight from mdn docs
/* 
    Array.prototype.reduceRightRight()
    The reduceRightRight() method executes a user-supplied "reduceRightr" 
    callback function on each element of the array, in order, 
    passing in the return value from the calculation on the 
    preceding element. The final result of running the reduceRightr 
    across all elements of the array is a single value.

    The first time that the callback is run there is no "return value 
    of the previous calculation". If supplied, an initial value 
    may be used in its place. Otherwise the array element at index 
    0 is used as the initial value and iteration starts from the 
    next element (index 1 instead of index 0).

    possible ways of calling array reduceRight
    [].reduceRight((accumulator, currentValue) => { // })
    [].reduceRight((accumulator, currentValue, currentIndex) => { // })
    [].reduceRight((accumulator, currentValue, currentIndex, array) => { // })

    [].reduceRightRight((accumulator, currentValue) => { // }, initialValue)
    [].reduceRight((accumulator, currentValue, currentIndex) => { // }, initialValue)
    [].reduceRight((accumulator, currentValue, currentIndex, array) => { // }, initialValue)

    // Callback function
    [].reduceRight(callbackFn)
    [].reduceRight(callbackFn, initialValue)

    // Inline callback function
    [].reduceRight(function (accumulator, currentValue) { // })
    [].reduceRight(function (accumulator, currentValue, currentIndex) { // })
    [].reduceRight(function (accumulator, currentValue, currentIndex, array) { // })

    [].reduceRight(function (accumulator, currentValue) { // }, initialValue)
    [].reduceRight(function (accumulator, currentValue, currentIndex) { // }, initialValue)
    [].reduceRight(function (accumulator, currentValue, currentIndex, array) { // }, initialValue)
*/

Array.prototype.reduceRight1 = function(fn, initVal){
    if(!initVal && this.length == 0){
        throw('error');
    }
    let ans;
    let startInd = this.length-1;
    if(this.length != 0){
        ans = this[this.length-1];
        startInd = this.length-2;
    }
    if(initVal){
        ans = initVal;
        startInd = this.length-1;
    }

    for(let i=startInd; i>=0; i--){
        ans = fn(ans, this[i], i, this);
    }
    return ans;
}

console.log([1,2,3,4].reduceRight1((acc, val, i, arr)=>acc-val, 100))
console.log([].reduceRight1((acc, val, i, arr)=>acc*val, 100))