// writing a function to check that the given input is array or not
function isArray(input) {
    return toString.call(input) === '[object Array]' ? true : false;
}

// passing inputs here
let arr = [1, 2, 3, 4, 5];
let text = "javascript";

console.log(isArray(arr), isArray(text));
