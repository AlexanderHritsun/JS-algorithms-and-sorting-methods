//arr.slice([start], [end]) - returns subarrays from start till end indexes(the end index not includes)

let array = [1,2,3,4,5];
let slicedArray = array.slice(1,3);
console.log(slicedArray); // 2,3

//can work with negative values. In this case we work from the end of array

let negativeSliced = array.slice(-4, -1);
console.log(negativeSliced);