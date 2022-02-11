var arr = [5,3,7,6,4,2,9,8,1,10];

function sort1(arr, left, right) {
    var pivot = arr[Math.floor((right + left) / 2)];
    let i = left;
    let j = right; 
        let temp = 0;
    while (i <= j) {
        while (arr[i] < pivot) {
            i++;
        }
        while (arr[j] > pivot) {
            j--;
        }
        if (i <= j) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(arr, left, right) {
    var index;
    if (arr.length > 1) {
        index = sort1(arr, left, right); 
        if (left < index - 1) { 
            quickSort(arr, left, index - 1);
        }
        if (index < right) { 
            quickSort(arr, index, right);
        }
    }
    return arr;
}

let sortedArray = quickSort(arr, 0, arr.length - 1);
console.log(sortedArray); 