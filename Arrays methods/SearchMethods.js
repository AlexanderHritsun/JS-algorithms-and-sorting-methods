//arr.indexOf(item, from) search the item, from the index 'from'and return the element index of '-1'
//arr.lastIndexOf(item, from) makes the same but from the end of the array
//arr.includes(item, from) search the item and returns 'true' or 'false'

let array = [1,2,3];

console.log(array.indexOf(2)); //1
console.log(array.lastIndexOf(1)); //0
console.log(array.lastIndexOf(5)); //-1
console.log(array.includes(3)); //true

//find - search elements according to special conditions, search breaks when the first elements found

function isPrime(element, index, array) {
    var start = 2;
    while (start <= Math.sqrt(element)) {
        if (element % start++ < 1) {
            return false;
        }
    }
    return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); //undefined
console.log([4, 5, 8, 7].find(isPrime)); // 5
//filter works like find but returns all elements
console.log([4, 5, 8, 7].filter(isPrime)); //5,7