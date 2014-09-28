/*
# Exercise

  First:
  First implement the functions outlined below in this file. Don't change
  the console.log statements before the second part of this exercise.

  Tips: You might be able to use some of the functions as a part of the
        other functions.

  Second:
  Separate the implementation to it's own file: `./stringywingy.js`.
  You should only expose functions:
    isAnagram, isPalindrome, chars, swapCase, count, reverse
*/


// Print if is anagram (filter non-alpha-numerics, ignore case)
console.log('Should be true:', isAnagram('Elvis', 'Lives')); //=> true
console.log('Should be true:', isAnagram('Clint Eastwood', 'Old west action')); //=> true
console.log('Should be false:', isAnagram('Ben Affleck', 'Batman')); //=> false


// Print if is palindrome (filter non-alpha-numerics, ignore case)
console.log('Should be true:', isPalindrome('Tacocat')); //=> true
console.log('Should be true:', isPalindrome('Yo, banana boy!')); //=> true
console.log('Should be true:', isPalindrome('Agnes i senga')); //=> true
console.log('Should be false:', isPalindrome('Woppaa')); //=> false


// Print splitted characters
console.log('Should be ["a", "b", "c"]:', chars('abc'));
console.log('Should be ["Y","o",","," ","b","a","n","a","n","a","b","o","y","!"]:', chars('Yo, banana boy!'));


// Should swap case for characters
console.log('Should be "Hello":', swapCase('hELLO'));
console.log('Should be "wOPPA":', swapCase('Woppa'));


// Should count number of characters (case sensitive)
console.log('Should be "2":', count('Tacocat', 'c'));
console.log('Should be "1":', count('Tacocat', 't'));


// Should print reversed strings
console.log('Should be "Tacocat":', reverse('tacocaT'));
console.log('Should be "Yo, banana boy!":', reverse('!yob ananab ,oY'));


// Implementations go here
function isAnagram (first, second) {

}

function isPalindrome (str) {

}

function chars (str) {

}

function swapCase (str) {

}

function count (str, char) {

}

function reverse (str) {

}

// Private functions?
