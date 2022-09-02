// TITLE: Multiplication table for number


// DESCRIPTION:
// Your goal is to return multiplication table for number that is always an integer from 1 to 10.
//
// For example, a multiplication table (string) for number == 5 looks like below:
//
// 1 * 5 = 5
// 2 * 5 = 10
// 3 * 5 = 15
// 4 * 5 = 20
// 5 * 5 = 25
// 6 * 5 = 30
// 7 * 5 = 35
// 8 * 5 = 40
// 9 * 5 = 45
// 10 * 5 = 50
// P. S. You can use \n in string to jump to the next line.
//
// Note: newlines should be added between rows, but there should be no trailing newline at the end. If you're unsure about the format, look at the sample tests.


//Parameters: An integer limited to the numbers between 1 and 10
//Return: Strings which contains the multiplication table for the input value  from 1 to 10. Each equation in the table should be separated by line breaks(/n)
//Pseudocode:create a loop that counts to 10,and within each loop create the equation for the line using template literals, add that equation to an array, then join the array together using "/n"


Solution
function multiTable(number) {
  let numArray = []
  for(let i = 1; i <= 10; i++) {
    numArray.push(`${i} * ${number} = ${i * number}`)
  }
  return numArray.join("\n")
}
