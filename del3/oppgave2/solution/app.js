/*

  Oppgave 2A

*/

console.log('Hello World');


/*

  Oppgave 2B

*/

var xs = [0, 1, 2, 1, 1, 3, 4, 3, 7, 5, 7, 3, 8, 13, 8, 7, 15, 12, 6, 14, 6, 14, 7, 9, 15, 13, 25, 11, 18, 17, 17, 20, 26, 24, 12, 31, 5, 3, 33, 11, 7, 21, 36, 9, 19, 12, 32, 30, 27, 40, 12, 25, 14, 30, 34, 34, 13, 12, 26, 28, 24, 1, 27, 59, 51, 20, 64, 9, 67, 53, 7, 63, 47, 15, 12, 54, 22, 10, 8, 5, 18, 29, 28, 6, 83, 10, 70, 23, 58, 14, 33, 2, 56, 11, 48, 79, 78, 40, 5, 26].map(function (i) {return i % 10;});
var uniq = require('uniq');
console.log(uniq(xs));

/*

  Oppgave 2C

*/

var terning = require('./terning.js');
window.terning = terning;
