// TITLE:Calculate average


// DESCRIPTION:
// Write a function which calculates the average of the numbers in a given list.
//
// Note: Empty arrays should return 0.

function findAverage(array) {
  // your code here
  return array.length==0?0:array.reduce((a,b)=>b+a)/array.length

}
