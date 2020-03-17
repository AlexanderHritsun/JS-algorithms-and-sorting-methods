let palindrome = function (word) {
    let len = word.length;
    let start = word.substring(0, Math.floor(len /2)).toLowerCase();
    let end = word.substring(len - Math.floor(len /2)).toLowerCase();
    let flip = end.split('').reverse().join('');
    return (start === flip);
};

console.log(palindrome('radar')); //true
console.log(palindrome('redder')); //true
console.log(palindrome('window')); //false

const array1 = [1,2,3,4,5];
console.log(array1.reverse());
console.log(array1.join('-'));

let str1 = 'Test string with many words';
console.log(str1.split(''));