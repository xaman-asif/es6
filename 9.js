//Set default parameters for your functions

const increment = function increment(number, value = 2) {
    return number + value;
};

console.log(increment(5, 2)); 
console.log(increment(5)); 