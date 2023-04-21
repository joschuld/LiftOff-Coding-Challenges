// Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// Examples
// minMax([1, 2, 3, 4, 5]) ➞ [1, 5]

// minMax([2334454, 5]) ➞ [5, 2334454]

// minMax([1]) ➞ [1, 1]

// Notes
// All test arrays will have at least one element and are valid.

function findMinMax(arr){
    let min = arr[0]
    let max = arr[0]

    // takes inputted array and sets the min and max to the first number
    // loop through and compare, then update

    for(let i = 0; i < arr.length; i++){
        if (arr[i] < min){
            min = arr[i];
        }
        else if (arr[i] > max){
            max = arr[i];
        }
    }

    return [min,max];

}

console.log(findMinMax([1,2,3,4,5]))
console.log(findMinMax([2334454, 5]))
console.log(findMinMax([1]))