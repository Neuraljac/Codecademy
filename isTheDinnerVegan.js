/*
Write a function isTheDinnerVegan() that takes in an array of food objects in the format:

{name: 'cabbage', source: 'plant' }

and returns a boolean value based on whether or not every item in the array has entirely plant-based origins.

const meal = [{name: 'arugula', source: 'plant'}, {name: 'tomatoes', source: 'plant'}, {name: 'lemon', source:'plant'}, {name: 'olive oil', source: 'plant'}];

isTheDinnerVegan(meal); // Should return true

You can test your function when you’re ready by passing in the dinner array or by making your own!
*/

function isTheDinnerVegan(meal) {
    return meal.every(food => food.source === 'plant');
  }
  
  // Test the function with the provided meal array
  const meal = [
    { name: 'arugula', source: 'plant' },
    { name: 'tomatoes', source: 'plant' },
    { name: 'lemon', source: 'plant' },
    { name: 'olive oil', source: 'plant' }
  ];
  console.log(isTheDinnerVegan(meal)); // Output: true
  