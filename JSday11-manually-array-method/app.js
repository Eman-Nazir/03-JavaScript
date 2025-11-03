// Popped Element Function
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const poppedElement = function (arr) {
    arr.length = arr.length - 1;
    return arr;
};
poppedElement(arr);
console.log("Array after pop:", arr);

let newArr = [];
for (let i = 0; i < arr.length - 1; i++) {
    newArr[i] = arr[i];
}
console.log("New Array after manual pop:", newArr);

// Higher-Order Function for Pop
function removeLastElement(arr, callback) {
    let newArr = [];
    for (let i = 0; i < arr.length - 1; i++) {
        newArr[i] = arr[i];
    }
    callback(newArr);
}
function printArray(newArr) {
    console.log("Popped element with HOF:", newArr);
}
removeLastElement(arr, printArray);

// Pushed Element Functions
const pushedElement1 = function (arr, element) {
    arr[arr.length] = element;
    return arr;
};
pushedElement1(arr, 10);
console.log("Array after push:", arr);

const pushedElement2 = function (arr, element) {
    for (let i = arr.length; i < arr.length + 1; i++) {
        arr[i] = element;
        break;
    }
    return arr;
};
pushedElement2(arr, 20);
console.log("Array after second push:", arr);
// Higher-Order Function for Push
const pushElement = function (arr, element, callback) {
    callback(arr, element);
};
const addElement = function (arr, element) {
    arr[arr.length] = element;
};
pushElement(arr, 'newarray', addElement);
console.log("Array after HOF push:", arr);
// Manual Shift Implementation
function manualShift(arr) {
    if (arr.length === 0) {
        return undefined;
    }
    for (let i = 1; i < arr.length; i++) {
        arr[i - 1] = arr[i];
    }
    arr.length = arr.length - 1;
}

manualShift(arr);
console.log("Array after shift:", arr);

// Higher-Order Function for Shift
const manualShiftWithCallback = function (arr, callback) {
    for (let i = 1; i < arr.length; i++) {
        callback(arr, i);
    }
    arr.length = arr.length - 1;
};

const shiftLeft = function (arr, i) {
    arr[i - 1] = arr[i];
};

manualShiftWithCallback(arr, shiftLeft);
console.log("Array after HOF shift:", arr);

// Unshift Implementation
const unShiftElement1 = function (arr, element) {
    const newArray = [];
    for (let i = 0; i < arr.length + 1; i++) {
        if (i === 0) {
            newArray[i] = element;
        } else {
            newArray[i] = arr[i - 1];
        }
    }
    return newArray;
};

const modifiedArray = unShiftElement1(arr, 0);
console.log("Original Array:", arr);
console.log("Array after unshift:", modifiedArray);

// Unshift with Higher-Order Function
const unShiftElement = function (arr, element, callback) {
    const newArray = [];
    newArray[0] = element;
    for (let i = 0; i < arr.length; i++) {
        newArray[i + 1] = arr[i];
    }
    callback(newArray);
};

const printNewArray = function (newArray) {
    console.log("Array after HOF unshift:", newArray);
};

unShiftElement(arr, 0, printNewArray);

// Manual Push
let array = [1, 2, 3];
function manualPush(arr, element) {
    arr[arr.length] = element;
    return arr.length;
}
console.log("Before manual push:", array);
manualPush(array, 4);
console.log("After manual push:", array);

// Manual Pop
array = [1, 2, 3, 4];
function manualPop(arr) {
    arr.length = arr.length - 1;
    return arr;
}
manualPop(array);
console.log("After manual pop:", array);

// Manual Unshift
array = [2, 3, 4];
function manualUnshift(arr, element) {
    for (let i = arr.length; i > 0; i--) {
        arr[i] = arr[i - 1];
    }
    arr[0] = element;
    return arr.length;
}
manualUnshift(array, 1);
console.log("After manual unshift:", array);



// above code is without comment for post 
// below code is with comment before post 


