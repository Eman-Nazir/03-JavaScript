// Loops in arrays
// 1- for loop
// 2- while loop
// 3- do while loop

// 1- for loop
// for(counter, condition, increment/decrement){

// }

// Increment/Decrement

// const count = 5;
// post increment / decrement
// count++
// pre increment
// ++count;
// console.log("count", ++count);
// console.log("count", count++);

// console.log("count", --count);
// console.log("count", count);

//  Postfix Increment

// const count = 5;
// const newCount = count + 1; 
// console.log(count);    
// console.log(newCount); 

//  Postfix Decrement

// const count = 5;
// const newCount = count - 1; 
// console.log(count);    
// console.log(newCount); 

//  Prefix Increment

// const count = 5;
// const newCount = 1 + count; 
// console.log(count);    
// console.log(newCount); 

// Prefix Decrement

// const count = 5;
// // const newCount = count - 1; 
// // const newCount = 1 - count; 
// console.log(count);    
// console.log(newCount); 


// loops in array 


const arr = ["Rehman", NaN, true, 10, "Shahid", undefined];

// console.log("Array =======", arr);
// console.log("Array =======", arr.length);
// console.log("Array value =======", arr[1]);
// console.log("Array value =======", arr[5]);
// console.log("Array value =======", arr[arr.length / 2 - 1]);
// console.log("Array value =======", arr[arr.length - 1]);
// console.log("Array value =======", arr[arr.length - arr.length]);
// console.log("Array value =======", arr[0]);

// for(let index = 0; index < arr.length; index++){
//   console.log("Array value =======", arr[index])
// }

// const multiArray = [1, "name", [1, 2, 4, null]];
// console.log(multiArray);

const tabularArray = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
  [21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  [31, 32, 33, 34, 35, 36, 37, 38, 39, 40],
  [41, 42, 43, 44, 45, 46, 47, 48, 49, 50],
];

for (let outerIndex = 0; outerIndex < tabularArray.length; outerIndex++)
   {
  const innerArray = tabularArray[outerIndex];


  for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++)
     {
    console.log(`${outerIndex} x ${innerIndex} ===> ${innerArray[innerIndex]}`);
  }
}

