// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 *      The difference is that in the code for counter1, the let variable is inside of the function therefore it cannot be accessed outside of it, and the code for counter to has the variable outside of the function so it can be accessed at any time.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 *  The first function uses closer because the count variable is located inside of the function whereas it is located outside of the function of the second.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 * 
 * Counter 1 would be preferable in the case of wanting to keep track of a number and add one to it each time while also remembering what the previous count number was. Counter 2 is preferable if we just wanted to add 1 to 0.
 * 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
    return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning() {
  return Math.floor(Math.random() * Math.floor(3));
}

console.log('This is for task 2:', inning())


/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/

function finalScore(inning, numInnings) {
  let score = {
    'Home': 0,
    'Away': 0
  }
  for (let i = 0; i < numInnings; i++) {
    score.Home += inning();
    score.Away += inning();
  }
  return score;
}


console.log('This is for Task 3:', finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}


function scoreboard(inScore, inning, number) {
  let total = {
    'Home': 0,
    'Away': 0
  }
  for (let i = 1; i <= number; i++) {
    let score = inScore(inning, 1)
    total.Home += score.Home;
    total.Away += score.Away;
    console.log(`Inning ${i}: Away ${total.Away} - Home${total.Home}`)
  }
  return `Final Score Home ${total.Home} - Away ${total.Away}`
}
console.log(scoreboard(finalScore, inning, 9))