// ****pop element manually  **** 

// let arr = [1, 2, 3, 4,5,6,7,8,9];
// const poppedElement = function(arr) {
//     arr.length = arr.length - 1;
//     return arr;
//   };
//  poppedElement(arr);
//   console.log(arr);             


// pop with loop maually 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];

// for (let i = 0; i < arr.length - 1; i++) {
//   newArr[i] = arr[i]; 
// }


// console.log("popoed element ", newArr);



// // pop with hof maually 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8];

// function removeLastElement(arr, callback) {
//     newArr = [];
//     for ( i = 0; i < arr.length - 1; i++) {
//         newArr[i] = arr[i];
//     }
//     callback(newArr);
// }

// function printArray(newArr) {
//     console.log( "popoed element with hof" , newArr);
// }
// removeLastElement(arr, printArray);



// ****push element manually  **** 


// let arr = [1, 2, 3, 4,5,6,7,8,9];

// const pushedElement = function(arr,element) {
//    arr[arr.length] = element
//     return arr;
//   };
//  pushedElement(arr,10);
//   console.log(arr); 


// push with  loop munally 

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const pushedElement = function(arr, element) {
//     for (let i = arr.length; i < arr.length + 1; i++) {
//         arr[i] = element; 
//         break ;
//     }
//     return arr;
// };

// pushedElement(arr, 10);
// console.log(arr);

//  // 9 index py elelment 10 push  kar do .....


// //push with hof manually 

// let  arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const pushElement = function(arr, element, callback) {
//     callback(arr, element);
// };

// const addElement = function(arr, element) {
//     arr[arr.length] = element; 

//      //  // arr[9] = newarray ....
//     //  // 9 index py newarray value add ho gi ....
// };

// pushElement(arr, 'newarray', addElement);
// console.log(arr);



//  ****Shift element manually*****


// const arr = [1, 2, 3, 4, 5]; 


// function manualShift(arr) {
//     if (arr.length === 0) {
//         return undefined; 
//     }
    

//     for (let i = 1; i < arr.length; i++) {
//         arr[i - 1] = arr[i];
//         // arr[1-1] = arr[1]....
//         // arr[0] = 2....
//         // 0 index py 2 shift ho jaye ga.....
//     }
//     arr.length = arr.length - 1
    
// }

// manualShift(arr);
// console.log(arr);      




// ***shift by hof* 


// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const manualShift = function(arr, callback) {
//     for (let i = 1; i < arr.length; i++) {
//         callback(arr, i); 
//     }
//     arr.length = arr.length - 1; 
// };

// const shiftLeft = function(arr, i) {
//     arr[i - 1] = arr[i]; 
// // arr[0] = arr[1]......

// };


// manualShift(arr, shiftLeft)
// console.log(arr); 





//  ****UnShift element manually*****



// Unshift element manually

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const unShiftElement = function (arr, element) {
//     const newArray = []; 
    
//     for (let i = 0; i < arr.length + 1; i++) {
//     // for (let i = 0; i < 10; i++) {
        
//         if (i === 0) {
//             newArray[i] = element; 
//         } else {
//             newArray[i] = arr[i - 1]; 
//             // newArray ka 1 index py arr ky 0 index wali aa jaye gii 
//         }
//     }
    
//     return newArray; 
// };

// const modifiedArray = unShiftElement(arr, 0);
// console.log(arr)
// console.log( "UNShifting:", modifiedArray)
        

// M2************ 


// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const unShiftElement = function (arr, element) {
//     const newArray = []; 
//     newArray[0] = element

//             for (let i = 0; i < arr.length; i++) {
//                 newArray[i+1] = arr[i]
//             }

//     console.log(newArray)
//     return newArray; 
// }
// console.log(arr);
// unShiftElement(arr, "unshift value add here");




// Unshift element HOF  manually


// let arr = [1,2,3,4,5,6,7,8,9] 
// const unShiftElement =  function (arr, element,callback) {
//         const newArray = []; 
//         newArray[0] = element
//         for (let i = 0; i < arr.length; i++) {
//             newArray[i+1] = arr[i]
//     }

//     callback(newArray);
// }
           
// const printArray = function (newArray){
//     console.log(newArray)
// } 

// console.log(arr);
// unShiftElement(arr,0,printArray);

// ********* 

// SIMPLE ....... 

// push()

// Adds an element to the end of an array.

// let array = [1, 2, 3];
// function manualPush(arr, element) {
//   arr[arr.length] = element;
//   return arr.length; 
//   // Return the new length of the array
// }
// console.log("BEFORE",array); 
// manualPush(array, 4);
// console.log("AFTER",array); 
// [1, 2, 3, 4]

// //  pop()

//  // Removes the last element from an array and returns it.

// array = [1, 2, 3, 4];
// function manualPop() {
//   array.length = array.length - 1; 
//   return array;
// }

// manualPop(); 
// console.log(array); 


// //  shift()

// // Removes the first element from an array and returns it.

// array = [1, 2, 3, 4];
// function manualShift(array) {
//   if (array.length === 0) 
//     return undefined;
//   for (let i = 1; i < array.length; i++) {
//     array[i - 1] = array[i]; 
//   }
//   array.length = array.length - 1;

// }
// manualShift(array); 
// console.log(array); 



// unshift()

// Adds an element to the beginning of an array.
// array = [2, 3, 4];
// function manualUnshift(array, element) {
//   for (let i = 3; i > 0; i--) {
//     array[i] = array[i - 1]; 
//     // array ma 3rd index create ho or us 3rd index ma 2 wali value chali jaye 
//   }
//   array[0] = element;
//   return array.length; 
// }

// manualUnshift(array, 1);
// console.log(array); 



// ONLY WITH HOF  ..... 


// 1. pop: Removes the last element from an array
// let arr = [1, 2, 3, 4];

// function customPop(arr, callback) {
//   if (arr.length === 0) return undefined; // Array is empty
//   callback(arr); // Execute the callback function
// }

// const popCallback = (arr) => {
//   const newArr = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     newArr[i] = arr[i]; // Copy elements except the last one
//   }
//   console.log('Array after pop:', newArr);
// };

// customPop(arr, popCallback);



// 2. push: Adds a new element at the end of the array

// function customPush(arr, element, callback) {
//   const newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i] = arr[i]; // Copy existing elements
//   }
//   newArr[arr.length] = element; // Add the new element at the end
//   callback(newArr);
// }

// const pushCallback = (newArr) => {
//   console.log('Array after push:', newArr);
// };

// let arr2 = [1, 2, 3];
// customPush(arr2, 4, pushCallback);

// 3. shift: Removes the first element from an array

// function customShift(arr, callback) {
//   if (arr.length === 0) return undefined; // Array is empty
//   const firstElement = arr[0]; // Get first element
//   callback(arr, firstElement); // Execute the callback function
// }

// const shiftCallback = (arr, firstElement) => {
//   const newArr = [];
//   for (let i = 1; i < arr.length; i++) {
//     newArr[i - 1] = arr[i]; // Copy all elements except the first one
//   }
//   console.log('Array after shift:', newArr);
//   console.log('Shifted element:', firstElement);
// };

// let arr3 = [1, 2, 3, 4];
// customShift(arr3, shiftCallback);

// 4. unshift: Adds an element at the beginning of the array

// function customUnshift(arr, element, callback) {
//   const newArr = [element]; // Start with the new element
//   for (let i = 0; i < arr.length; i++) {
//     newArr[i + 1] = arr[i]; // Add the existing elements
//   }
//   callback(newArr);
// }

// const unshiftCallback = (newArr) => {
//   console.log('Array after unshift:', newArr);
// };

// let arr4 = [2, 3, 4];
// customUnshift(arr4, 1, unshiftCallback);