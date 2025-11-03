// Loops in JS

// 1- for loop
// 2- while loop
// 3- do while loop

// Example
// Table of 2

// 2 * 1 = 2
// 2 * 2 = 4
// 2 * 3 = 6
// 2 * 4 = 8

// FOR LOOP 


for (let counter = 1; counter < 11; counter++) {
  console.log(`2 * ${counter} = ${counter * 2}`);
}

for (let counter = 10; counter >= 1; counter--) {
  console.log(`2 * ${counter} = ${counter * 2}`);
}

// TO PRINT ODD NUMBER 

for (let i = 1; i <= 15; i = i + 2 ) {
  console.log(i);
}
console.log("backwards");

for (let i = 15; i >= 1; i = i - 2 ) {
  console.log(i);
}


// TO PRINT EVEN NUMBER 
console.log("EVEN NUMBERS ");


for (let i = 2; i <= 20; i = i + 2) {
  console.log(i);
}

console.log("backwards");

for (let i = 20; i >= 2; i = i - 2) {
  console.log(i);
}

// foe without condition  infinite chly ga 

for (let i = 2; i = i + 2; ) {
  console.log(i);
}

// WHILE LOOP 

let whileCounter = 1;
// document.write("<ul>")
while (whileCounter <= 5) {
  console.log(" While... ");
  // document.write("<li> While...  </li>");
  // document.write("<li> "+  whileCounter +" ) While...  </li>");
  whileCounter++;
}
// document.write("</ul>")

// WHILE WITHOUT CONDITION ERROER DAY GA 

// // let whileCounter = 1;
// while {
//     console.log(" While... ");
//   whileCounter++;
// }



// 3- do while loop

// let doWhileInitiator = 1;
// do {
//   console.log("Do while...");
//   doWhileInitiator++;
// } while (doWhileInitiator <= 10);
//  while (false);
//  while (true);

// while ma aa ky conditin false likh diya ha tu ya loop sa bahir aa jaye ga bas phali bar hi execute ho ga kuy ka do while phali ba condittion ka check kiye baghir execute ho ga 

// agar ham increment or decrement nahi dy gy or ya phir while ma condition true likhy gy tu ya chlta jaye ga kuy ka harr bar condition true ho gi 
// har bar 1 >= ho ga 10 sa tu har bar condition true hoti jaye gi 

// Continue, Break
// 
// for (let counter = 1; counter < 11; counter++) {
//   continue;
//   if (counter === 5) continue;
//   if (counter === 5) break;
// //   console.log(`2 * ${counter} = ${counter * 2}`);
// }

// for (let counter = 10; counter >= 1; counter--) {
//   console.log(`2 * ${counter} = ${counter * 2}`);
// }

// console.log("count", --count);
// console.log("count", count);
