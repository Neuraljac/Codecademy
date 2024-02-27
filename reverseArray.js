/*
Write a function, reverseArray(), that takes in an array as an argument and returns a new array with the elements in the reverse order.

There’s a built-in array method called .reverse() that does a lot of this work for you, but you’re NOT allowed to use it here!

const sentence = ['sense.','make', 'all', 'will', 'This'];

reverseArray(sentence); 
// Should return ['This', 'will', 'all', 'make', 'sense.'];
*/

function reverseArray(arr) {
    let reversedArr = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArr.push(arr[i]);
    }
    return reversedArr;
  }