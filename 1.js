//Explore Differences Between the var and let Keywords

var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

  console.log(quote);
}

catTalk();