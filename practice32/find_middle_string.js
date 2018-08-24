// ## find middle of string

// Build a function, find_middle_letters, that finds the middle of a string.  If the string is an odd number of characters, it returns 1 letter.  If it is an even number of characters, it returns 2 characters.  It takes a string as a parameter


// - Example:
// 	- find_middle_letters('seven')
// 		- Return: 'v'
// 	- find_middle_letters('dish')
// 		- Return: 'is'



function findMiddleLetter(word) {
  //console.log(word);
  //console.log(word.length);
   
  if (word.length % 2 === 0) {
    var middleLetter1 = word[(word.length/2)-1];
    //console.log(middleLetter1);
    var middleLetter2 = word[(word.length/2)];
    //console.log(middleLetter2);
    var middleLetter = middleLetter1 + middleLetter2;
  } else { 
    var middleLetter = word[Math.floor(word.length/2)];  
    //console.log(middleLetter);
  }
  return middleLetter
}

findMiddleLetter("seven");

   
