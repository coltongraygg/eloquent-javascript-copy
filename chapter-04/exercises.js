////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES A START AND END PARAM, BOTH REPRESENTING NUMERICAL VALUES
 * O: FUNCTION RETURNS ALL THE NUMBERS INBETWEEN TWO PARAMS, INCLUDING START AND END NUMBER
 * C: N/A
 * E: N/A
 */

function range(start, end, step) {
  // declare result array with empty array
  let result = [];
  // if start value === end value
  if (start === end) {
    // return empty array
    return result;
  }
  // if step value not provided in argument
  if (step === undefined) {
    // if start value is less than end value
      // step will be used as an increment/decrement tool later on
    if (start < end) {
      // assign step to 1
      step = 1;
      // if start value is greater than end value
    } else {
      // asign step to -1
      step = -1;
    }
  }
  // if step is positive
  if (step > 0) {
    // assign i to start value, iterate if i <= end value, add & assign value of step to i on each iteration
    for (let i = start; i <= end; i += step)
      // push i value to result array
      result.push(i);
    // if step is negative
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }
  return result;
}



////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(numsArray) {
  // declare result with 0
  let result = 0;
  // if array with no indexes is input
  if (numsArray.length === 0) {
    // return result
    return result;
  }
  // if two zeroes are given in input array
  if (numsArray[0] === '0' && numsArray[1] === '0' && numsArray.length === 1) {
    // return result
    return result;
  } else {
  // otherwise iterate through the array
    for (let i = 0; i < numsArray.length; i++) {
      // add and assign value of current value at index i to current value of result
      result += numsArray[i]
    }
  }
  return result;
}



////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  // declare result array
  let result = [];
  // iterate from last index to 0 index, decrement
  for (let i = array.length - 1; i >= 0; i--) {
    // push array[i] value to result array
    result.push(array[i]);
  }
  return result;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  // use to temporarily store a single index -- array[i]
  let placeHolder;
  // locate the middle index of array -- round down 
  let mid = Math.floor(array.length / 2); 
  // iterate through array - array is successfully reversed when array[i] reaches mid value 
  for (let i = 0; i < mid; i++) {
    // temporarily store array[i] in variable
    placeHolder = array[i];
    // assign array[i] to the value at last array index - i -- flipping the array
    array[i] = array[array.length - 1 - i];
    // assign last array index - 1 to the value of placeHolder
    array[array.length - 1 - i] = placeHolder;
  }
  return array;

}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // initialize linkedList
  let linkedList = null;
  // iterate through array backwards so each new object is added to front
  for (let i = array.length - 1; i >= 0; i--) {
    // new object in linkedList 
   linkedList = {value: array[i], rest: linkedList}
  }
  return linkedList;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // initialize empty array
  let array = [];
  // start with first node of list
  let current = list;
  // loop until the last node
  while (current !== null) {
    // push current value of node to array
    array.push(current.value);
    // reassign current to current lists rest value
    current = current.rest;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(value, list) {
  // return value of new element and value of rest which points to list
  return {value: value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, position) {
  // base cases
  // if element not found
   if (list === null) {
    return undefined;
  }
  // if element has been found
  if (position === 0) {
    return list.value;
  }
  // recursion
    // check next element in list
  return nth(list.rest, position - 1) 
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


function deepEqual(a, b) {

  // check if a or b are not an object or null
  if (typeof a !== 'object' || a === null || typeof b !== 'object' || b === null) {
    // compare a and b, if equal return true - otherwise false
    return a === b;
  }
  // create variables to store keys of object a and b
  let keysA = Object.keys(a);
  let keysB = Object.keys(b);

  // if a and b have different amount of keys, return false
  if (keysA.length !== keysB.length) {
    return false;
  }

  // iterate through each key in a
  for (let key of keysA) {
    // if a key from b is not found in a, return false
    // or if recursively calling the function on each key from a and b is false, return false
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};