/*
Challenge Project: Credit Card Checker
Overview
This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

Project Goals
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

Setup Instructions
If you choose to do this project on your computer instead of Codecademy, you can download what you’ll need by clicking the “Download” button below. You’ll need to open and work in main.js in a text editor. To edit main.js, use your text editor of choice. If you need a recommendation or help to install an editor, we recommend looking into our article about setting up a text editor for web development (Follow along until you get to the section: “Practice: Let’s Make a Project”). To run main.js on your computer, you will need to install Node.js. If you need help installing Node.js, read our article on installing Node.
*/

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

/*
Look over the starter code. There are 15 arrays that each contain the digits of separate credit card numbers. They all have prefixes to reflect their status, i.e. variables that start with valid contain a valid number, whereas invalid do not, and mystery variables can be either. There is also a batch array that stores all of the provided credit cards in a single array.

You’ll use these arrays later to check if your functions are working properly.
*/

/*
Create a function, validateCred() that has a parameter of an array. The purpose of validateCred() is to return true when an array contains digits of a valid credit card number and false when it is invalid. This function should NOT mutate the values of the original array.

To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:

1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
3. Sum up all the digits in the credit card number.
4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

Here’s a visual that outlines the steps. Check your function using both the provided valid and invalid numbers.
*/

function validateCred(cardDigits) {
    // Create a copy of the array to avoid mutating the original array
    const digitsCopy = cardDigits.slice();
  
    // Step 1: Starting from the farthest digit to the right, iterate to the left
    for (let i = digitsCopy.length - 2; i >= 0; i -= 2) {
      // Step 2: Double every other digit (starting from the right)
      let doubledDigit = digitsCopy[i] * 2;
  
      // If the doubled digit is greater than 9, subtract 9 from its value
      if (doubledDigit > 9) {
        doubledDigit -= 9;
      }
  
      // Replace the original digit with the doubled digit
      digitsCopy[i] = doubledDigit;
    }
  
    // Step 3: Sum up all the digits in the credit card number
    const sum = digitsCopy.reduce((acc, curr) => acc + curr, 0);
  
    // Step 4: Check if the sum modulo 10 is 0
    return sum % 10 === 0;
  }
  
  // Test the function with valid and invalid numbers
  console.log(validateCred(valid1)); // Output: true
  console.log(validateCred(valid2)); // Output: true
  console.log(validateCred(invalid1)); // Output: false
  console.log(validateCred(invalid2)); // Output: false

/*
Create another function, findInvalidCards() that has one parameter for a nested array of credit card numbers. The role of findInvalidCards() is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.
*/

function findInvalidCards(cardsArray) {
    // Array to store invalid card numbers
    const invalidCards = [];
  
    // Iterate through each card number in the nested array
    for (let i = 0; i < cardsArray.length; i++) {
      const cardDigits = cardsArray[i];
  
      // Check if the card number is invalid using the validateCred function
      if (!validateCred(cardDigits)) {
        // If the card number is invalid, add it to the invalidCards array
        invalidCards.push(cardDigits);
      }
    }
  
    return invalidCards;
  }
  
  // Test the function with the batch array
  console.log(findInvalidCards(batch));


  /*  
After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, idInvalidCardCompanies() that has one parameter for a nested array of invalid numbers and returns an array of companies.

Currently, there are 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:

First Digit	Company
3	Amex (American Express)
4	Visa
5	Mastercard
6	Discover
If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.

idInvalidCardCompanies() should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.
*/

function idInvalidCardCompanies(invalidCards) {
    // Object to store company names based on their first digits
    const companies = {
      3: 'Amex (American Express)',
      4: 'Visa',
      5: 'Mastercard',
      6: 'Discover'
    };
  
    // Array to store unique company names
    const uniqueCompanies = [];
  
    // Iterate through the nested array of invalid numbers
    for (let i = 0; i < invalidCards.length; i++) {
      const firstDigit = invalidCards[i][0];
  
      // Check if the first digit corresponds to a known company
      if (companies[firstDigit]) {
        // Add the company to the uniqueCompanies array if it's not already included
        if (!uniqueCompanies.includes(companies[firstDigit])) {
          uniqueCompanies.push(companies[firstDigit]);
        }
      } else {
        // If the first digit doesn't correspond to any known company, print a message
        console.log("Company not found for the card starting with digit:", firstDigit);
      }
    }
  
    return uniqueCompanies;
  }
  
  // Test the function with the batch array to find invalid card companies
  const invalidCards = findInvalidCards(batch);
  console.log(idInvalidCardCompanies(invalidCards));

