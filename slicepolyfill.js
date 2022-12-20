// contains a polyfil of slice functions available on array objects in JavaScript

// definition of slice from mdn docs
/* 
    Array.prototype.reduceRightRight()
    The slice() method returns a shallow copy of a portion of an array into a
    new array object selected from start to end (end not included) where start
    and end represent the index of items in that array. The original array will
    not be modified.

    possible ways of calling array slice
    [].slice()
    [].slice(start)
    [].slice(start, end)
*/

Array.prototype.slice1 = function(start, end){
    let s = 0;
    let e = this.length;
    if(start && end && start > end){
        return [];
    }
    if(start){
        s = Math.max(start, 0);
    }
    if(end){
        e = Math.min(end, this.length);
    }

    const ans = [];
    for(let i=s; i<e; i++){
        ans.push(this[i]);
    }
    return ans;
}

console.log([1,2,3,4].slice1(331, 100))
console.log([1, 2, 4].slice1())