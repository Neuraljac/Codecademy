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

// Below the retreatMessage variable in the code editor, create an alienShip object. It should contain a method retreat() which will console.log() the retreatMessage.
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

const alienShip = {
  retreat () {
    console.log(retreatMessage);
  }
}

// Add another method to your object literal. This method, takeOff(), should console.log() the string 'Spim... Borp... Glix... Blastoff!'.
const alienShip = {
  retreat() {
    console.log(retreatMessage);
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!');
  }
}

// Invoke your two methods: first .retreat() then .takeOff().
alienShip.retreat();
alienShip.takeOff();

// Create a variable capFave and assign the captain‘s favorite food (the element in the 0th index of her 'favorite foods' array) to it. Make sure to use bracket and dot notation to get the value of the food through nested access (don’t just copy the value into the variable!)
let spaceship = {
  passengers: null,
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

// Right now the passengers property has a value of null. Instead, assign as its value an array of objects. These objects should represent the spaceship‘s passengers as individual objects. Make at least one passenger object in the array that has at least one key-value pair on it.
let spaceship = {
  passengers: [{name: 'Buzz Fightyear'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    'back-up': {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

// Create a variable firstPassenger and assign the first passenger as its value (the element in the 0th index of the spaceship.passengers array you just made). Make sure to use bracket and dot notation to get the passenger object through nested access (don’t just copy the object into the variable!)
let firstPassenger = spaceship.passengers[0];

// Write a function greenEnergy() that has an object as a parameter and sets that object’s 'Fuel Type' property to 'avocado oil'.
let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

// Write a function remotelyDisable() that has an object as a parameter and sets (or reassigns) that object’s disabled property to true.
let remotelyDisable = obj => {
  obj.disabled = true;
}

// Call your two functions with the spaceship object in the code editor, then console.log() the spaceship object to confirm those properties were changed/added.
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

// Write your code below

let greenEnergy = obj => {
  obj['Fuel Type'] = 'avocado oil';
}

let remotelyDisable = obj => {
  obj.disabled = true;
}

greenEnergy(spaceship);

remotelyDisable(spaceship);

console.log(spaceship)

// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew roles and names in the following format: '[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.
// Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of crew names and degrees in the following format: '[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

for (let crewMember in spaceship.crew) {
  console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
};

for (let crewMember in spaceship.crew) {
  console.log(`${spaceship.crew[crewMember].name}: ${spaceship.crew[crewMember].degree}`)
};


// Let’s create a new object to practice using this. In main.js there is an object robot, add a property of model and assign to it a value of '1E78V2'. Add another property, energyLevel and assign to it a value of 100.
const robot = {
  model: '1E78V2',
  energyLevel: 100
};

// Inside the robot object, add a method named provideInfo. Inside the body of provideInfo(), return the following string by using interpolation: I am MODEL and my current energy level is ENERGYLEVEL.   Replace ‘MODEL’ and ‘ENERGYLEVEL’ with the calling object’s model and energyLevel property. Remember, to get the access to the calling object’s properties inside a method, you have to use the this keyword!
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  provideInfo() {
    return `I am ${this.model} and my current energy level is ${this.energyLevel}.`;
  }
};

// Now to check .provideInfo() has access to the internal properties of robot. Log the result of calling .provideInfo() method on robot to the console.
console.log(robot.provideInfo());

// Currently the .checkEnergy() method is not producing the correct output because it is using arrow function syntax. Refactor, or change, the method to use a function expression. You can write the function using either longhand or shorthand format. After refactoring the method, notice that .checkEnergy() has access to the other internal properties of the robot object.
const robot = {
  energyLevel: 100,
  checkEnergy() {
    console.log(`Energy is currently at ${this.energyLevel}%.`)
  }
}

robot.checkEnergy();

// Below the robot object, reassign the _energyLevel property to 'high'.
const robot = {
  _energyLevel: 100,
  recharge(){
    this._energyLevel += 30;
    console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
  }
};

robot._energyLevel = 'high';

// Now take a look at the new recharge method in robot. .recharge() will add 30 to _energyLevel. What will happen now that _energyLevel isn’t a number? Call .recharge() on robot to find out. Notice that a funky string is printed to the console! This is known as a side-effect of type-coercion. No need to worry about what this means for now, but it’s important to understand that you can cause unwanted side-effects when mutating objects and their properties.
robot.recharge();

// In robot, create a getter method named energyLevel using the get keyword. Leave the function body blank for now.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    
  }
};

// Inside the getter method, add an if statement to check if this._energyLevel is a number using the typeof operator. If that condition is truthy, return 'My current energy level is ENERGYLEVEL'. Replace ENERGYLEVEL with the value of this._energyLevel. Make sure you return the string instead of logging it to the console.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`;
    } 
  }
};

