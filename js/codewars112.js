// TITLE: Is it a palindrome?

// DESCRIPTION:

// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
  // your code here
    x = x.toLowerCase().replace(/\W+|_/g, '');
    return x == x.split('').reverse().join('');
  }
