const getTheBiggestNumber = (arr) => {
    const resultsArray = [];
    arr.forEach(subArray => {
        resultsArray.push(Math.max(...subArray));
    })
    return resultsArray;
}

console.log(getTheBiggestNumber([[1, 100, 200, 4, 5], [1, 4, 6, 10, 11], [2, 3, 5]]));