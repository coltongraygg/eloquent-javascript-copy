////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(x, y) {
  // use Math.min() method to find the minimum value
  return Math.min(x, y);
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(number) {
  // return boolean value testing if number is even
  return number % 2 === 0;
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(string, char) {
  let count = 0;
  // iterate through string
  for (let i = 0; i < string.length; i++) {
    // increment count each time a match is found
    if (string[i] === char) {
      count++;
    }
  }
  // return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(string) {
  let count = 0;
  let target = 'B';
  // iterate through string
  for (let i = 0; i < string.length; i++) {
    // search for a match, increment count if match is found
    if (string[i] === target) {
      count++;
    }
  }
  // return count
  return count;
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};