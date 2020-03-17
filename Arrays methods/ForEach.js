/*
arr.forEach(function(item, index, array) {
    // ... actions with item
});*/

let array = [1,2,3,4,5];
array.forEach((element, index, array) => {
    console.log(`Number '${element}' has ${index} index in the array: [${array}]`);
});
