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

// Let’s use short-circuit evaluation to assign a value to writingUtensil. Do not edit tool yet, we’ll return to tool in the next step. Assign to writingUtensil the value of tool and if tool is falsy, assign a default value of 'pen'.
let tool = '';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);

// Notice that text 'The pen is mightier than the sword' logged to the console. Which means the value of writingUtensil is 'pen'. What if we reassign the value of tool to 'marker'. Let’s see what happens to the value of writingUtensil.
let tool = 'marker';

// Use short circuit evaluation to assign  writingUtensil variable below:
let writingUtensil = tool || 'pen';

console.log(`The ${writingUtensil} is mightier than the sword.`);


// Ternary Operator
let isLocked = false;

if (isLocked) {
  console.log('You will need a key to open the door.');
} else {
  console.log('You will not need a key to open the door.');
}

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// Refactor, or edit, the first if...else block to use a ternary operator.
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.'): console.log('You will not need a key to open the door.');

let isCorrect = true;

if (isCorrect) {
  console.log('Correct!');
} else {
  console.log('Incorrect!');
}

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// Refactor the second if...else block to use a ternary operator.
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.'): console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

if (favoritePhrase === 'Love That!') {
  console.log('I love that!');
} else {
  console.log("I don't love that!");
}

// Refactor the third if...else block to use a ternary operator.
let isLocked = false;

isLocked ? console.log('You will need a key to open the door.'): console.log('You will not need a key to open the door.');

let isCorrect = true;

isCorrect ? console.log('Correct!') : console.log('Incorrect!');

let favoritePhrase = 'Love That!';

favoritePhrase === 'Love That!' ? console.log('I love that!') : console.log("I don't love that!");

// Let’s create a program that keeps track of the way the environment changes with the seasons. Write a conditional statement to make this happen! In main.js there is already an if...else statement in place. Let’s add an else if statement that checks if season is equal to 'winter'. Inside the code block of the else if statement, add a console.log() that prints the string 'It\'s winter! Everything is covered in snow.'. Make sure that the structure uses if, else if, and else.
// Add another else if statement that checks if season is equal to 'fall'. Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s fall! Leaves are falling!'.
// Add a final else if statement that checks if season is equal to 'summer'. Inside the code block of the else if statement you just created, add a console.log() that prints the string 'It\'s sunny and warm because it\'s summer!'.
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if(season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else if(season === 'fall') {
  console.log('It\'s fall! Leaves are falling!');
} else if(season === 'summer') {
  console.log('It\'s sunny and warm because it\'s summer!');
} else {
  console.log('Invalid season.');
}

// Let’s write a switch statement to decide what medal to award an athlete. athleteFinalPosition is already defined at the top of main.js. So start by writing a switch statement with athleteFinalPosition as its expression.
let athleteFinalPosition = 'first place';
switch (athleteFinalPosition) {
  
}

// Inside the switch statement, add three cases: The first case checks for the value 'first place' If the expression’s value matches the value of the case then console.log() the string 'You get the gold medal!' The second case checks for the value 'second place' If the expression’s value matches the value of the case then console.log() the string 'You get the silver medal!' The third case checks for the value 'third place' If the expression’s value matches the value of the case then console.log() the string 'You get the bronze medal!' Remember to add a break after each console.log().
// Now, add a default statement at the end of the switch that uses console.log() to print 'No medal awarded.'. If athleteFinalPosition does not equal any value of our cases, then the string 'No medal awarded.' is logged to the console. Remember to add the break keyword at the end of the default case.
let athleteFinalPosition = 'first place';

switch (athleteFinalPosition) {
  case 'first place':
    console.log('You get the gold medal!');
    break;
  case 'second place':
    console.log('You get the silver medal!');
    break;
  case 'third place':
    console.log('You get the bronze medal!')
    break;
  default:
    console.log('No medal awarded.');
}

// Let’s create a function that prints a reminder to the console. Using a function declaration, create a function called getReminder().
// In the function body of getReminder(), log the following reminder to the console: 'Water the plants.'
function getReminder() {
  console.log('Water the plants.');
}

// Let’s create another function that prints a useful Spanish travel phrase to the console. Using a function declaration, create a function called greetInSpanish().
// Add code to the function body of greetInSpanish(): In the function body console.log() the following Spanish phrase to the console: 'Buenas tardes.'
function greetInSpanish() {
  console.log('Buenas tardes.');
}

// Imagine that you manage an online store. When a customer places an order, you send them a thank you note. Let’s create a function to complete this task: Define a function called sayThanks() as a function declaration. In the function body of sayThanks(), add code such that the function writes the following thank you message to the console when called: 'Thank you for your purchase! We appreciate your business.'
function sayThanks() {
  console.log('Thank you for your purchase! We appreciate your business.');
}

// Call sayThanks() to view the thank you message in the console.
sayThanks();

// Functions can be called as many times as you need them. Imagine that three customers placed an order and you wanted to send each of them a thank you message. Update your code to call sayThanks() three times.
sayThanks();
sayThanks();
sayThanks();

// The sayThanks() function works well, but let’s add the customer’s name in the message. Add a parameter called name to the function declaration for sayThanks().
function sayThanks(name) {
  console.log('Thank you for your purchase! We appreciate your business.');
}

// With name as a parameter, it can be used as a variable in the function body of sayThanks(). Using name and string concatenation, change the thank you message into the following: 'Thank you for your purchase '+ name + '! We appreciate your business.' Copy and paste the above message into your code.
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}

// A customer named Cole just purchased something from your online store. Call sayThanks() and pass 'Cole' as an argument to send Cole a personalized thank you message.
sayThanks('Cole');