// If this._energyLevel isn’t a number it could be that the _energyLevel property was altered. Let’s add a default return statement for when such a scenario arises. Add an else statement that returns 'System malfunction: cannot retrieve energy level'.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  get energyLevel() {
    if (typeof this._energyLevel === 'number'){
      return `My current energy level is ${this._energyLevel}`;
    } else {
      return 'System malfunction: cannot retrieve energy level'
    }
  }
};

// Log the result of calling the getter method energyLevel on robot to the console. Notice that the method will return a formatted response rather than just accessing a property!
console.log(robot.energyLevel);

// Currently, in robot there is a getter method for numOfSensors but no setter method! What if we need to add or remove some sensors? Let’s fix that problem. Add a setter method named numOfSensors using the set keyword. Provide a parameter of num. Leave the function body empty for now.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    
  }
};

// There are a couple of things we should do in the setter method: Add a check to see if num is a number using the typeof operator. num should also be greater than or equal to 0. If both conditions are met, reassign this._numOfSensors to num.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    }
  }
};

// Now add an else that logs 'Pass in a number that is greater than or equal to 0' to the console.
const robot = {
  _model: '1E78V2',
  _energyLevel: 100,
  _numOfSensors: 15,
  get numOfSensors(){
    if(typeof this._numOfSensors === 'number'){
      return this._numOfSensors;
    } else {
      return 'Sensors are currently down.'
    }
  },
  set numOfSensors(num) {
    if (typeof num === 'number' && num >= 0) {
      this._numOfSensors = num;
    } else {
      return 'Pass in a number that is greater than or equal to 0';
    }
  }
};

// Use the numOfSensors setter method on robot to assign _numOfSensors to 100.
robot.numOfSensors = 100;

// To check that the setter method worked, console.log() robot.numOfSensors.
console.log(robot.numOfSensors);


// Instead of making individual robots like we’ve been doing, let’s make a factory function to make robots as we please! Create a factory function named robotFactory that has two parameters model and mobile. Make the function return an object. In the object, add a key of model with the value of the model parameter. Add another property that has a key of mobile with a value of the mobile parameter. Then add a method named beep without a parameter that will log 'Beep Boop' to the console.
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    } 
  };
};

// Use your factory function by declaring a const variable named tinCan. Assign to tinCan the value of calling robotFactory with the first argument of 'P-500' and the second argument of true.
const tinCan = robotFactory('P-500', true);

// Let’s now check what tinCan can do! Call .beep() on tinCan. You should see 'Beep Boop' printed to the console which means the factory function produced a robot object! Play around with tinCan to check the other properties!
tinCan.beep();

