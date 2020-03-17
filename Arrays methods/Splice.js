//arr.splice(index[, deleteCount, elem1, ..., elemN])
let arr = ['I`m', 'studying', 'programming'];
arr.splice(1, 1); //delete 1 element from the position 1
console.log(arr);

let array2 = ['I', 'love', 'music'];
array2.splice(0, 2, 'Kate', 'hate'); //delete 2 elements from the beginning and replace them with the new
console.log(array2);

//Splice can just add elements, if 'deleteCount' = 0
let arr3 = ['I`m', 'studying', 'programming', 'lessons'];
arr3.splice(2, 0, 'amazing', 'language on');
console.log(arr3);