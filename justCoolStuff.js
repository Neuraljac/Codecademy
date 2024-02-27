/* 
Write a function justCoolStuff() that takes in two arrays of strings, and, using the built-in .filter() method, returns an array with the items that are present in both arrays.

let arr1 = ['this', 'not this', 'nor this'];
let arr2 = ['thing 1', 'thing 2', 'this'];

justCoolStuff(arr1, arr2); // Should return ['this']

You can test your function when you’re ready by passing in the myStuff and coolStuff arrays or by making arrays of your own!
*/

function justCoolStuff(arr1, arr2) {
    return arr1.filter(item => arr2.includes(item));
  }
  
  // Test the function with example arrays
  let arr1 = ['this', 'not this', 'nor this'];
  let arr2 = ['thing 1', 'thing 2', 'this'];
  console.log(justCoolStuff(arr1, arr2)); // Output: ['this']