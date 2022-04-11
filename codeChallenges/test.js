const getNumbersFromString = string => {
    const stringArray = string.split('');
    let resultingArray = [];

    stringArray.forEach(symb => {
        const element = Number.parseInt(symb);
        if(!isNaN(element)) {
            resultingArray.push(element);
        }
    });
    return resultingArray.length;
}

console.info(getNumbersFromString('st3555ffg5gg55669g'));
console.info(getNumbersFromString('nannan'));
console.info(getNumbersFromString('dsjks sad asd null'));
console.info(getNumbersFromString('%^!#%$&%^5435#!$&5345^'));
console.info(getNumbersFromString('0123456789'));
console.info(getNumbersFromString('01,2345.678:9'));
