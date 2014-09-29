var assert = require('assert');
var style = {};

module.exports = function shouldBe(expected, actual) {
  var equal = isEqual(expected, actual);

  if (!equal) {
    console.error(style.red.open + actual + ' should have been <' + expected + '> in \n' + style.red.close + getErrorLine() + '\n');
    process.exit(1);
  }

  console.log(style.green.open, '✓', style.green.close, actual, 'was as expected', expected);
};

function isArray (obj) {
  return Array.isArray(obj);
}

function arraysEqual(a1,a2) {
  return JSON.stringify(a1) === JSON.stringify(a2);
}

function isEqual (expected, actual) {
  if (!isArray(expected)) {
    return expected == actual;
  }

  return arraysEqual(expected, actual);
}

function getErrorLine () {
  var error = new Error();
  var stack = error.stack;
  return stack.split('\n')[3];
}

// Taken from https://github.com/sindresorhus/ansi-styles/blob/master/index.js
var codes = {
	reset: [0, 0],
	red: [31, 39],
	green: [32, 39],
};

Object.keys(codes).forEach(function (key) {
	var val = codes[key];
	var color = style[key] = {};
	color.open = '\u001b[' + val[0] + 'm';
	color.close = '\u001b[' + val[1] + 'm';
});
