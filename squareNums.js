/*
Write a function, squareNums(), that takes in an array of numbers and, using .map(), returns an array with the square of each of the elements of that array.

You can test your function when you’re ready by passing in the numbers array or by making your own array!
*/

const numbers = [2, 7, 9, 171, 52, 33, 14]

const toSquare = num => num * num;

// Write your code here:
function squareNums(arr) {
  return arr.map(toSquare);
}

// Test the function with an array
const numbersArray = [2, 7, 9, 171, 52, 33, 14];
console.log(squareNums(numbersArray)); // Output: [4, 49, 81, 29241, 2704, 1089, 196]
