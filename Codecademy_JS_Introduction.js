console.log(34);
console.log(364);

//Opening line.
console.log('It was love at first sight.');
/*
console.log('The first time Yossarian saw the chaplain he fell madly in love with him.');
console.log('Yossarian was in the hospital with a pain in his liver that fell just short of being jaundice.');
console.log('The doctors were puzzled by the fact that it wasn\'t quite jaundice.');
console.log('If it became jaundice they could treat it.');
console.log('If it didn\'t become jaundice and went away they could discharge him.');
console.log('But this just being short of jaundice all the time confused them.');
*/

console.log('JavaScript')
console.log(2011)
console.log('Woohoo! I love to code! #codecademy')
console.log(20.49)

console.log(3.5+34);
console.log(2023 - 1969);
console.log(65/240);
console.log(0.2708 * 100);

console.log('Hello' + 'World');
console.log('Hello ' + 'World');

console.log('Teaching the world how to code'.length);

// Use .toUpperCase() to log 'Codecademy' in all uppercase letters
console.log('Codecademy'.toUpperCase());

// Use a string method to log the following string without whitespace at the beginning and end of it.
console.log('    Remove whitespace   '.trim());

// Inside of a console.log(), create a random number with Math.random(), then multiply it by 100. // Now, use Math.floor() to make the output a whole number. Inside the console.log() you wrote in the last step, put the existing Math.random() * 100 code inside the parentheses of Math.floor().
console.log(Math.floor(Math.random() * 100));

// Find a method on the JavaScript Math object that returns the smallest integer greater than or equal to a decimal number. Use this method with the number 43.8. Log the answer to the console.
console.log(Math.ceil(43.8));

// Use the JavaScript documentation to find a method on the built-in Number object that checks if a number is an integer. Put the number 2017 in the parentheses of the method and use console.log() to print the result.
console.log(Number.isInteger(2017));

// Declare a variable named favoriteFood using the var keyword and assign to it the string 'pizza'.
var favoriteFood = 'pizza'

// Declare a variable named numOfSlices using the var keyword and assign to it the number 8.
var numOfSlices = 8

// Under the numOfSlices variable, use console.log() to print the value saved to favoriteFood. On the following line, use console.log() to print the value saved to numOfSlices.
console.log(favoriteFood)
console.log(numOfSlices)

// Create a let variable called changeMe and set it equal to the boolean true.
let changeMe = true;

// On the line after changeMe is declared, set the value of changeMe to be the boolean false. To check if changeMe was reassigned, log the value saved to changeMe to the console.
changeMe = false;
console.log(changeMe);

// Create a constant variable named entree and set it to equal to the string 'Enchiladas'.
const entree = 'Enchiladas'

// Just to check that you’ve saved the value of 'Enchiladas' to entree, log the value of entree to the console.
console.log(entree);

// Great, let’s see what happens if you try to reassign a constant variable. Paste the following code to the bottom of your program: entree = 'Tacos'
// This code throws the following error when you run your code: TypeError: Assignment to constant variable.
entree = 'Tacos';

// Use the += mathematical assignment operator to increase the value stored in levelUp by 5.
// Use the -= mathematical assignment operator to decrease the value stored in powerLevel by 100.
// Use the *= mathematical assignment operator to multiply the value stored in multiplyMe by 11.

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;

// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;



// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);
