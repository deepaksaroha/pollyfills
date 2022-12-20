// contains a polyfil of splice functions available on array objects in JavaScript

// definition of splice from mdn docs
/* 
    Array.prototype.reduceRightRight()
    The splice() method changes the contents of an array by removing or replacing 
    existing elements and/or adding new elements in place. To access part 
    of an array without modifying it, see splice().

    possible ways of calling array splice
    [].splice(start)
    [].splice(start, deleteCount)
    [].splice(start, deleteCount, item1)
    [].splice(start, deleteCount, item1, item2, itemN)
*/

Array.prototype.splice1 = function(start, no, ...rest){
    let s = 0;
    let e = this.length;
    if(start && no && no < 0){
        return [];
    }
    if(start){
        s = Math.max(start, 0);
    }
    if(no >= 0){
        e = Math.min(s+no, this.length);
    }

    const ab = [];
    const am = [];
    const aa = [];

    for(let i=0; i<this.length; i++){
        if(i < s){
            ab.push(this[i]);
        }
        if(i >= s && i < e){
            am.push(this[i]);
        }
        if(i>=e){
            aa.push(this[i]);
        }
    }
    for(let i=this.length-1; i>=s; i--){
        this.pop();
    }
    for(let i=0; i<rest.length; i++){
        this.push(rest[i]);
    }
    for(let i=0; i<aa.length; i++){
        this.push(aa[i]);
    }

    return am;
}

const arr = [1,2,3,4,5,6]; 
// call custom splice() on array to add elements
// console.log(arr.splice1(2,0,9,10));
// call custom splice() on array to replace elements
// console.log(arr.splice1(2,2,8,9,10));
// call custom splice() on array to delete elements
console.log(arr.splice1(3,1));

console.log("Final array: ",arr);