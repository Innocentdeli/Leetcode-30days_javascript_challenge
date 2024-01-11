/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let newarr = [];
    let arrlen = arr.length-1;
    for(let i=0; i<=arrlen; i++){
        newarr.push(fn(arr[i], i));
    }
    return newarr;
};