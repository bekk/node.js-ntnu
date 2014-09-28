
// Some requirements?
var sw = require('stringywingy');
var _s = require('underscore.string');

// Print if is anagram (filter non-alpha-numerics, ignore case)
console.log('Should be true:', sw.isAnagram('Elvis', 'Lives')); //=> true
console.log('Should be true:', sw.isAnagram('Clint Eastwood', 'Old west action')); //=> true
console.log('Should be false:', sw.isAnagram('Ben Affleck', 'Batman')); //=> false


// Print if is palindrome (filter non-alpha-numerics, ignore case)
console.log('Should be true:', sw.isPalindrome('Tacocat')); //=> true
console.log('Should be true:', sw.isPalindrome('Yo, banana boy!')); //=> true
console.log('Should be true:', sw.isPalindrome('Agnes i senga')); //=> true
console.log('Should be false:', sw.isPalindrome('Woppaa')); //=> false


// Print splitted characters
console.log('Should be ["a", "b", "c"]:', _s.chars('abc'));
console.log('Should be ["Y","o",","," ","b","a","n","a","n","a","b","o","y","!"]:', _s.chars('Yo, banana boy!'));


// Should swap case for characters
console.log('Should be "Hello":', _s.swapCase('hELLO'));
console.log('Should be "wOPPA":', _s.swapCase('Woppa'));


// Should count number of characters (case sensitive)
console.log('Should be "2":', _s.count('Tacocat', 'c'));
console.log('Should be "1":', _s.count('Tacocat', 't'));


// Should print reversed strings
console.log('Should be "Tacocat":', _s.reverse('tacocaT'));
console.log('Should be "Yo, banana boy!":', _s.reverse('!yob ananab ,oY'));
