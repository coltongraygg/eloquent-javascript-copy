////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function range(start, end, step) {
  let result = [];

  // if step is not provided
  if (step === undefined) {
    // increment up
    if (start < end) {
      step = 1;
      // increment down
    } else {
      step = -1;
    }
  }

  // if start and end are the same value 
  if (start === end) {
    return result;
  }

  // if step is negative
  if (step > 0) {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }

  // if step is positive
  } else {
    for (let i = start; i >= end; i += step) {
      result.push(i);
    }
  }

  // return result array
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(array) {
  let sum = 0;
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // add index values to get sum
    sum += array[i];
  }
  // return sum value
  return sum;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(array) {
  let result = [];
  // iterate array in reverse
  for (let i = array.length - 1; i >= 0; i--) {
    // push values to result array
    result.push(array[i]);
  }
  return result;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArrayInPlace(array) {
  return array.reverse();
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(array) {
  // initialize list value as null
  let list = null;
  // iterate backwards through array
  for (let i = array.length - 1; i >= 0; i--) {
    // create object for each element, assign value as element and rest to current value of list
    let tempObj = {
      value: array[i],
      rest: list,
    }
    // reassign list to tempObj
    list = tempObj;
  }
  // return list
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];
  let currentNode = list;
  // iterate until currentNode is null
  while (currentNode !== null) {
    // push value to array
    array.push(currentNode.value);
    // move to the next node
    currentNode = currentNode.rest
  }
  // return array
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend(element, list) {
  // return object where value is set to new element and rest is set to the existing list
  return {
    value: element,
    rest: list,
  };
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth(list, position) {
  // initialize currentNode to keep track of current node 
  let currentNode = list;
  // keep track of current position
  let count = 0;
  // loop until currentNode is null
  while (currentNode !== null) {
    // search for a match
    if (count === position) {
      // return value at position
      return currentNode.value;
    }
    // move to next node in the list
    currentNode = currentNode.rest;
    // increment count
    count++;
  }
  // if position isn't found and entire list has been processed, return undefined
  return undefined;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual(obj1, obj2) {
  // check if values are both objects
  if (typeof obj1 !== 'object' || obj1 === null || typeof obj2 !== 'object' || obj2 === null) {
    return obj1 === obj2;
  }

  // check if objects have the same number of keys
  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);
  

  // iterate through keys1
  for (let i = 0; i < keys1.length; i++) {
    // if keys2 doesn't include keys1 values
    // or if the result of invoking function with keys1[i] and keys2[i] are false
    if (!keys2.includes(keys1[i]) || !deepEqual(obj1[keys1[i]], obj2[keys2[i]])) {
      // return false
      return false;
    }
  }
  // if no falsey values found, return true
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