// Write a function, greetWorld(). Your function should have no parameters and return the string 'Hello, World!'.

// Helpful Notes:

// Your function can be a function expression or a function declaration.
// Notice that the prompt requires your function to return the string—it will not pass the test if the string is printed to the console rather than returned.
// Your code must return 'Hello, World!' exactly. The test will not pass with the following strings: 'hello, world!', 'Hello, world!', 'Hello World!', 'Hello World', 'Hello, World.', etc.
// Write your function here:
const greetWorld = () => {
    return 'Hello, World!';
  }
  
// The most common minimum age to vote is 18. Write a function canIVote() that takes in a number, representing the person’s age, and returns the boolean true if they are 18 years old or older, and the boolean false if they are not.
// Write your function here:
const canIVote = number => {
    if (number >= 18) {
      return true;
    } else {
      return false;
    }
  }
console.log(canIVote(19)) // Should print true
  
// Write a function, agreeOrDisagree(), that takes in two strings, and returns 'You agree!' if the two strings are the same and 'You disagree!' if the two strings are different.
const agreeOrDisagree = (stringOne, stringTwo) => {
    if (stringOne === stringTwo) {
      return 'You agree!';
    } else {
      return 'You disagree!';
    }
  }
console.log(agreeOrDisagree("yep", "yep"))   // Should print 'You agree!'

// Write a function, lifePhase(), that takes in a person’s age, as a number, and returns which phase of life they are in.
//Here are the classifications:
//0-3 should return 'baby'
//4-12 should return 'child'
//13-19 should return 'teen'
//20-64 should return 'adult'
//65-140 should return 'senior citizen'
//If the number is less than 0 or greater than 140, the program should return 'This is not a valid age'
const lifePhase = age => {
    if (age < 0 || age > 140) {
        return 'This is not a valid age'
    } else if (age < 4) {
        return 'baby'
    } else if (age < 13) {
        return 'child'
    } else if (age < 20) {
        return 'teen'
    } else if (age < 65) {
        return 'adult'
    } else {
        return 'senior citizen'
    }
}
console.log(lifePhase(5)) 

// Write a function, finalGrade(). It should:
//take three arguments of type number
//find the average of those three numbers
//return the letter grade (as a string) that the average corresponds to
//return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
//0-59 should return: 'F'
//60-69 should return: 'D'
//70-79 should return: 'C'
//80-89 should return: 'B'
//90-100 should return: 'A'

const finalGrade = (midterm, final, homework) => {
    if ((midterm < 0 || midterm > 100) || (final < 0 || final > 100) || (homework < 0 || homework > 100)) {
        return 'You have entered an invalid grade.'
    }
    let average = (midterm + final + homework) / 3
    if (average < 60) {
        return 'F'
    }
    else if (average < 70) {
        return 'D'
    }
    else if (average < 80) {
        return 'C'
    }
    else if (average < 90) {
        return 'B'
    } else {
        return 'A'
    }
}

// Write a function, reportingForDuty(), that has two string parameters, rank and lastName, and returns a string in the following format: ‘rank lastName reporting for duty!’
//reportingForDuty('Private', 'Fido') 
// Should return 'Private Fido reporting for duty!'
const reportingForDuty = (rank, lastName) => {
    return rank + ' ' + lastName + ' reporting for duty!';
  }
console.log(reportingForDuty('Private', 'Fido'))
  
// We wrote a function, rollTheDice(), which is supposed to simulate two dice being rolled and totalled. It’s close to doing what we want, but there’s something not quite right. Can you fix our code, please?
// Broken code:
//const rollTheDice = () => {
    // Math.random() gives us a random number from 0 up to, but not including, 1
    // We multiplied that by 6 to get a number between 0 and up to, but not including, 6
    // But since we actually wanted numbers from 1 to 6, inclusive, we added 1
 //     let die1 = Math.random() * 6 + 1
 //     let die2 = Math.random() * 6 + 1
 //     return die1 + die2
 // }
 const rollTheDice = () => {
    let die1 = Math.floor(Math.random() * 6 + 1)
    let die2 = Math.floor(Math.random() * 6 + 1)
    return die1 + die2
} 

// 


















