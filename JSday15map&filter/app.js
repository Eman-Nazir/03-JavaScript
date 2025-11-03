// MAP METHOD 
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const callback1 = function (index, value, number) {
  console.log("CALLED", value,index,number);
  const multiple = value * 2;
  return multiple;
};
const mappedArray1 = numbers.map(callback1);
console.log("mappedArray", mappedArray1);
// const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (value) {
  return value * value; 
});
console.log(squaredNumbers);  
// const numbers = [1, 2, 3, 4, 5];
const callback2 = function(value,index,arr){
  console.log("CALLED", value,index,arr);
  const squaredNumbers = value * value ;
  return  squaredNumbers ;
}
const mapArray = numbers.map(callback2)
console.log("output===" ,     mapArray )
const celsiusTemps = [0, 10, 20, 30];
const fahrenheitTemps = celsiusTemps.map(function (value) {
  return value * 1.8 + 32;  
});
console.log(fahrenheitTemps); 
const numbers3 = [2, 4, 6, 8, 10];
const callback3 = function (value) {
  return value + 1; 
};
const mappedArray = numbers3.map(callback3);
console.log("mappedArray", mappedArray);
// //  example:
const numbers4 = [5, 10, 15, 20 ,25,30,40,45,50,55,28];
const callback4 = function (value) {
  return value / 5; 
};
const mappedArray4 = numbers4.map(callback4);
console.log("mappedArray", mappedArray4);
// FILTER METHOD 
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterCallback = function (value, index, arr) {
  console.log("CALLED", value, index, arr);
  const isEven = value % 2 === 0;
  return isEven;
};
const filteredArray = numbers2.filter(filterCallback);
console.log("filteredArray", filteredArray);
// odd 
const numbersOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterOddCallback = function (value) {
  console.log("CALLED", value);
  const isOdd = value % 2 !== 0;
  return isOdd;
};
const oddNumbers = numbersOne.filter(filterOddCallback);
console.log("oddNumbers", oddNumbers);
// Example 2
const numbersTwo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterGreaterThanFive = function (value, index, arr) {
  console.log("CALLED", value, index, arr);
  return value > 5;
};
const greaterThanFiveArray = numbersTwo.filter(filterGreaterThanFive);
console.log("greaterThanFiveArray", greaterThanFiveArray);
// Example 3
const words = ['apple', 'banana', 'cat', 'dog', 'egg'];
const filterLongWords = function (value, index, arr) {
  console.log("CALLED", value, index, arr);
  return value.length > 3;
};
const longWords = words.filter(filterLongWords);
console.log("longWords", longWords);
// Example 4: 
const number = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const filterSmallNumbers = function (value) {
  console.log("CALLED", value);
  return value <= 5;
};
const smallNumbers = number.filter(filterSmallNumbers);
console.log("smallNumbers", smallNumbers);
// Example 5
const people = [
  { name: 'Huma', age: 25 },
  { name: 'Hina', age: 18 },
  { name: 'Saba', age: 30 },
  { name: 'Eman', age: 16 }
];
const filterAdults = function (people) {
  console.log("CALLED", people);
  return people.age >= 18;
};
const adults = people.filter(filterAdults);
console.log("adults", adults);
// // Example 6 
const values = [0, 'hello', false, true, undefined, null, 42, 'world'];
const filterTruthy = function (value) {
  console.log("CALLED", value);
  return Boolean(value);
};
const truthyValues = values.filter(filterTruthy);
console.log("truthyValues", truthyValues);

