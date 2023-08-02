// writing a function to get n-element from array
function get_n_element(arr, n=1) {
    if(arr == null || n < 0) return null;
    else return arr.slice(0, n);
}

// calling the function 
let arr = [ 0, 2, 3, [ 'j', 'a', 'v', 'a', 'script' ] ];

console.log(get_n_element(arr));  // output: [0]
console.log(get_n_element(arr, 0));  // output: []
console.log(get_n_element(arr, 1));  // output: [0]
console.log(get_n_element(arr, 3));  // output: [0, 2, 3]
console.log(get_n_element());  // output: null