// Use the property value shorthand and refactor the factory function in main.js
const robotFactory = (model, mobile) => {
  return {
    model: model,
    mobile: mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// Becomes:
const robotFactory = (model, mobile) => {
  return {
    model,
    mobile,
    beep() {
      console.log('Beep Boop');
    }
  }
}

// To check that the property value shorthand technique worked:
const newRobot = robotFactory('P-501', false)
console.log(newRobot.model)
console.log(newRobot.mobile)

// Use destructured assignment to create a const variable named functionality that extracts the functionality property of robot. If you need a reminder on how to use destructured assignment, review the example in the narrative or check the hint.
const robot = {
  model: '1E78V2',
  energyLevel: 100,
  functionality: {
    beep() {
      console.log('Beep Boop');
    },
    fireLaser() {
      console.log('Pew Pew');
    },
  }
};

const { functionality } = robot;

// Since functionality is referencing robot.functionality we can call the methods available to robot.functionality simply through functionality. Take advantage of this shortcut and call the .beep() method on functionality.
functionality.beep();

// In main.js there is an object, robot. We’d like to grab the property names, otherwise known as keys, and save the keys in an array which is assigned to robotKeys. However, there’s something missing in the method call. Find out what we have to include by reading MDN’s Object.keys() documentation.
// Object.entries() will also return an array, but the array will contain more arrays that have both the key and value of the properties in an object. Declare a const variable named robotEntries and assign to it the entries of robot by calling Object.entries(). To find how to use Object.entries(), read the documentation at MDN.
// Now what if we want another object that has the properties of robot but with a few additional properties. Object.assign() sounds like a great method to use, but like the previous examples we should check Object.assign() documentation at MDN. Declare a const variable named newRobot. newRobot will be a new object that has all the properties of robot and the properties in the following object: {laserBlaster: true, voiceRecognition: true}. Make sure that you are not changing the robot object!
const robot = {
	model: 'SAL-1000',
  mobile: true,
  sentient: false,
  armor: 'Steel-plated',
  energyLevel: 75
};

// What is missing in the following method call?
const robotKeys = Object.keys(robot);

console.log(robotKeys);

// Declare robotEntries below this line:
const robotEntries = Object.entries(robot)
console.log(robotEntries);

// Declare newRobot below this line:
const newRobot = Object.assign({laserBlaster: true, voiceRecognition: true}, robot);

console.log(newRobot);


// We’ve defined a function with a very long name: checkThatTwoPlusTwoEqualsFourAMillionTimes(). This function takes a long time to execute. It checks whether 2 + 2 = 4, but it does it a million times (just to be really sure)! Using const, declare a shorter-named variable, isTwoPlusTwo that will be easier to work with. Assign checkThatTwoPlusTwoEqualsFourAMillionTimes as its value.
const isTwoPlusTwo = checkThatTwoPlusTwoEqualsFourAMillionTimes;

// Invoke your isTwoPlusTwo() function.
isTwoPlusTwo();

// Hmmm, if we forgot the original name of our function. Is there a way we could figure it out? Use isTwoPlusTwo to console.log() the name property of the function we assigned to isTwoPlusTwo.
console.log(isTwoPlusTwo.name)


// Here we have a function, addTwo(), that adds 2 to whatever is passed into it. Below that, we’ve created what will be a higher-order function, checkConsistentOutput(). The purpose of the higher-order function will be to check the work of addTwo(). Let’s get started! To begin, inside the body of checkConsistentOutput(), declare two variables: checkA and checkB: checkA stores the sum val plus 2. checkB stores the invocation of the func callback, with val as the argument.
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val); 
}

console.log();

// Next, below the variables, write a conditional statement that checks if the value of checkA is equal to the value checkB. If true, return the result of the callback function. If false, return the string 'inconsistent results'.
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val); 
  return checkA === checkB ? func(val) : 'inconsistent results'; 
}

console.log();

// Finally, using console.log(), log the invocation of checkConsistentOutput() with two arguments: the addTwo() function and any number.
const addTwo = num => {
  return num + 2;
}

const checkConsistentOutput = (func, val) => {
  let checkA = val + 2;
  let checkB = func(val);
  return checkA === checkB ? func(val) : 'inconsistent results';  
}

console.log(checkConsistentOutput(addTwo, 10));

// Inspect the code in main.js. Notice the different methods being called on the arrays: .forEach() .map() .filter() Run the code to see the output!
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);

// Iterate over the fruits array to log I want to eat a plus the name of each fruit to the console. For example, I want to eat a mango. You may use any form of callback you prefer.
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

// Iterate over fruits below
fruits.forEach(fruit =>
  console.log(`I want to eat a ${fruit}`));

// Add your code under the animals array and before the line console.log(secretMessage.join('')); Use .map() to create a new array that contains the first character of each string in the animals array. Save the new array to a const variable named secretMessage.
// Use .map() to divide all the numbers in bigNumbers by 100. Save the returned values to a variable declared with const called smallNumbers.

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(num => num/100);

console.log(smallNumbers)


// Call the .filter() method on randomNumbers to return values that are less than 250. Save them to a new array called smallNumbers, declared with const.
const randomNumbers = [375, 200, 3.14, 7, 13, 852];
// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
});

// Now let’s work with an array of strings. Invoke .filter() on the favoriteWords array to return elements that have more than 7 characters. Save the returned array to a const variable named longFavoriteWords.
const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(word => {
  return word.length > 7;
});

// Invoke .findIndex() on the animals array to find the index of the element that has the value 'elephant' and save the returned value to a const variable named foundAnimal.
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant';
});

// Call .findIndex() on the animals array and return the index of the first element that starts with 's'. Assign the returned value to a const variable named startsWithS.
const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's' ? true : false;
});

// Let’s practice calling .reduce() and using console.log() to check the values as .reduce() iterates through the array. To start, declare a new variable named newSum using the const keyword. Assign to newSum the value of calling .reduce() on newNumbers. You don’t need to provide any arguments to .reduce() yet. You’ll also see a TypeError: undefined is not a function but we’ll fix that after we add our callback function in the next step!
// Provide .reduce with an argument of a callback function. The callback function has two parameters. The first parameter is accumulator and the second parameter is currentValue. Use either a function expression or an arrow function.
// To check the value being used as we iterate through the array, add three statements to the function body of the callback: console.log('The value of accumulator: ', accumulator) console.log('The value of currentValue: ', currentValue); a return statement that adds accumulator to currentValue.
// Log the value of newSum to the console to see the return value of calling .reduce() on newNumbers.
// While we have this code set up, let’s also check what happens if you add a second argument to .reduce(). The second argument acts as an initial value for the accumulator. Add a second argument of 10 to .reduce().
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  console.log('The value of accumulator: ', accumulator);
  console.log('The value of currentValue: ', currentValue);
  return accumulator + currentValue;
}, 10);

