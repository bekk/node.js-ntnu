
// Solution, separate module


// We want to use reverse and chars locally in this file as well
// as exporting them.

var chars = module.exports.chars = function (str) {
  if (!str) return [];
  return String(str).split('');
};

var reverse = module.exports.reverse = function (str) {
  return chars(str).reverse().join('');
};

module.exports.isAnagram = function (first, second) {
  return sortedString(first) === sortedString(second);
};

module.exports.isPalindrome = function (str) {
  return clean(str) === reverse(clean(str));
};

module.exports.swapCase = function (str) {
  if (!str) return '';

  // Replace all non-whitespace with their case counterpart
  return String(str).replace(/\S/g, function(c){
    return c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  });
};

module.exports.count = function (str, char) {
  if (!str) return 0;
  return String(str).split(char).length - 1;
};


// Private functions. Not exported.

function sortedString (str) {
  return clean(str).split('').sort().join('');
}

function clean (str) {
  if (!str) return str;
  return str.replace(/[^a-zøæå]/ig, '').toLowerCase();
}
