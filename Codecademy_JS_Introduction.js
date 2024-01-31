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

// Let’s see what happens if we create a variable that overwrites a global variable. Inside the callMyNightSky() function, on the very first line of the function body, assign the variable stars to 'Sirius' as such: stars = 'Sirius';
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
let stars = 'North Star';

const callMyNightSky = () => {
  stars = 'Sirius';
	return 'Night Sky: ' + satellite + ', ' + stars + ', ' + galaxy;
};

console.log(callMyNightSky());

// Outside the function, under the current console.log() statement, add another console.log() statement to log stars to the console. You’ll notice that the global variable stars was reassigned to 'Sirius'. In other words, we changed the value of the global stars variable but it’s not easy to read what exactly happened. This is bad practice in code maintainability and could impact our program in ways we do not intend.
console.log(stars);

// Inside the function body of logVisibleLightWaves(), beneath the region variable and before the provided console.log() statement, create an if statement that checks if the region is the 'The Arctic'.
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

// Inside the if block, define a new let variable lightWaves and set it equal to 'Northern Lights'.
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
  }
  console.log(lightWaves);
};

logVisibleLightWaves();

// Beneath the variable in the if block, use console.log() to log the value of the block variable inside the if block. Run your code and notice the output. Inside the if block console.log(lightWaves) logs the value Northern Lights to the console. Outside the if block, but still within the function, the same statement logs Moonlight to the console.
const logVisibleLightWaves = () => {
  let lightWaves = 'Moonlight';
	let region = 'The Arctic';
  // Add if statement here:
  if (region === 'The Arctic') {
    let lightWaves = 'Northern Lights';
    console.log(lightWaves);
  }
  console.log(lightWaves);
};

logVisibleLightWaves();


// Declare a variable using const named hobbies and set it equal to an array with three strings inside of it.
const hobbies = ['string1', 'string2', 'string3'];

// Use console.log() to print hobbies to the console.
console.log(hobbies);

// Individual elements in arrays can also be stored to variables. Create a variable named listItem and set it equal to the first item in the famousSayings array using square bracket notation ([]). Then use console.log() to print the listItem variable to the console.
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];

const listItem = famousSayings[0];
console.log(listItem);

// Now, console.log() the third element in the famousSayings array using bracket notation to access the element. Do not save the element to a new variable before you log it.
console.log(famousSayings[2]);

// Awesome, you can access each element in an array using the index. But what happens if you try to access an index that is beyond the last element? Try to log the item at index [3] of famousSayings to the console. What is logged to the console?
console.log(famousSayings[3]); // Undefined

// Change the second element of the array groceryList to 'avocados'.
let groceryList = ['bread', 'tomatoes', 'milk'];
groceryList[1] = 'avocados';
console.log(groceryList); // Output: ['bread', 'avocados', 'milk']

// Below the two existing arrays, re-assign the element in index 0 of condiments to 'Mayo'. Log the updated array, condiments, to the console.
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

// Below your code from Step 1, reassign condiments to be a new array that contains a single string ['Mayo'] Log the result to the console. Notice that you can re-assign elements in an array and re-assign an entire new array to a variable declared using the let keyword.
condiments = ['Mayo'];
console.log(condiments);

// Below your code from Step 2, re-assign the last item from the utensils array to 'Spoon'. Log the updated array to the console.
utensils[3] = 'Spoon';
console.log(utensils);

// Find the length of the objectives array and log it to the console.
const objectives = ['Learn a new language', 'Read 52 books', 'Run a marathon'];
console.log(objectives.length);

// Add two elements to the chores array using .push().
const chores = ['wash dishes', 'do laundry', 'take out trash'];
chores.push('dust shelves', 'clean off table');

// Use console.log to print your chores array to make sure your items were added.
console.log(chores);

// Use the .pop() method to remove the last element from chores.
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
removed = chores.pop();

// In a line after you called chores.pop(), log chores to the console to make sure it worked.
console.log(chores);

// Use the .shift() method to remove the first item from the array groceryList. Log the new groceryList to the console. Read about .shift() in Docs.
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
firstItem = groceryList.shift();
console.log(groceryList);

// Under the code added in step 1, use the .unshift() method to add 'popcorn' to the beginning of your grocery list. After calling .unshift() on groceryList, log groceryList to the console. You may wish to delete the console.log() statement from the previous step. Read about .unshift() in Docs.
newFirstItem = groceryList.unshift('popcorn');
console.log(groceryList);

