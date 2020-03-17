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
console.log(array1.reverse()); //[5,4,3,2,1]
console.log(array1.join('-'));// string: 5-4-3-2-1

let str1 = 'Test string with many words';
console.log(str1.split(' ')); //['Test', 'string', 'with', 'many', 'words']

//Find palindrome in the string
let s = 'asdabawwwff';
const isPalimExist = (s) => {
    for (let i = 0; i < s.length - 1; i++){
        if (s[i-1] === s[i + 1]){
                return true;
            }
        } return false;
    };
console.log(isPalimExist(s));