let obj = {
    "A": 12,
    "B": 11,
    "C": 10,
    "D": 14,
    "E": 16,
};

console.log("\nfor loop");
for (let i=0; i<Object.keys(obj).length; i++){
    console.log(Object.keys(obj)[i] + "->" + Object.values(obj)[i]);
}

console.log("\nfor in loop");
for(let key in obj){
    let val = obj[key];
    console.log(key + "->" + val);
}