console.log(newSum);

// In the code editor, there is an array called words. We want to create a new array of interesting words. The first thing we want to do is check if there are words that are fewer than 6 characters long. There is something missing in the words.some() method call. Fix this method so that true is printed to the console.
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
// Something is missing in the method call below
console.log(words.some(word => {
  return word.length < 6;
}));

// The .some() method returned true, which means there are some words in the array that are shorter than six characters. Use the .filter() method to save any words longer than 5 characters to a new variable called interestingWords, declared with const.
const interestingWords = words.filter((word) => {return word.length > 5});

// Complete the code between the parentheses to check if every element has more than 5 characters.
console.log(interestingWords.every((word) => {return word.length > 5}));

// Replace the word method in the first method call with a method that will do something to each of the values in the array and return undefined.
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
const nums = [1, 50, 75, 200, 350, 525, 1000];
//  Choose a method that will return undefined
cities.forEach(city => console.log('Have you visited ' + city + '?'));

// In the second method call, replace the word method with a method that will return a new array with only those elements longer than 7 characters.
const longCities = cities.filter(city => city.length > 7);

// In the third method call, replace the word method with a method that accepts an array containing multiple values and returns a single value.
const word = cities.reduce((acc, currVal) => {
  return acc + currVal[0]
}, "C");
console.log(word)

// In the fourth method call, replace the word method with a method that will return a new array of numbers returned from the function.
const smallerNums = nums.map(num => num - 5);

// In the fifth method call, replace the word method with a method that will return a boolean value.
nums.every(num => num < 0);
// OR nums.some(num => num < 0);


// ERROR MESSAGES

/*
Based on the following error stack trace, fill in the answers to the questions below:

------------------------------------------------------------------

/home/ccuser/workspace/learn-javascript-debugging-code/script.js:5
if (numberSum > total;) {
                     ^
            
SyntaxError: Unexpected token ;

------------------------------------------------------------------
*/

/*
From what file was this error thrown?
1 - Answer: script.js
On what line of that file was this error thrown?
2 - Answer: 5
What type of error was thrown in this stack trace?
3 - Answer: SyntaxError
What is the description of the error in this stack trace?
4 - Answer: Unexpected token
*/

myVariable++;
// 1 - What type of error will be thrown on the line above: ReferenceError

const myString = 42;
myString.substring(0);
// 2 - What type of error will be thrown on the line above: TypeError

const myRandomNumber; = Math.random();
// 3 - What type of error will be thrown on the line above: SyntaxError

/*
Debugging Errors
Here’s a process for efficiently working through your code’s errors one by one:

1. Run your code. Using the first error’s stack trace, identify the error’s type, description, and location.
2. Go to the file name and line number indicated by the error stack trace. Using the error type and description, identify the bug in your code.
3. Fix the bug and re-run your code.

Repeat steps 1-3 until your code no longer throws any errors.
While these steps may seem simple, it can be easy to get overwhelmed by errors in practice. Using these steps, you can tackle your errors one at a time and soon will have your code running error-free.

The code in the code editor currently contains three errors. Using the above steps, locate and fix all three errors in the code. Don’t be afraid of any error messages that appear, you are triggering them on purpose! Just take your time locating them and fixing them one at a time.

Note: The error messages in the terminal to the right may wrap to a new line based on your screen size. As a result, what you think is the end of a line might only be partway through it. Read through all of the error stack trace to ensure you find the information you’re looking for.
*/

// Code with ERRORS:
function isSumBigger(number1, number2, total {
  const sum = number1 + number2;
  
  if (numberSum > total;) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));

// FIXED CODE:
function isSumBigger(number1, number2, total) {
  const sum = number1 + number2;
  let numberSum;
  if (numberSum > total) {
    return true;
  } else {
    return false;
  }
}

// Should return true
console.log('isSumBigger(1, 3, 2) returns: ' + isSumBigger(1, 3, 2));

// Should return false
console.log('isSumBigger(1, 3, 5) returns: ' + isSumBigger(1, 3, 5));


// Debugging silent code with console.log()

