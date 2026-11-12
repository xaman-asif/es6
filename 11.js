// Use the spread operator to evaluate arrays in-place

const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;
(function() {
  arr4 = [...arr3]; // change this line
  arr3[0] = 'potato'
})();
console.log(arr4);