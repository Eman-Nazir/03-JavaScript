// Arrays
// Basic array methods
// Non Primitive
// Arrays and objects
const arr = ["Musa", NaN, true, 10, "Hadi", undefined];
console.log("Array =======", arr);
console.log("Array =======", arr.length);
console.log("Array value =======", arr[1]);
console.log("Array value =======", arr[5]);              
console.log("Array value =======", arr[arr.length / 2 - 1]);
console.log("Array value =======", arr[arr.length - 1]);
console.log("Array value =======", arr[arr.length - arr.length]);
console.log("Array value =======", arr[0]);
//  Arrays 
 // Basic array methods
// POP
const fruitCollection = ["apple", "mango", "banana", "grape", "date"];
console.log(fruitCollection);
const evenNumbersPop = [0, 2, 4, 6, 8];
console.log(evenNumbersPop);
evenNumbersPop.pop();
console.log(evenNumbersPop);
// PUSH
const evenNumbersPush = [0, 2, 4, 6, 8];
console.log(evenNumbersPush);
evenNumbersPush.push(11);
console.log(evenNumbersPush);
// UNSHIFT
const evenNumbersUnshift = [0, 2, 4, 6, 8];
console.log(evenNumbersUnshift);
evenNumbersUnshift.unshift(-2); 
console.log(evenNumbersUnshift);
// SHIFT
const evenNumbersShift = [0, 2, 4, 6, 8];
console.log(evenNumbersShift);
evenNumbersShift.shift();
console.log(evenNumbersShift);
// CONCAT
const evenNumbersConcat = [0, 2, 4, 6, 8];
const animalsConcat = ["DOG", "CAT", "RAT"];
console.log(evenNumbersConcat);
console.log(animalsConcat);
console.log(evenNumbersConcat.concat(animalsConcat));
const oddNumbers = [1, 3, 5, 7];
console.log(evenNumbersConcat.concat(animalsConcat, oddNumbers));
// INDEX OF
const evenNumbersIndex = [0, 2, 4, 6, 8];
console.log(evenNumbersIndex);
console.log(evenNumbersIndex.indexOf(8));
console.log(evenNumbersIndex.indexOf(18));
// INCLUDE
const animalsIncludes = ["DOG", "CAT", "RAT"];
console.log(animalsIncludes);
console.log(animalsIncludes.includes("RAT"));
console.log(animalsIncludes.includes("RaT")); 
// REVERSE
const numberList1 = [1, 3, 4, 5, 6, 7, 3, "dd", 55, 35, 58, 53, 4, 5];
console.log(numberList1);
console.log(numberList1.reverse());
const numberList2 = [1, 3, 4, 5, 6, 7, 3, "dd", 55, 35, 58, 53, 4, 5, , , , ,];
console.log(numberList2);
console.log(numberList2.reverse());
// SORT
const animalsSort = ["DOG", "CAT", "RAT", "Lion", "MONKEY", "dog", "cat", "rat", "lion", "monkey"];
console.log(animalsSort);
console.log(animalsSort.sort());
const numberList3 = [1, 3, 4, 5, 6, 7, 3, "dd", 55, 35, 58, 53, 4, 5];
console.log(numberList3);
console.log(numberList3.sort((a, b) => a - b)); 
// SLICE
const animalsSlice = ["DOG", "CAT", "RAT", "Lion", "MONKEY", "dog", "cat", "rat", "lion", "monkey"];
console.log(animalsSlice);
console.log(animalsSlice.slice(6));
console.log(animalsSlice.slice(6, 9));
// SPLICE
const animalsSplice = ["DOG", "CAT", "RAT", "Lion", "MONKEY", "dog", "cat", "rat", "lion", "monkey"];
console.log(animalsSplice);
console.log(animalsSplice);
console.log(animalsSplice);
const animalsModify = ["DOG", "CAT", "RAT", "Lion", "MONKEY", "dog", "cat", "rat", "lion", "monkey"];
console.log(animalsModify);
console.log(animalsModify.splice(6, 3, "Hello", "HELLO", "HELLO ")); 
console.log(animalsModify);
const animalsAnotherModify = ["DOG", "CAT", "RAT", "Lion", "MONKEY", "dog", "cat", "rat", "lion", "monkey"];
console.log(animalsAnotherModify);
console.log(animalsAnotherModify.splice(6, 1, "Hello", "HELLO", "HELLO ")); 
console.log(animalsAnotherModify);
const numberSet1 = [10, 20, 30, 40, 50, 60, 60];
const midAndAvgOfNumbers = function (arr) {
  const isEvenLength = arr.length % 2 === 0;
  if (isEvenLength) {
    const mid = arr.length / 2;
    const midValue = arr[mid];
    const beforeValue = arr[mid - 1];
    console.log("MID Values:", beforeValue, midValue);
    console.log("Average MID:", (beforeValue + midValue) / 2);
  } else {
    return arr[(arr.length - 1) / 2]; 
  }
};
console.log(midAndAvgOfNumbers(numberSet1));






