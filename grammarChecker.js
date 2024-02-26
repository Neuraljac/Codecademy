let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

// Step 1: Log storyWords to the console
console.log(storyWords);

// Step 2: Log the final story to the console
console.log(storyWords.join(' '));

// Step 3: Count the number of words in the story
let count = 0;
storyWords.forEach(function(word) {
  count++;
});
console.log(count);

// Step 4: Filter out instances of the word "literally"
storyWords = storyWords.filter(function(word) {
  return word !== unnecessaryWord;
});

// Step 5: Filter out the value of unnecessaryWord from the story
storyWords = storyWords.filter(function(word) {
  return word !== unnecessaryWord;
});

// Step 6: Spell-check words in the story
storyWords = storyWords.map(function(word) {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

// Step 7: Find the index of the bad word
let badWordIndex = storyWords.findIndex(function(word) {
  return word === badWord;
});

console.log(badWordIndex); // Log the index of the bad word

// Step 8: Replace the bad word with 'really'
if (badWordIndex !== -1) {
  storyWords[badWordIndex] = 'really';
}

// Step 9: Check if every word has 10 characters or less
let lengthCheck = storyWords.every(function(word) {
  return word.length <= 10;
});

console.log(lengthCheck); // Log the result of length check

// Step 10: Replace the word longer than 10 characters
let longWordIndex = storyWords.findIndex(function(word) {
  return word.length > 10;
});

if (longWordIndex !== -1) {
  storyWords[longWordIndex] = 'glorious'; // Replacing with 'glorious'
}

// Step 11: Log the final story after all modifications
console.log(storyWords.join(' '));
