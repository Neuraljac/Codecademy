// This code is designed to tell you how old you are in dog years. 

// Create variable myAge and set it to whatever age you want.
let myAge = 35;

// Create variable earlyYears and set it to 2.
let earlyYears = 2;

earlyYears *= 10.5;

// Defind laterYears as the number of years not including earlyYears.
laterYears = myAge - 2;

laterYears *= 4;

//console.log(earlyYears);
//console.log(laterYears);

// Calculate your total age in dog years.
myAgeInDogYears = earlyYears + laterYears;

// Create your name in lowercase letters.
myName = 'Jared'.toLowerCase();

// Print the statement
console.log(`My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.`)