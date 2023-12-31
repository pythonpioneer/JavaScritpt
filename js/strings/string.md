# String in JavaScript

## String methods

1. To find the length of the string
   
        str.length

2. To extract part of the string

        str.slice(startIndex, endIndex+1)  // support negative indicies

        str.substring(startIndex, endIndex+1)  // no negative indicies

        str.substr(startIndex, length)  // using substring length

3. To replace the string with other string
   
        str.replace(oldString, newString)  // replace the first match
        str.replace(/oldString/g, newString)  // using regex expressions, replace all matches
        str.replaceAll(oldString, newString)  // replace all matches

4. To Convert into UppperCase/LowerCase

        str.toUpperCase()  // all char in upper case
        str.toLowerCase()  // all char in lower case

5. To concatenate the string
   
        str.concat(string);  // similar to: str + string
        
6. To remove whitespaces from string
   
        str.trim()  // remove whitespaces from the string
        str.trimStart()  // remove whitespaces from start of the string
        str.trimEnd()  // remove whitespaces from end of the string

7. To insert/pad the string

        str.padStart(maxLength, string)  // insert padded values at the begining until it reaches the maxLength
        str.padEnd(maxLength, string)

8. To access the char from particular index

        str.charAt(index)  // return the char
        str[index]  // return the char
        str.charCodeAt(index)// returns the unicode of the character

9. To split the string by given splitter
    
        str.split(splitterString)  // returns list


## String Search

10. To find the first occurence of the string
   
        str.indexOf(string)  // returns first index or -1
        str.indexOf(string, srartIndexOfSearch)  // returns first index or -1

        str.search(/string/)  // returns the first index or -1, can pass regex
        str.search(string)  // returns the first index or -1, can pass regex

11. To find the last occurence of the string

        str.lastIndexOf(string, index)  // returns the last index or -1

12. To find all match of the string
   
        str.match(/string/gi)  // returns array, containing all string match, case insensitive

13. To check that the string matches or not

        str.includes(string)  // returns boolean
        str.includes(string, startIndex)  // returns boolean

        str.startsWith(string, firstIndex)   // returns boolean
        str.endsWith(string, lastIndex)   // returns boolean
