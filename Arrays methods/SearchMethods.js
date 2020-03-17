//arr.indexOf(item, from) search the item, from the index 'from'and return the element index of '-1'
//arr.lastIndexOf(item, from) makes the same but from the end of the array
//arr.includes(item, from) search the item and returns 'true' or 'false'

let array = [1,2,3];

console.log(array.indexOf(2)); //1
console.log(array.lastIndexOf(1)); //0
console.log(array.lastIndexOf(5)); //-1
console.log(array.includes(3)); //true