//arr.concat(arg1, arg2...) - returns a new array which consists from inserted arrays

let array = [1,2];
let bigArray = array.concat([3,4]);
console.log(bigArray); // 1,2,3,4
console.log(array.concat([3,4], 5, 6)); //1,2,3,4,5,6
