/*
We wrote a function, smallestPowerOfTwo(), which should take in an array and return the lowest power of 2 that is greater than or equal to each number in that array. A power of two is any value 2n where n is a non-negative integer (including 0). The list of powers of 2 for non-negative integers starts with [1, 2, 4, 8, 16, 32, 64,...] where 20=1, 21=2, 22=4, and so on.

For example, if the array were:

const myArray = [6, 2, 11, 50];

Then the smallestPowerOfTwo() function should return the following array:

[ 8, 2, 16, 64 ]

Within our smallestPowerOfTwo() function, we create a new array called results. We then loop through the argument array and calculate the smallest power of two which is greater than or equal to the current element before using .push() to add it to results.

It’s not doing what we want. Can you fix our code, please?
*/

const numbers = [5, 3, 9, 30];

const smallestPowerOfTwo = arr => {
  let results = [];
  for (let i = 0; i < arr.length; i++) {
    let number = arr[i];
    let power = 1; // Initialize power of 2 as 1
    while (power < number) {
      power *= 2; // Double the power until it's greater than or equal to the number
    }
    results.push(power);
  }
  return results;
}

console.log(smallestPowerOfTwo(numbers));
// Output: [ 8, 4, 16, 32 ]
