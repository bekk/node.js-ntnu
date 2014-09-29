
// Some requirements?
var sw = require('stringywingy');
var _s = require('underscore.string');


// Used to check if correct values
var shouldBe = require('../shouldBe');

// Print if is anagram (filter non-alpha-numerics, ignore case)
shouldBe(true, sw.isAnagram('Elvis', 'Lives')); //=> true
shouldBe(true, sw.isAnagram('Clint Eastwood', 'Old west action')); //=> true
shouldBe(false, sw.isAnagram('Ben Affleck', 'Batman')); //=> false


// Print if is palindrome (filter non-alpha-numerics, ignore case)
shouldBe(true, sw.isPalindrome('Tacocat')); //=> true
shouldBe(true, sw.isPalindrome('Yo, banana boy!')); //=> true
shouldBe(true, sw.isPalindrome('Agnes i senga')); //=> true
shouldBe(false, sw.isPalindrome('Woppaa')); //=> false


// Print splitted characters
shouldBe(['a', 'b', 'c'], _s.chars('abc'));
shouldBe(['Y','o',',',' ','b','a','n','a','n','a',' ','b','o','y','!'], _s.chars('Yo, banana boy!'));


// Should swap case for characters
shouldBe('Hello', _s.swapCase('hELLO'));
shouldBe('wOPPA', _s.swapCase('Woppa'));


// Should count number of characters (case sensitive)
shouldBe('2', _s.count('Tacocat', 'c'));
shouldBe('1', _s.count('Tacocat', 't'));


// Should print reversed strings
shouldBe('Tacocat', _s.reverse('tacocaT'));
shouldBe('Yo, banana boy!', _s.reverse('!yob ananab ,oY'));
