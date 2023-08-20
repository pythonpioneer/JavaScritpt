# Array

## Array Intialization

- initialize array with zero elements
        
        let arr1 = [];  // blank array.
        let arr2 = new Array();  // blank array.

- initialize array with some elements.

        let arr1 = [1, 2, 3, 4, 5];  // array containing five elements.
        let arr2 = new Array(1, 2, 3, 4, 5);  // array containing five elements.

- initialize array with one element.

        let arr1 = [2];  // array containing one element.
        let arr2 = new Array(2);  // array containing two undefined element.

- initialize array with one element, except integer elements.

        let arr2 = new Array("two");  // array containing one element.

## Array Traversing

- using "for" loop (other loops working are same)
        
        for(let index=0; index<arr.length; index++) {
            arr[index];  // accessing every element of array
        }

- using "for-in" loop
        
        for(let index in arr) {
            arr[index];  // accessing every element of array
        }

- using "for-of" loop
        
        for(let value of arr) {
            value;  // accessing every element of array
        }

- using "for-of" loop with index
        
        for(let [index, value] of arr.entries()) {
            value;  // accessing every element of array
            index;  // accessing every index of array
        }

- using "for-each" function

        arr.forEach((element, index) => {
            element;  // accessing every element of array
            index;  // accessing every index of array
        });

- Filter the array on conditions

        arr.filter(val => val % 2);  // return an array of odd eleemnt

- Reduce the array

        // adding all element of array
        arr.reduce((prev, curr) => prev+curr);  // curr: arr[i] and prev: arr[i-1]

- using "map" function (returns new array)

        arr.map((element, index) => {
            element;  // accessing every element of array
            index;  // accessing every index of array
        });

## Checks in array

- check that every element of array pass a test or not
  
        arr.every(val => val < 10);  // true, if every element is less than 10, else false.

- check that some element of array pass a test
        
        arr.some(val => val < 10);  // true, if any element is less than 10, else false.

## Copy an array

- copy by refrence

        copiedArr = arr;  // both having the same memory refrence.

- copy by value (using spread operator)

        copiedArr = [...arr];  // both having the same value but different memory addresses.

- copy using slice method

        copiedArr = arr.slice();  // both having the same value but different memory addresses.

## Array operations

- insertion in array
  
  - using push method

        arr.push(element);  // insert an element at end
        arr.push(element1, element2, ...elements);  // insert multiple elements at the end

  - directly inserting elements using indicies

        let arr = [1, 2, 3];
        arr[3] = 4;  // arr: [1, 2, 3, 4]
        arr[5] = 6;  // arr; [1, 2, 3, 4, <1 empty item>, 6]

  - inserting an element at specific position

        arr.splice(specificIndex, deleteCount, element);  // insert element at specific element, after deleting deleteCount elements

        // example of insertion at indicies
        let arr = [1, 3, 4];
        arr.splice(1, 0, 2);  // arr: [1, 2, 3, 4]

- deletion in array

        arr.pop();  // delete last element from array and returns it
        arr.pop(2);  // also delete last element, args not required.

- extracting array or elements from array

        arr.slice();  // returns copy of arr
        arr.slice(startIndex);  // returns array element starts from startIndex.
        arr.slice(startIndex, endIndex);  // returns elements from start to end as an array

- finding maximum and minimum element

        Math.max(...arr);  // returns the max element
        math.min(...arr);  // returns the min element

- splitting string to create an array

        str.split(seprator, limit);  // seprate the string when seprator encounters

        // example of split
        let str = "I am Hritik";
        str.split(" ");  // returns: ["I", "am", "Hritik"]
        str.split(" ", 2);  // returns: ["I", "am"]
        str.split("", 3);  // returns: ["I", " ", "a"]

- joining array to create string
        arr.join(seprator);  // join array element with given seprator

        // example of join
        let arr = ["I", "am", "Hritik"];
        arr.join(" ");  // returns: "I am Hritik"
        arr.join("");  // returns: "IamHritik"
        arr.join("|");  // returns: "I|am|Hritik"

## Searching in array

- using "includes" method. (returns boolean)

        arr.includes(element);  // return true, if element is present in array
        arr.includes(element, startIndex);  // return true, if element is present in array after startIndex.

## Sorting an array 
> ### Takes compare function and return +ve(a is sorted before b), 0(no sorting required), -ve(b is sorted before a). 

        arr.sort();  // ascending order
        arr.sort((a, b) => a - b);  // ascending order
        arr.sort((a, b) => b - a);  // descending order
