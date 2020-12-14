const findLongestWord = string => {
    let theBiggestLength = 0;
    const stringsArray = string.split(' ');
    stringsArray.forEach(word => {
        if(word.length > theBiggestLength) {
            theBiggestLength = word.length
        }
    })
    return theBiggestLength;
}

const str = 'I love JavaScript so much';

console.log(findLongestWord(str));