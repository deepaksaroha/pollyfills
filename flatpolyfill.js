// contains a polyfil of flat functions available on array objects in JavaScript

// definition of flat from mdn docs
/* 
    The flat() method creates a new array with all sub-array elements 
    concatenated into it recursively up to the specified depth.
    
    possible ways of calling array flat
    [].flat()
    [].flat(depth)
*/

Array.prototype.flat1 = function(depth){
    let dep = 1;
    if(!isNaN(depth)){
        dep = depth;
    }

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

    return f(this, dep);
}

console.log([1,2,3,4].flat1(1))
console.log([[1, 2, [3, 4]], 5, [6, {}, ['dsda', false]]].flat1(0))