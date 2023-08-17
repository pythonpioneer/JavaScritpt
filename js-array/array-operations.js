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
arr.splice(1, 2, 2.2);
console.log(arr);

