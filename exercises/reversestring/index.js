// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // Solution 1
  // return str.split('').reverse().join('');

  // Solution 2
  // let reverseStr = '';
  // for (let i = str.length - 1; i >= 0; i--) {
  //   reverseStr += str[i];
  // }

  // return reverseStr;

  // Solution 3
  let reverseStr = '';
  for (let characters of str) {
    reverseStr = characters + reverseStr;
  }
  return reverseStr;
}

module.exports = reverse;
