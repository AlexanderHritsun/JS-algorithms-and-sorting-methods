// [10, 20, 20, 10, 10, 30, 50, 10, 20] - output the quantity of the pairs matching elements

const getMatchingPairs = (array) => {
    let matchCounter = 0;
    for(let i =0; i < array.length; i++) {
        for(let j = i+1; j < array.length -1; j++) {
            if(array[i] === array[j]) {
                matchCounter++;
            }
        }
    }
    return console.log('Pairs quantity: ', Math.floor(matchCounter / 2));
}

getMatchingPairs([10, 20, 20, 10, 10, 30, 50, 10, 20]);
getMatchingPairs([3, 3, 3, 4, 4, 30, 50, 10, 20]);