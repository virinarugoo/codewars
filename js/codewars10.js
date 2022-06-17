// TITLE: Friend or Foe?
//
// QUESTION:
// Simple, remove the spaces from the string, then return the resultant string.


Solution:

function friend(friends){
  //your code here
  return friends.filter(function(item) { return item.length === 4 });
}
