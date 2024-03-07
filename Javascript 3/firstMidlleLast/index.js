//1. Write a program to create a new string made of an input string’s first, middle, and last character.

// Given:
// str1 = "James"
// Output:
// Jms


// let digitCount 

// for - count digits 

// 

function firstMiddleLast(str) {
    if (str.length < 3) {
        return str; 
    }
    const middleIndex = Math.floor(str.length / 2);
    // console.log
    return str.charAt(0) + str.charAt(middleIndex) + str.charAt(str.length - 1);


    //console.log
} 


