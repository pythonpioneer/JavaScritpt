// writing a function to clone an array
function cloneArray(arr) {
    return arr.slice();  // default value: 0
}

// calling functions
let arr = [1, 2, 3, ['j', 'a', 'v', 'a', 'script']];
let newArr = cloneArray(arr);
let assignedArr = arr;

// modifying old array
arr[0] = 0;

console.log("old array: ", arr);
console.log("cloned array: ", newArr);
console.log("assigned array: ", assignedArr);
