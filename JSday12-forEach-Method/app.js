// forEach
// someRandomNumbers.forEach(function (value, index, arr) {
//   console.log("forEach", value, index, arr);
// });

// const forEachCallback = function (value, index, arr) {
//   console.log("forEach", value, index);
// };
// someRandomNumbers.forEach(forEachCallback);

// console.log("FOR_", someRandomNumbers.forEach());



// Higher order functions and callbacks

// const higherOrderFunction = function (callback) {
//   callback("I'm newbie in js");
// };

// const callbackFunction = function (log) {
//   console.log("LOG ===", log);
// };
// higherOrderFunction(callbackFunction);



// Factorial



// let numbers = [5, 4, 3, 2, 1];
// let factorial = 1;
// numbers.forEach(function(num, index, array) {
//   if (index < array.length - 1) {
//     console.log(num, index, array);
//   }
//   factorial = factorial* num;
// });

// console.log("Factorial of 5 is: " + factorial);




// let numbers = [1, 2, 3, 4, 5];
// let factorial = 1;

// numbers.forEach(function(num) {
//   factorial = factorial* num;
// });

// console.log("Factorial of 5 is: " + factorial);




// let factorial = 1;
// let number = [5, 4, 3, 2, 1];

// number.forEach(function(num) {

//     console.log(`${factorial} * ${num} = ${factorial * num}`);

//   factorial = factorial* num;

// });

// console.log('The factorial of 5 is ' , factorial);



// EXAMPLE 

// const numbers = [10, 20, 30, 40, 50];

// numbers.forEach(function(number, index) {
//     console.log(`Index: ${index}, Value: ${number}`);
// });


// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach(function (number) {
//     console.log(number * 2);
// });



// const fruits = ['Apple', 'Banana', 'Cherry'];

// fruits.forEach(function(fruit, index) {
//     console.log(`Fruit ${index + 1}: ${fruit}`);
// });


// const numbers = [1, 2, 3, 4];

// numbers.forEach(function(number, index) {
//     //  square = number * number;
//     const square = number * number;
//     console.log(`The square of ${number} at index ${index} is =     ${square}`);
// });

// EXAMPLE 


// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];

// people.forEach(function(person, index) {
//     console.log(`Person ${index + 1}: Name - ${person.name}, Age - ${person.age}`);
// });


// EXAMPLE 


//  const people = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 30 },
//   { name: 'Charlie', age: 35 }
// ];


// function displayPerson(person, index) {
//   console.log(`Person ${index + 1}: Name - ${person.name}, Age - ${person.age}`);
// }

// people.forEach(displayPerson);



// const items = ['Pen', 'Notebook', 'Eraser'];

// items.forEach(function(item, index) {
//     console.log(`Item ${index + 1}: ${item}`);
// });



// Example 2 

// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// numbers.forEach(function (number) {
//     doubledNumbers.push(number * 2);
// });

// console.log(numbers); 
// console.log("2's multiple" ,doubledNumbers); 


// Example 3 

// const fruits = ['apple', 'banana', 'orange'];
// const fruitObject = {};

// fruits.forEach(function (fruit, index) {
//     fruitObject[index] = fruit;
   
// });

// console.log(fruits); 
// console.log( "FOR EACH =====",fruitObject); 




// Example 5 

// const scores = [85, 90, 78, 92];
// const gradeMessages = [];

// scores.forEach(function (score) {
//     let message;
//     if (score >= 90) {
//         message = 'Excellent';
//     } else if (score >= 80) {
//         message = 'Good';
//     } else {
//         message = 'Needs Improvement';
//     }
//     gradeMessages.push(message);
// });

// console.log(gradeMessages); 

