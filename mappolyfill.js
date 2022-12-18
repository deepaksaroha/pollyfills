// contains a polyfil of map functions available on array objects in JavaScript

// definition of map from mdn docs
/* 
    Array.prototype.map()
    The map() method creates a new array populated with 
    the results of calling a provided function on every 
    element in the calling array.

    possible ways of calling array map
    [].map((val)=>{ // })
    [].map((val, i)=>{ // })
    [].map((val, i, arr)=>{ // })

    [].map(callback)
    [].map(callback, thisArg)
    
    [].map(function (element) { // })
    [].map(function (element, index) { // })
    [].map(function (element, index, array) { // })
    [].map(function (element, index, array) { // }, thisArg)
*/

Array.prototype.map1 = function(fn){
    const ansArr = [];
    for(let i=0; i<this.length; i++){
        ansArr.push(fn(this[i], i, this));
    }
    return ansArr;
}

console.log([1,2].map1(x=>x))