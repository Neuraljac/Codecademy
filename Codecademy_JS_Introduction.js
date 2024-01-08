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
// Use the /= mathematical assignment operator to divide the value stored in quarterMe by 4.

let levelUp = 10;
let powerLevel = 9001;
let multiplyMe = 32;
let quarterMe = 1152;
// Use the mathematical assignments in the space below:
levelUp += 5;
powerLevel -= 100;
multiplyMe *= 11;
quarterMe /= 4;
// These console.log() statements below will help you check the values of the variables.
// You do not need to edit these statements. 
console.log('The value of levelUp:', levelUp); 
console.log('The value of powerLevel:', powerLevel); 
console.log('The value of multiplyMe:', multiplyMe); 
console.log('The value of quarterMe:', quarterMe);

// Using the increment operator, increase the value of gainedDollar.
let gainedDollar = 3;
gainedDollar ++;

// Using the decrement operator, decrease the value of lostDollar.
let lostDollar = 50;
lostDollar --;

// Create a variable named favoriteAnimal and set it equal to your favorite animal.
let favoriteAnimal = 'octopus';

// Use console.log() to print 'My favorite animal: ANIMAL' to the console. Use string concatenation so that ANIMAL is replaced with the value in your favoriteAnimal variable.
console.log('My favorite animal: ' + favoriteAnimal);

// Create a variable called myName and assign it your name.
const myName = 'Jared'

// Create a variable called myCity and assign it your favorite city’s name.
let myCity = 'New Haven'

// Use a single template literal to interpolate your variables into the sentence below. Use console.log() to print your sentence to the console in the following format: My name is NAME. My favorite city is CITY. Replace NAME and CITY in the string above by interpolating the values saved to myName and myCity.
console.log(`My name is ${myName}. My favorite city is ${myCity}`);

// Use console.log() to print the typeof newVariable.
let newVariable = 'Playing around with typeof.';
console.log(typeof newVariable); // Output: string

// Great, now let’s check what happens if we reassign the variable. Below the console.log() statement, reassign newVariable to 1.
newVariable = 1;

// Since you assigned this new value to newVariable, it has a new type! On the line below your reassignment, use console.log() to print typeof newVariable again.
console.log(typeof newVariable); // Output: number

// Using the let keyword, declare a variable named sale. Assign the value true to it.
let sale = true;

// Now create an if statement. Provide the if statement a condition of sale. Inside the code block of the if statement, console.log() the string 'Time to buy!'.
if (sale) {
  console.log('Time to buy!');
}

// Notice that the code inside the if statement ran, since 'Time to buy!' was logged to the console. Below the sale variable declaration, but before the if statement, reassign sale to false. Run your code and observe what happens, we’ll be changing this behavior in the next exercise.
let sale = true;
sale = false;  // Undoes the previous definition.
if (sale) {
  console.log('Time to buy!');
} // Does not print to console.

// Add an else statement to the existing if statement. Inside the code block of the else statement, console.log() the string 'Time to wait for a sale.'
let sale = true;

sale = false;

if(sale) {
  console.log('Time to buy!');
} else {
  console.log('Time to wait for a sale.');
}

// Using let, create a variable named hungerLevel and set it equal to 7.
let hungerLevel = 7;

// Write an if...else statement using a comparison operator. The condition should check if hungerLevel is greater than 7. If so, the conditional statement should log, 'Time to eat!'. Otherwise, it should log 'We can eat later!'. After you press run, play around with the condition by tweaking the comparison of hungerLevel by using different operators such as <=,>=,>, and <.
if (hungerLevel > 7) {
  console.log('Time to eat!');
} else {
  console.log('We can eat later!');
}

// In main.js there are two variables mood and tirednessLevel. Let’s create an if...else statement that checks if mood is 'sleepy' and tirednessLevel is greater than 8. If both conditions evaluate to true, then console.log() the string 'time to sleep'. Otherwise, we should console.log() 'not bed time yet'. After you press “Run”, play around with the || operator and the ! operator! What happens if you negate the value of the entire statement with ! and switch to || instead of &&?
let mood = 'sleepy';
let tirednessLevel = 6;

if (mood === 'sleepy' && tirednessLevel > 8) {
  console.log('time to sleep');
} else {
  console.log('not bed time yet')
}
// Change the value of wordCount so that it is truthy. This value should still be a number. After you make this change and run your code, 'Great! You've started your work!' should log to the console.
let wordCount = 1;
if (wordCount) {
  console.log("Great! You've started your work!");
} else {
  console.log('Better get to work!');
}

// Change the value of favoritePhrase so that it is still a string but falsy. After you make this change and run your code, 'This string is definitely empty.' should log to the console.
let favoritePhrase = '';

if (favoritePhrase) {
  console.log("This string doesn't seem to be empty.");
} else {
  console.log('This string is definitely empty.');
}
