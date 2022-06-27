// TITLE: Sum Arrays
//
// DESCRIPTION:
//Input: [-2.398]
//Output:-2.398
// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0. What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Disclaimer
// This is for beginners so we want to test basic loops and math operations. Advanced users may find this extremely easy and can easily write this in one line.


Solution:
//Sum Numbers
function sum (numbers) {
  "use strict";
  return numbers.reduce((res, v) => res+v,0);
};
