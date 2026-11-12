//Declare a Read-Only Variable with the const Keyword

function printManyTimes(str) {
  "use strict";

  const SENTENCE = str + " is cool!";
  
  for(let i = 0; i < str.length; i+=2) {
    console.log(SENTENCE);
  }

  SENTENCE = "You're not cool!"; // This line will cause an error because SENTENCE is a constant
  SENTENCE = SENTENCE + " is amazing!"; // This line will also cause an error for the same reason

}
printManyTimes("freeCodeCamp");