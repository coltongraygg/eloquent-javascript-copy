// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES AN ARRAY OF ARRAYS
 * O: FUNCTION RETURNS A SINGLE ARRAY CONTAINING ALL ELEMENTS OF ARRAY INPUT
 * C: N/A
 * E: N/A
 */

function flatten(array) {
  return array.reduce(function(acc, curr) {
    // return current element concatenated with acc
    return acc.concat(curr);
  }, []); // set acc to empty array
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES VALUE REPRESENTING INITIAL START OF LOOP, 
 * I: A FUNCTION TEST REPRESENTING A FUNCTION TO KEEP THE LOOP ITERATING IF TRUE, 
 * I: A FUNCTION BODY THAT DOES SOMETHING TO CURRENT VALUE, AND A FUNCTION UPDATE TO RETURN ON EACH ITERATION
 * 
 * O: FUNCTION INVOKES BODY FUNCTION ON EACH VALUE
 * C: N/A
 * E: N/A
 */

function loop(value, test, update, body) {
  // run test function on current value
if (test(value)) {
  // if result of invoking function test is true, invoke body function with value as argument
  body(value);
  // recursively call loop with value passed in as argument for update function
  return loop(update(value), test, update, body);
}
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES AN ARRAY AND A FUNCTION
 * O: FUNCTION RETURNS TRUE IF EVERY ELEMENT IN ARRAY RETURNS TRUE WHEN INVOKING FUNC
 * C: N/A
 * E: N/A
 */

function every(array, func) {
  // iterate through the array
  for (let i = 0; i < array.length; i++) {
    // if invoking func on element in array is false, return false and end the loop
    if (!func(array[i])) {
      return false;
      // end loop if false value is found
      break;
    }
  }
  // function returns true if invoking func on every element of array is true
  return true;

}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES A STRING OF TEXT
 * O: FUNCTION RETURNS A STRING REPRESNTING THE DOMINANT WRITING DIRECTION
 * C: N/A
 * E: N/A
 */

function dominantDirection(text) {
  // count characters by script's direction
  let scripts = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    // return script direction if script is found, otherwise 'none'
    return script ? script.direction : 'none'
    // remove instances where direction is none
  }).filter(({name}) => name != 'none');

  // find script with highest count
  let dominant = scripts.reduce(function(a, b) {
    if (a.count > b.count) {
      return a;
    } else {
      return b;
    }
  });
  // return name of script with highest count
  return dominant.name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};