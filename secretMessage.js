let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
// console.log(secretMessage.length); //Prints 24

const removed = secretMessage.pop();
//console.log(secretMessage.length); //Prints 23

secretMessage.push('to', 'Program');

secretMessage[7] = 'right';

secretMessage.shift();

secretMessage.unshift('Programming');

// Find the index of the words to be replaced
let indexToRemove = secretMessage.indexOf('get');
let wordsToRemove = 5; // Number of words to remove

// Use splice to remove the specified words and add 'know' in their place
secretMessage.splice(indexToRemove, wordsToRemove, 'know');

console.log(secretMessage.join(' '));

//console.log(secretMessage);
