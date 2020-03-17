let swapped;
const bubbleSort = (array) => {
    do{
        swapped = false;
        array.forEach((numb, i) => {
            if(numb > array[i + 1]){
                let temp = numb;
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swapped = true;
            }
        })
    } while (swapped === true);
    return array;
};

console.log(bubbleSort([3,5,44,10,2,1,7,10,7]));