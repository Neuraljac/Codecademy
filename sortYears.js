/*
Write a function sortYears() that takes in an array of years, and, using the built-in .sort() method, returns that array with the years sorted in descending order.

You can test your function when you’re ready by passing in the years array or by making your own array of years!
*/

function sortYears(years) {
    return years.sort((a, b) => b - a);
  }
  
  // Test the function with an array
  const yearsArray = [1990, 2005, 1983, 2010, 1975];
  console.log(sortYears(yearsArray)); // Output: [2010, 2005, 1990, 1983, 1975]
  