let arr = [1, 2, 3];

// inserting element in array
arr[4] = 4;
arr.push(5);
console.log(arr);

// deletion in array
arr.pop(1);  // delete last element
arr.pop();  // delete last element
console.log(arr);

// extracting array from given array
newArr = arr.slice(1, 2);
console.log(newArr);

// finding element in array
console.log(arr.includes(1));  // finding element in array
console.log(arr.includes(1, 1));  // finding element in array after index 1

// adding array element at particulat index
arr.splice(1, 0, 2.2);
console.log(arr);

// sorting array
arr.push(100, 20);
console.log(arr);
arr.sort((a, b) => {
    return a-b;
});
console.log(arr);

// sorting in orders
console.log(arr.sort((a, b) => a-b));
console.log(arr.sort((a, b) => b-a));

arr = [3, 4, 2, 5, 1];
console.log(arr);
console.log(arr.sort((a, b) => a-b));
console.log(arr.sort((a, b) => b-a));
console.log(arr.sort((a, b) => a*b));

console.log(Math.max(...arr));

// example of split
let str = "I am Hritik";
let sarr = str.split(" ");  // returns: ["I", "am", "Hritik"]
str.split(" ", 2);  // returns: ["I", "am"]
console.log(str.split("", 3));  // returns: ["I", "a", "m"]

console.log(sarr.join(""));


// for of loop confirmation
arr = [1, 2, 3, 4, 5];

for(let [index, value] of arr.entries()) {
    console.log(index, " ", value);
}