// The function makeShoppingList() creates a shopping list based on the items that are passed to the function as arguments. Imagine that you always purchase milk, bread, and eggs every time you go shopping for groceries. To make creating a grocery list easier, let’s assign default values to the parameters in makeShoppingList(). Change the parameters of makeShoppingList() into default parameters : Assign ‘milk’ as the default value of item1. Assign ‘bread’ as the default value of item2. Assign ‘eggs’ as the default value of item3.
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
}

// Imagine if we needed to order monitors for everyone in an office and this office is conveniently arranged in a grid shape. We could use a function to help us calculate the number of monitors needed! Declare a function monitorCount() that has two parameters. The first parameter is rows and the second parameter is columns.
function monitorCount(rows, columns) {
  
}

// Let’s compute the number of monitors by multiplying rows and columns and then returning the value. In the function body of the function you just wrote, use the return keyword to return rows * columns.
function monitorCount(rows, columns) {
  return rows * columns;
}

// Now that the function is defined, we can compute the number of monitors needed. Let’s say that the office has 5 rows and 4 columns. Declare a variable named numOfMonitors using the const keyword and assign numOfMonitors the value of invoking monitorCount() with the arguments 5 and 4.
const numOfMonitors = monitorCount(5, 4);

// To check that the function worked properly, log numOfMonitors to the console.
console.log(numOfMonitors);


// In the previous exercise, we created a function to find the number of monitors to order for an office. Now let’s write another function that uses the monitorCount function to figure out the price. Below monitorCount Create a function declaration named costOfMonitors that has two parameters, the first parameter is rows and the second parameter is columns. Leave the function body empty for now.
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  
}

// Time to add some code to the function body of costOfMonitors to calculate the total cost. Add a return statement that returns the value of calling monitorCount(rows, columns) multiplied by 200.
function monitorCount(rows, columns) {
  return rows * columns;
}

function costOfMonitors(rows, columns) {
  return monitorCount(rows, columns) * 200;
}

// We should save the cost to a variable. Declare a variable named totalCost using the const keyword. Assign to totalCost the value of calling costOfMonitors() with the arguments 5 and 4 respectively.
const totalCost = costOfMonitors(5, 4);

// To check that the function worked properly, log totalCost to the console.
console.log(totalCost);

// Let’s say we have a plant that we need to water once a week on Wednesdays. We could define a function expression to help us check the day of the week and if the plant needs to be watered: Create a variable named plantNeedsWater using the const variable keyword Assign an anonymous function that takes in a parameter of day to plantNeedsWater.
const plantNeedsWater = function(day){
  
}

// Now we need to add some code to the function body of plantNeedsWater(): In the function body add an if conditional that checks day === 'Wednesday'. If the conditional is truthy, inside the if code block, use the return keyword to return true.
const plantNeedsWater = function(day){
  if (day === 'Wednesday') {
    return true;
  }
}

// On days that aren’t 'Wednesday', plantNeedsWater() should return false: Add an else statement after the if statement. Inside the else statement use the return keyword to return false.
const plantNeedsWater = function(day){
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
}

// Call the plantNeedsWater() and pass in 'Tuesday' as an argument.
plantNeedsWater('Tuesday');

// Let’s check that plantNeedsWater() returned the expected value. Log plantNeedsWater('Tuesday') to the console. If it worked correctly, you should see false logged to the console.
console.log(plantNeedsWater('Tuesday'));

//Change plantNeedsWater() to use arrow function syntax.
const plantNeedsWater = (day) => {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

// At the top of main.js, declare a const variable, named city set equal to 'New York City'. This variable will exist outside of the block.
const city = 'New York City';

// Below the city variable, write a function named logCitySkyline.
function logCitySkyline() {
  
}

// Inside of the function body of logCitySkyline(), write another variable using let named skyscraper and set it equal to 'Empire State Building'.
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
}

// Inside the function, include a return statement like this: return 'The stars over the ' + skyscraper + ' in ' + city;
function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

// Beneath the logCitySkyline() function, use console.log() to log the value of logCitySkyline() to the console. You’ll notice that the logCitySkyline() function is able to access both variables without any problems. In the next exercise we’ll consider why would it be preferable to have one variable outside of a block and the other inside of a block.
console.log(logCitySkyline());

// At the top of main.js, write three global variables: Name the first variable satellite and set it equal to 'The Moon'. Name the second variable galaxy and set it equal to 'The Milky Way'. Name the third variable stars and set it equal to 'North Star'.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

// Below the variables created in the previous step, write a function named callMyNightSky. Inside the function, include a return statement like this: return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
const callMyNightSky = () => {
  return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + galaxy;
}

// Beneath the callMyNightSky() function, use console.log() to log the value of callMyNightSky() to the console. You’ll notice that the function block for callMyNightSky() is able to access the global variables freely since the variables are available to all lines of code in the file.
console.log(callMyNightSky());

// In main.js, define a function logVisibleLightWaves().
const logVisibleLightWaves = () => {

}

// Within the logVisibleLightWaves() function, using const, create a variable lightWaves and set it equal to 'Moonlight'.
// Within the logVisibleLightWaves() function, beneath the lightWaves variable, add a console.log() statement that will log the value of the lightWaves variable when the function runs.
const logVisibleLightWaves = () => {
  const lightWaves = 'Moonlight';
  console.log(lightWaves);
}

// Call the logVisibleLightWaves() function from outside the function.
logVisibleLightWaves()

// Beneath the function call, log the value of lightWaves to the console from outside the function. You’ll notice that it logs a ReferenceError since the variable is tied to the block scope of the function!
console.log(lightWaves);

















