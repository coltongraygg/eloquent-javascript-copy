// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {
  // concat current to acc and then process next element in array
  return array.reduce((acc, current) => acc.concat(current), []);
}
// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, test, update, body) {
  // while test function with value argument is true
  while (test(value)) {
    // invoke body function with value argument
    body(value);
    // reassign value and start over
    value = update(value);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, func) {
  // iterate through array
  for (let i = 0; i < array.length; i++) {
    // if invoking func is falsey, immediately return false
    if (!func(array[i])) {
      return false;
    }
  }
  // if invoking func never returns falsey value return true
  return true;
}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(text) {
  // countBy script direction
  let scripts = countBy(text, char => {
    // get unicode code point
    let charCode = char.codePointAt(0);
    // get script object for current character
    let script = characterScript(charCode);

    // if script was found for this character
    if (script) {
      // return direction 
      return script.direction;
    } else {
      // if no script, return none
      return 'none';
    }
  });

  // filter out none directions
  let directions = scripts.filter(({name}) => name !== 'none');
  if (directions.length === 0) {
    // return ltr 
    return 'ltr'
  }
  // find direction with highest count
  let dominant = directions.reduce((a, b) => {
    // if a is greater than b count
    if (a.count > b.count) {
      // keep a as highest
      return a;
    } else {
      return b;
    }
  })
  // return name of dominant direction
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