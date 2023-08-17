let arr = ["aus", "eng", "ind", "nz", "sa", "pak", "sl", "wi", "ban"];

console.log("for loop");
for(let i=0; i<arr.length; i++){
    console.log(i, arr[i]);
}

console.log('\nfor of loop (only elements)');
for(let val of arr){
    console.log(val);
}

console.log("\nfor of loop (with index)");
for(let [index, element] of arr.entries()){
    console.log(index, element);
}

console.log('\nfor in loop');
for(let key in arr){
    console.log(key, arr[key]);
}

console.log("\nfor each loop");
arr.forEach((element, index) => {
    console.log(index, element);
});

console.log("\nmap as loop");
arr.map((element, index) => {
    console.log(index, element);
});

console.log("\nevery method")
let array = [1, 3, 2, 4, 6];
// const res = 
arr.every(val => val != "npm");

console.log("\nfilter method")
// const res = 
array.filter(val => 
    val % 2 
);

console.log("\nreduce method");
const res = array.reduce((prev, curr) => prev+curr);
console.log(res);
