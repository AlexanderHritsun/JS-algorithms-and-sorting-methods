const findLongestWord = string => {
    let theBiggestLength = 0;
    let biggestWord = null;
    const stringsArray = string.split(/[\W, \d]/);
    console.info(stringsArray);
    stringsArray.forEach(word => {
        if(word.length > theBiggestLength) {
            theBiggestLength = word.length
            biggestWord = word;
        }
    })
    return biggestWord;
}

const str = 'I love 23432JavaScript so much^%#@$)(@#*)(';

console.log(findLongestWord(str));