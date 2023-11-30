// we have given a string
const myStr = `Hi, I am Hritik Kumar Sinha and I am learning JavaScript String`;


// to find the length of the string
console.log(`length: ${myStr.length}`);  // 64


// to extract some part of the string using slice
console.log(`slice (+ve indicies): ${myStr.slice(9, 15)}`);  // Hritik
console.log(`slice (-ve indicies): ${myStr.slice(-55, -49)}`);  // Hritik

// to extract some part of the string using substring
console.log(`substring (only +ve indicies): ${myStr.substring(9, 15)}`);  // Hritik

// to extract some part of the string using substring
console.log(`substr (only +ve indicies): ${myStr.substr(9, 6)}`);  // Hritik


// to replace the string with other string
console.log(`replace: ${myStr.replace('I am', 'You are')}`);  // replace first match
console.log(`replace: ${myStr.replace(/I am/g, 'You are')}`);  // replace all matches
console.log(`replaceAll: ${myStr.replaceAll('I am', 'You are')}`);  // replace all matches (also use regex here)


// to concatenate the string
console.log(`concat: ${myStr.concat(', and', ' ', 'what are you doing?')}`);


// to remove the spaces from the string
console.log(`trim: ${myStr.trim()}`);
console.log(`trimStart: ${myStr.trim()}`);
console.log(`trimEnd: ${myStr.trim()}`);


// to insert or pad the string
console.log(`padStart: ${myStr.padStart(myStr.length+3, 'a')}`);
console.log(`padEnd: ${myStr.padEnd(64, '.')}`);


// find the character in the string
console.log(`charAt: ${myStr.charAt(9)}`);  // return the character at particular index
console.log(`property access: ${myStr[9]}`);  // return the character at particular index
console.log(`charCodeAt: ${myStr.charCodeAt(9)}`);  // return the uni code of the character


// to split the string 
console.log(`split:`, myStr.split(" "));  // list containing items seperated by single spaces
