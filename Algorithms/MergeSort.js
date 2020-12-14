function merge_sort(left_part,right_part)
{
    var i = 0;
    var j = 0;
    var results = [];

    while (i < left_part.length || j < right_part.length) {
        if (i === left_part.length) {
            // j is the only index left_part
            results.push(right_part[j]);
            j++;
        }
        else if (j === right_part.length || left_part[i] <= right_part[j]) {
            results.push(left_part[i]);
            i++;
        } else {
            results.push(right_part[j]);
            j++;
        }
    }
    return results;
}

console.log(merge_sort([1,3,4], [3,7,9]));


/////////////////////////////////////////////////////////////////////////////////////////////////////////

const merge = (leftArray, rightArray) => {
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length || rightIndex < rightArray.length) {
        const leftEl = leftArray[leftIndex];
        const rightEl = rightArray[rightIndex];

        if(leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
            output.push(rightEl);
            rightIndex++;
        }
    }
    return [...output, ...leftArray.slice(leftIndex), ...rightArray.slice(rightIndex)];
}

//recursive
const mergeSort = array => {
    if(array.length <= 1) {
        return array;
    }
    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);

    return merge(
        mergeSort(leftArr),
        mergeSort(rightArr)
    )
}