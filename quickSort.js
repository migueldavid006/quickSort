function quickSort(array) {
    
    if (array.length < 1) {
        return [];
    }

    let left = []
    let right = []
    let pivot = array[0]

    for (let index = 1; index < array.length; index++) {
            if (array[index] < pivot) {
                left.push(array[index])
            }else{
                right.push(array[index])
            }
    }

return [].concat(quickSort(left),pivot, quickSort(right));
}

console.log(quickSort([1,3,5,7,8,9,5,3,1,14,1,67,12]));