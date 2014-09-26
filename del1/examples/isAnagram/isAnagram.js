// Expose publics
module.exports = function isAnagram (a, b) {
  return sortedString(a) === sortedString(b);
}

// Private
function sortedString (str) {
  return str.toLowerCase().split('').sort().join('');
}
