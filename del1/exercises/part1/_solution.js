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
console.log('Should be wOPPA', swapCase('Woppa'));


// Should count number of characters (case sensitive)
console.log('Should be "2"', count('Tacocat', 'c'));
console.log('Should be "1"', count('Tacocat', 't'));


// Should print reversed strings
console.log('Should be "Tacocat"', reverse('tacocaT'));
console.log('Should be "Yo, banana boy!"', reverse('!yob ananab ,oY'));


// Implementations go here
function isAnagram (first, second) {
  return sortedString(first) === sortedString(second);
}

function isPalindrome (str) {
  return clean(str) === reverse(clean(str));
}

function chars (str) {
  if (!str) return [];
  return String(str).split('');
}

function swapCase (str) {
  if (!str) return '';

  return String(str).replace(/\S/g, function(c){
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
}

function count (str, char) {
  if (!str) return 0;
  return String(str).split(char).length - 1;
}

function reverse (str) {
  return chars(str).reverse().join('');
}

// Private functions?

function sortedString (str) {
  return clean(str).split('').sort().join('');
}

function clean (str) {
  if (!str) return str;
  return str.replace(/[^a-zøæå]/ig, '').toLowerCase();
}