// You’re in a hurry so you decide to ask a friend to help you with your grocery shopping. You want him to pick up the 'bananas', 'coffee beans', and 'brown rice'. Under the code you added for step 2, use .slice() to provide your friend with a list of these three things. Log this part of the list to the console. Unlike the two previous checkpoints, you should do both of these steps in one line. Read about .slice() in Docs.
friendList = groceryList.slice(1, 4);
console.log(friendList);

// After calling .slice() on groceryList, log the grocery list to the console one more time. Notice that the groceryList array still contains the same items it had in Step 2. That means .slice() is non-mutating! You can confirm this in the link in the previous step.
console.log(groceryList);

// Let’s find the index of a particular element in groceryList using .indexOf(). Call .indexOf() on groceryList to find the index of the element 'pasta' and save the returned value to a const variable named pastaIndex. Then log pastaIndex to the console. (You may remove the other console.log() statements to declutter the terminal.) Read about .indexOf() in Docs.
const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);

// In main.js, there is an array concept. There is also a function changeArr that will assign the element in index 3 of an array to 'MUTATED'. The function changeArr was called with an argument of concept. Underneath the function call, log concept to the console to check if this reassignment mutated the array.
const concept = ['arrays', 'can', 'be', 'mutated'];
function changeArr(arr){
  arr[3] = 'MUTATED';
}
changeArr(concept);
console.log(concept);

// Let’s double check what happens if we mutate an array using a built-in method inside a function. Under the console.log() statement, define another function named removeElement that takes a parameter of newArr. Inside the function body call .pop() on newArr.
function removeElement(newArr) {
  newArr.pop();
} 

// Call removeElement() with an argument of concept.
removeElement(concept);

// After calling removeElement(concept), check the value of concept by logging it to console. Notice that in both cases, the change to the array was maintained outside of the function!
console.log(concept);

// Let’s make a nested array! Create a variable numberClusters. Assign as its value an array with three array elements.
// The first array element should hold the elements 1 and 2 in that order.
// The second array element should hold the elements 3 and 4 in that order.
// The third array element should hold the elements 5 and 6 in that order.
const numberClusters = [[1, 2], [3, 4], [5, 6]];

// Awesome, you made a nested array! Now declare a variable named target using the const keyword and assign to access the element 6 inside numberClusters.
const target = numberClusters[2][1];


// Create the variable vacationSpots, and assign its value to an array of three strings naming places you’d like to visit.
let vacationSpots = ['string1', 'string2', 'string3'];

// Next, console.log() each item in vacationSpots. Since we don’t know loops yet, we have to console.log() each element in the array separately.
console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);

// Nice work! Now imagine that the vacation list had 100 places on it— logging each array element to the console by hand would be a tedious task! In the next exercise, we will learn how to make things more efficient with for loops.

// Now, make your own! Create a program that loops from 5 to 10 and logs each number to the console. When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded infinite loop which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.
for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

// Make a for loop that loops backwards printing 3 to 0 to the console. Use the >= comparison operator in your stopping condition and the -- operator in your iteration statement.
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

// Write a for loop that iterates through our vacationSpots array using i as the iterator variable. Inside the block of the for loop, use console.log() to log each element in the vacationSpots array after the string 'I would love to visit '. For example, the first round of the loop should print 'I would love to visit Bali' to the console. When writing/changing loops, there is a chance that our stopping condition isn’t met and we get a dreaded infinite loop which essentially stops our programming from running anything else! To exit out of an infinite loop in an exercise, refresh the page - then fix the code for your loop.
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
for (let i = 0; i < vacationSpots.length; i++) {
  console.log(`I would love to visit ${vacationSpots[i]}`);
}

// Imagine you’re a big-wig programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program. You’ll need two arrays of “friends” from two mock users so that you can extract the names of the followers who exist in both lists. Make a variable called bobsFollowers and set it equal to an array with four strings representing the names of Bob’s friends.
const bobsFollowers = ['follower1', 'follower2', 'follower3', 'follower4'];

// Make a variable called tinasFollowers and set it equal to an array with three strings representing the names of Tina’s friends. Make exactly two of these the same as two of the friends in the bobsFollowers array.
const tinasFollowers = ['Jimmothy', 'follower2', 'Betty'];

