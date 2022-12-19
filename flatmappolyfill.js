// contains a polyfil of flatmap functions available on array objects in JavaScript

// definition of flatmap from mdn docs
/* 
    The flatMap() method returns a new array formed by applying a given 
    callback function to each element of the array, and then flattening the 
    result by one level. It is identical to a map() followed by a flat() of 
    depth 1 (arr.map(...args).flat()), but slightly more efficient than 
    calling those two methods separately.
    
    possible ways of calling array flatmap
    // Arrow function
    [].flatMap((element) => { // })
    [].flatMap((element, index) => { // })
    [].flatMap((element, index, array) => { // })

    // Callback function
    [].flatMap(callbackFn)
    [].flatMap(callbackFn, thisArg)

    // Inline callback function
    [].flatMap(function (element) { // })
    [].flatMap(function (element, index) { // })
    [].flatMap(function (element, index, array) { // })
    [].flatMap(function (element, index, array) { // }, thisArg)
*/

Array.prototype.flatmap1 = function(fn, thisArg){
    const ansArr = [];
    let fn_ = fn;
    if(thisArg){
        fn_ = fn.bind(thisArg);
    }

    for(let i=0; i<this.length; i++){
        ansArr.push(fn_(this[i], i, this));
    }

    let dep = 1;

    function f(arr, d){
        let ans = [];
        for(let i=0; i<arr.length; i++){
            if(Array.isArray(arr[i])){
                if(d > 0){
                    ans = ans.concat(f(arr[i], d-1));
                }else{
                    ans.push(arr[i]);
                }
            }else{
                ans.push(arr[i]);
            }
        }
        return ans;
    }

    return f(ansArr, dep);
}

console.log([1, 2, [3], [4, 5], 6, []].flatmap1(num => num))
// console.log([[1, 2, [3, 4]], 5, [6, {}, ['dsda', false]]].flatmap1(0))