/*
# Exercise

  It just so happens, that there are modules for doing
  the string operations before on NPM. Try to locate
  the modules by searching on https://www.npmjs.org/
  The names are:
    - stringywingy
    - underscore.string

  You should install the dependencies from the `part2`
  directory (where this file is located).

  After you have installed the dependencies, you should see
  a node_modules in the same directory as this file.
  node_modules should have the modules you installed.


  Your task is to install the dependencies, require the modules,
  and alter the code below to use the methods from the two modules.

*/

// Some requirements here?


// Used to check if correct values
var shouldBe = require('../shouldBe');


// Methods from stringywingy

// Print if is anagram (filter non-alpha-numerics, ignore case)
shouldBe(true, isAnagram('Elvis', 'Lives')); //=> true
shouldBe(true, isAnagram('Clint Eastwood', 'Old west action')); //=> true
shouldBe(false, isAnagram('Ben Affleck', 'Batman')); //=> false


// Print if is palindrome (filter non-alpha-numerics, ignore case)
shouldBe(true, isPalindrome('Tacocat')); //=> true
shouldBe(true, isPalindrome('Yo, banana boy!')); //=> true
shouldBe(true, isPalindrome('Agnes i senga')); //=> true
shouldBe(false, isPalindrome('Woppaa')); //=> false


// Print splitted characters
shouldBe(['a', 'b', 'c'], chars('abc'));
shouldBe(['Y','o',',',' ','b','a','n','a','n','a',' ','b','o','y','!'], chars('Yo, banana boy!'));


// Should swap case for characters
shouldBe('Hello', swapCase('hELLO'));
shouldBe('wOPPA', swapCase('Woppa'));


// Should count number of characters (case sensitive)
shouldBe('2', count('Tacocat', 'c'));
shouldBe('1', count('Tacocat', 't'));


// Should print reversed strings
shouldBe('Tacocat', reverse('tacocaT'));
shouldBe('Yo, banana boy!', reverse('!yob ananab ,oY'));
