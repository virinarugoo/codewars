// TITLE:Welcome to the City


// DESCRIPTION:
//Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person.
//Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name
//array in test cases will vary.
//
// Example:
//
// sayHello(['John', 'Smith'], 'Phoenix', 'Arizona')
// This example will return the string Hello, John Smith! Welcome to Phoenix, Arizona!

//Parameters: Use three characters to welcome a person, first the name, then city and last the state
//Return: A name with one more values should be separated by a space in between
//Pseucode:

Solution
function sayHello( name, city, state ) {
  return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
}
