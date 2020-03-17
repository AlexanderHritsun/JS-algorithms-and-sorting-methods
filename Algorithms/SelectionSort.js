
const selectionSort = (array) => {
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[min] > array[j]) {
                min = j;
            }
        }
        [array[i], array[min]] = [array[min], array[i]]
    }
    return array;
};

console.log(selectionSort([200,60,33,10,101,85,90,0]));
