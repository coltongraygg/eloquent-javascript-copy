
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called `triangles` that takes in a parameter of a
number. This number determines the "size" of the triangle you need to log. 
HINT: each "level" of the triangle needs to be logged individually.

example: triangles(3);
LOGS =>

#
##
###

example: triangles(5);
LOGS =>

#
##
###
####
#####

*/

function triangles(size) {
  let hashtag = '#';
  // iterate
  for (let i = 0; i < size; i++) {
    // log and add # to hashtag value for next iteration
    console.log(hashtag);
    hashtag += '#';
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called fizzBuzz that takes in two parameters - 
`start`, `end`. `start` and `end` both represent numbers. This function should
access each number from `start` to `end` and log different statements depending
on the number:

  - if the number is divisible by 3, log "fizz"
  - if the number is divisible by 5, log "buzz"
  - if the number is divisible by both 3 & 5, log "fizzbuzz"
  - if the number is not divisible by 3 or 5, log the number
*/

function fizzBuzz(start, end) {
  // iterate from start to end
  for (let i = start; i <= end; i++) {
    // if i is divisible by 3 & 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      // if i is divisible by 5
    } else if (i % 5 === 0) {
      console.log('buzz');
      // if i is divisible by 3
    } else if (i % 3 === 0) {
      console.log('fizz');
      // if none of the above statements execute, log value of i
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

/*
Directions: Create a function called drawChessboard that takes in a parameter of
`x` that represents the "size" of the chessboard you are going to log. The chessboard
will be a collection of spaces and #'s creating the appearance of a chessboard.

Note: in order to do this correctly, you need to ultimately create a string containing
linebreak characters (\n). For example, if you invoke drawChessboard(3) it should log a
string that looks like this " # \n# #\n # \n# #"

example: drawChessboard(4);
LOGS =>

 # #
# #
 # #
# #

exampmle drawChessboard(3);
LOGS =>

 # 
# #
 #


 thinking this out...
 on first iteration my function does
 ' # #'

*/

function drawChessboard(size) {
  let chessboard = '';

  // traverse the y axis of the chessboard
  for (let y = 0; y < size; y++) {
    // traverse the x axis on each iteration
    for (let x = 0; x < size; x++) {
      // if x and y are even, their sum will be even & if x and y are odd, their sum will also be even
      if ((x + y) % 2 === 0) {
        // add an empty space to the chessboard
        chessboard += ' ';
      // otherwise, add a hashtag to the board
      } else {
        chessboard += '#'
      }
    }
    // on each iteration of the y axis add a newline
    chessboard += '\n';
  }
  console.log(chessboard);
}


////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}