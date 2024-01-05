// Define kelvin as a constant variable with the value of 293.
const kelvin = 0;

// Define kelvin as a variable with a value 273 less than kelvin. 
let celcius = kelvin - 273;

// Devine fahrenheit as converted from celcius.
let fahrenheit = celcius * (9/5) + 32;

// Remove the decimal.
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)