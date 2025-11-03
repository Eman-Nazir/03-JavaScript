// Non Primitive
// Arrays and objects

// const arr = ["Rehman", NaN, true, 10, "Shahid", undefined];

// console.log("Array =======", arr);
// console.log("Array =======", arr.length);
// console.log("Array value =======", arr[1]);
// console.log("Array value =======", arr[5]);              
// console.log("Array value =======", arr[arr.length / 2 - 1]);
// arr.length = 6 <6/2-1> , <3-1> = 2 
// index 2 ki value put ho gi  
// console.log("Array value =======", arr[arr.length - 1]);
// console.log("Array value =======", arr[arr.length - arr.length]);
// arr.length = 6  (6-6=0) index 0 value put ho gi 

// console.log("Array value =======", arr[0]);

// Arrays  // Basic array methods

// const someRandomNumbers = [1, 2, 3, 4, 5, 6, 7,8,9];
// someRandomNumbers = [1, 6, 7];
// const someNum = 10;
// someNum = 10;
// delete someRandomNumbers[5];
// for (let index = 0; index < someRandomNumbers.length; index++) {
//   console.log(someRandomNumbers[index]);
// }
// someRandomNumbers[0] = 10;
// console.log("Random", someRandomNumbers[0], someRandomNumbers);


// // Insert a new value at the end of array
// someRandomNumbers[someRandomNumbers.length] = 100
// delete someRandomNumbers[someRandomNumbers.length - 1]
// console.log("ARRAY", someRandomNumbers)
// someRandomNumbers[someRandomNumbers.length] = 300
// console.log("ARRAY", someRandomNumbers)
// // 1- push, 2- pop, 3- shift, 4- unshift
// someRandomNumbers.push(1000)
// console.log("ARRAY", someRandomNumbers)
// // Remove last element
// someRandomNumbers.pop()
// console.log("ARRAY", someRandomNumbers)
// someRandomNumbers.push(2000)
// console.log("ARRAY", someRandomNumbers)




// POP 

// const fruitcolection = ["apple","mango", "banana","grape","date"];
// console.log(fruitcolection)

const evenNumbers = [0,2,4,6,8]
console.log(evenNumbers);
evenNumbers.pop();
console.log(evenNumbers);

// PUSH 

// const evenNumbers = [0,2,4,6,8]
// console.log(evenNumbers);
// evenNumbers.push(11);
// console.log(evenNumbers);

// UNSHIFT 

// const evenNumbers = [0,2,4,6,8]
// console.log(evenNumbers);
// evenNumbers.unshift(0);
// console.log(evenNumbers);

// SHIFT 

// const evenNumbers = [0,2,4,6,8]
// console.log(evenNumbers);
// evenNumbers.shift();
// console.log(evenNumbers);


// CONCAT 

// const evenNumbers = [0,2,4,6,8]
// const animals = ["DOG","CAT","RAT"]
// console.log(evenNumbers)
// console.log(animals)
// console.log(evenNumbers.concat(animals))


// const evenNumbers = [0,2,4,6,8]
// const animals = ["DOG","CAT","RAT"]
// const oddNumber = [1,3,5,7]
// console.log(evenNumbers)
// console.log(animals)
// console.log(oddNumber)
// console.log(evenNumbers.concat(animals,oddNumber))



// INDEX OF 

// const evenNumbers = [0,2,4,6,8]
// console.log(evenNumbers)
// console.log(evenNumbers.indexOf(8))


// const evenNumbers = [0,2,4,6,8]
// console.log(evenNumbers)
// console.log(evenNumbers.indexOf(18))



// INCLUDE 

// const animals1 = ["DOG","CAT","RAT"]
// console.log(animals1)
// console.log(animals1.includes("RAT"))


// const animals2 = ["DOG","CAT","RAT"]
// console.log(animals2)
// console.log(animals2.includes ("RaT"))



// REVERSE 

// const number = [1,3,4,5,6,7,3,"dd",55,35,58,53,4,5]
// console.log(number)
// console.log(number.reverse())

// const number = [1,3,4,5,6,7,3,"dd",55,35,58,53,4,5, , , , ,]
// console.log(number)
// console.log(number.reverse())



// SORT 
// const animals = ["DOG","CAT","RAT","Lion", "MONKEY","dog","cat","rat","lion", "monkey"]
// console.log(animals)
// console.log(animals.sort())




// const number = [1,3,4,5,6,7,3,"dd",55,35,58,53,4,5]
// console.log(number)
// console.log(number.sort())


// const number = [1,2,3,4,56,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]
// console.log(number)
// console.log(number.sort())

// SLICE 

// const animals = ["DOG","CAT","RAT","Lion", "MONKEY","dog","cat","rat","lion", "monkey"]
// console.log(animals)
// console.log(animals.slice(6))


// const animals = ["DOG","CAT","RAT","Lion", "MONKEY","dog","cat","rat","lion", "monkey"]
// console.log(animals)
// console.log(animals.slice(6,9))

// SPLICE

// const animals = ["DOG","CAT","RAT","Lion", "MONKEY","dog","cat","rat","lion", "monkey"]
// console.log(animals)
// console.log(animals.splice(6,1))
// console.log(animals)
// 6 wala index remove kiya ha wo is index ma nahi showw ho ga 

// const animals = ["DOG","CAT","RAT","Lion", "MONKEY","dog","cat","rat","lion", "monkey"]
// console.log(animals)
// console.log(animals.splice(6,3))
// console.log(animals)


// const animals = ["DOG","CAT","RAT","Lion", "MONKEY","dog","cat","rat","lion", "monkey"]
// console.log(animals)
// console.log(animals.splice(6,3 , "Hello", "HELLO" , "HELLO "))
// console.log(animals)

// const animals = ["DOG","CAT","RAT","Lion", "MONKEY","dog","cat","rat","lion", "monkey"]
// console.log(animals)
// console.log(animals.splice(6,1 , "Hello", "HELLO" , "HELLO "))
// console.log(animals)




// example in which we find mid value and average by using if else in array 

// const numbers = [10, 20, 30, 40, 50, 60];

// const numbers = [10, 20, 30, 40, 50, 60,60];

// const midAndAvgOfNumbers = function (arr) {
//   const mid = arr.length % 2;

// if (mid === 0) {
    // avg of mid two numbers
//     const mid = arr.length / 2;
//     const midValue = arr[mid];
//     const beforeValue = arr[mid - 1];
//     console.log("MID === ", beforeValue, midValue);
//     console.log("MID === ", (beforeValue + midValue)/2);
//   } 

// else {
//     return arr[(arr.length - 1) / 2];
//   }

// };

// console.log(midAndAvgOfNumbers (numbers));



// agar array ma 6 value ho gi tu us ka mid aye ga hi nahi 