let raceNumber = Math.floor(Math.random() * 1000);
let registerEarly = false;
let runnerAge = 18;

if (runnerAge >= 18 && registerEarly === true) {
  raceNumber += 1000;
} 

if (runnerAge > 18 && registerEarly === true) {
  console.log(`Your number is ${raceNumber}. Your race will begin at 9:30am.`);
} else if (runnerAge > 18 && registerEarly !== true) {
  console.log(`Your number is ${raceNumber} and you are late. Late adults run at 11:00am.`);
} else if (runnerAge < 18) {
  console.log(`Your number is ${raceNumber}. Youth registrants run at 12:30pm (regardless of registration).`);
} else {
  console.log(`Please see registration desk.`)
}