// In the code editor, we’ve given you a function that is supposed to take a string containing a single word as an argument and return the capitalized version of that word. If the string contains multiple words (contains a space character, ' '), it should return null. Currently, this code is not working as expected. Take a look at our tests on lines 16-19. We expect the first function call to return 'Hey' and the second function call to return null. Run the code to see that it is not working as expected but also not throwing any errors.

// Let’s use console.log() to debug this code! Start by adding a console.log() statement to line 2 and printing out the word being passed into the function. This will help us ensure our function is being called properly and the word variable is set as we expect at the start of the function.
function capitalizeASingleWord(word) {
  console.log(word);
  if (!word.match(' ')) {
    
    return null;
  }
  
  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);
  
  firstLetter = firstLetter.toUpperCase();
  
  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// Should return null
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));

// Looking at the console output, both 'hey' and 'hey ho' are being printed as we expected. No bugs yet. Comment out the console.log() statement from the beginning of the function. Then add the following console.log() statement inside the if statement to see if it is working properly: console.log('Word value inside of if statement: ' + word); The behavior we want is for 'hey ho' to enter the if block and return null and for 'hey' to skip the if block and get capitalized.
// Look at the console output. 'hey' is being printed from inside the if statement block and 'hey ho' is not. This is the opposite behavior we expected. We found a bug! Looking at our if statement, we accidentally included a ! that is negating our condition. It is saying that if a word does not have multiple words, go into the if block, and if it does, move past it. Delete the ! character from the beginning of the if statement condition to fix the bug, then re-run our code. Our function now appears to be working as expected, so there is no need to continue stepping through the rest of the function.
function capitalizeASingleWord(word) {
  // console.log(word);
  if (word.match(' ')) {
    console.log('Word value inside of if statement: ' + word);
    return null;
  }
  
  let firstLetter = word.charAt(0);
  const restOfWord = word.slice(1);
  
  firstLetter = firstLetter.toUpperCase();
  
  return firstLetter + restOfWord;
}

// Should return "Hey"
console.log("capitalizeASingleWord('hey') returns: " + capitalizeASingleWord('hey')); 

// Should return null
console.log("capitalizeASingleWord('hey ho') returns: " + capitalizeASingleWord('hey ho'));

/*
Debugging with console.log()
Let’s synthesize our workflow from the previous exercise into a reusable set of debugging steps.

Go to the beginning of the malfunctioning code. Print out all starting variables, existing values, and arguments using console.log(). If the values are what you expect, move on to the next piece of logic in the code. If not, you have identified a bug and should skip to step 3.
After the next piece of logic in your code, add console.log() statements to ensure updated variables have the values that you now expect and that the block of code is being executed. If that logic is executing properly, continue repeating this step until you find a line not working as expected, then move to step 3.
Fix the identified bug and run your code again. If it now works as expected, you’ve finished debugging! If not, continue stepping through your code using step 2 until it does.
This might seem like a lot of printing, but once you get into the routine of it, it will be far faster than trying to stare at your code until you find your bugs. Let’s try this debugging process again in practice.

In the code editor, we have included a broken function for you to debug. This function is supposed to take two strings, compare the first letter of each, and return the string which comes later alphabetically. If the first letters of both strings are the same, it should return null.

At the bottom of the file, we’ve included three test cases and their expected outputs. If you run the code, you will see that they are not working as expected.

Using the console.log() debugging mindset laid out above, walk through the code, locate the three bugs we have included for you, and fix them.

This is a big task, so feel free to consult the hint for suggestions on where to place your console.log() statements and how to fix the code.
*/

// Code with ERRORS:
// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(1);
  const firstLetter2 = string2.charAt(1);
  
  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 > firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));


// FIXED CODE:
// Returns the string whose first letter is later in the alphabet. If both first letters are equal, returns null.
function getLaterFirstLetter(string1, string2) {
  const firstLetter1 = string1.charAt(0);
  const firstLetter2 = string2.charAt(0);
  
  if (firstLetter1 === firstLetter2) {
    return null;
  } else if (firstLetter1 < firstLetter2) {
    return string2;
  } else {
    return string1;
  }
}

// Should return "blueberry"
console.log("getLaterFirstLetter('avocado', 'blueberry') returns: " + getLaterFirstLetter('avocado', 'blueberry'));

// Should return "zebra"
console.log("getLaterFirstLetter('zebra', 'aardvark') returns : " + getLaterFirstLetter('zebra', 'aardvark'));

// Should return null
console.log("getLaterFirstLetter('astro', 'afar') returns: " + getLaterFirstLetter('astro', 'afar'));
















