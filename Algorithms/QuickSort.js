
const quickSort = (array) => {
    if (array.length <= 1) return array;

    let pivot = array[array.length - 1];
    let left = [];
    let right = [];

    for(let i = 0; i < array.length-1; i++) {
        if(array[i] < pivot) {
            left.push(array[i])
        } else right.push(array[i])
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([123,44,66,200,57,124,33,2,5]));