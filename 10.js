// Use the rest parameter with function parameters

// const sum = (function () {
//   return function sum(x, y, z) {
//     const args = [x, y, z];
//     return args.reduce((a, b) => a + b, 0);
//   };
// })();
// console.log(sum(1, 2, 3));

const sumRest = (function() {
  const base = 100; // This lines executes once when the function is created, not each time the function is called.

  return function sum(...args) {
    console.log(args[0]);
    console.log(args[1]);
    console.log(args[2]);
    console.log(args[3]);
    
    return base + args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sumRest(1, 2, 3, 4));