// Create a third variable named mutualFollowers and set it to an empty array.
const mutualFollowers = [];

// Create a nested loop that iterates through bobsFollowers as the array for the outer loop and tinasFollowers as the array for the inner loop. If the current element from the outer loop is the same as the current element from the inner loop, push that element into the mutualFollowers array.
for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
};

// Below the cards array, declare a variable, currentCard, with the let keyword but don’t assign it a value.
const cards = ['diamond', 'spade', 'heart', 'club'];
let currentCard;

// Create a while loop with a condition that checks if the currentCard does not have that value 'spade'. Inside the block of your while loop, add the following line of code: currentCard = cards[Math.floor(Math.random() * 4)]; Math.floor(Math.random() * 4) will give us a random number from 0 to 3. We’ll use this number to index the cards array, and assign the value of currentCard to a random element from that array. If you notice the Run button spinning continuously or a “Lost connection to Codecademy” message in an exercise, you may have an infinite loop! If the stop condition for our loop is never met, we will create an infinite loop which stops our program from running anything else. To exit out of an infinite loop in an exercise, refresh the page — then fix the code for your loop.
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
}

// Awesome! Your loop is running, but you can’t tell because it doesn’t output anything. Let’s add a console.log() statement to our while block. Inside the block, after you assign currentCard a new value, log currentCard to the console. For fun you can run your code a few times and see how the output changes!
while (currentCard != 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

// We’d like a program to simulate part of the cake-baking process. Depending on the recipe, a different number of cups of sugar is required. Create the variable cupsOfSugarNeeded, and assign it a number value of your choosing. The cups of sugar must be added to the batter one at a time. Declare the variable cupsAdded and assign it the value 0.
let cupsOfSugarNeeded = 3;
let cupsAdded = 0;

// We have a sweet tooth, so we want to add at least one cup of sugar to the batter even if the value of cupsOfSugarNeeded is 0. Create a do...while loop which increments cupsAdded by one while cupsAdded is less than cupsOfSugarNeeded. In order to help us visualize the output on each iteration of the loop, add a console.log within the do...while block and log the value of cupsAdded.
do {
  cupsAdded++;
} while (cupsAdded < cupsOfSugarNeeded);
console.log(cupsAdded);

// Log each element from rapperArray in a for loop with the iterator variable i.
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
}

// After the for loop, log the string "And if you don't know, now you know." to the console. Note: since there’s a single quote character, ', in our string, we can use double quotes around the string to make sure character prints.
console.log("And if you don't know, now you know.");

// Add a break inside your loop’s block that breaks out of the loop if the element at the current index in the rapperArray is 'Notorious B.I.G.'. Log the element before breaking out of the loop.
for (let i = 0; i < rapperArray.length; i++){
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.'){
    break;
  }
}
console.log("And if you don't know, now you know.");


// The spaceship we have so far looks good but, unfortunately, is not very fast at hyperspace travel due to having an inferior fuel source. Make a new spaceship object named fasterShip with the same color as spaceship but with a Fuel Type equal to 'Turbo Fuel'.
let fasterShip = {
  color: 'silver',
  'Fuel Type': 'Turbo Fuel'
};

// Let’s use the dot operator to access the value of numCrew from the spaceship object in the code editor. Create a variable crewCount and assign the spaceship‘s numCrew property to it.
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

// Write your code below
let crewCount = spaceship.numCrew;

// Again using the dot operator, create a variable planetArray and assign the spaceship‘s flightPath property to it.
let planetArray = spaceship.flightPath;

// Let’s use bracket notation to access the value of 'Active Mission' from the spaceship object in the code editor. Create a variable isActive and assign the spaceship‘s 'Active Mission' property to it.
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };
let propName =  'Active Mission';

let isActive = spaceship['Active Mission'];

// Using bracket notation and the propName variable provided, console.log() the value of the 'Active Mission' property.
console.log(spaceship[propName]);

// Reassign the color property of the spaceship object to have a value of 'glorious gold'
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';

// Without changing lines 1 - 6, add a numEngines property with a numeric value between 1 and 10 to the spaceship object.
spaceship.numEngines = 6;

// Use the delete operator to remove the 'Secret Mission' property from the spaceship object.
delete spaceship['Secret Mission'];
































