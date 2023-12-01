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


// to find the string
console.log(`indexOf: ${myStr.indexOf('I')}`);  // returns 4, finding first occurence of the string
console.log(`lastIndexOf: ${myStr.lastIndexOf('I')}`);  // returns 32, finding last occurence of the string

// to find the string using search
console.log(`search: ${myStr.search('I')}`);  // returns 4, first index of the occurence

// to find all occurence of the string using match
console.log(`match:`, myStr.match(/h/gi));  // returns [ 'H', 'H', 'h' ], searching for all h/H

// to check that string matches or not
console.log(`includes: ${myStr.includes('JavaScript')}`);  // returns true, if matched
console.log(`includes: ${myStr.includes('JavaScript', 47)}`);  // find the string after 50th position

// to check that the string starts or ends with some string
console.log(`startsWith: ${myStr.startsWith('H')}`);  // return true
console.log(`endssWith: ${myStr.endsWith('H')}`);  // return false
