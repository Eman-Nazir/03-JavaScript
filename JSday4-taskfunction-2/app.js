  // Task 1
function checkNumber(num) {
    if (num > 0) {
      console.log(`${num} is positive`);
    } else if (num < 0) {
      console.log(`${num} is negative`);
    } else {
      console.log("The number is zero");
    }
  }
  checkNumber(-5);
  
  // Task 2
  function printNumbers() {
    let i = 1;
    while (i <= 5) {
      console.log(i);
      i++;
    }
  }
  printNumbers();

  // Task 3
  function countdown() {
    let i = 5;
    do {
      console.log(i);
      i--;
    } while (i > 0);
  }
  console.log("Reverse Number");

  countdown();

  // Task 4: 

  function infiniteLoopWithBreak() {
    let counter = 1;
    while (true) {
      console.log("Counter:", counter);
      if (counter >= 10) { 
        console.log("Breaking out of infinite loop");
        break;
      }
      counter++;
    }
  }
  infiniteLoopWithBreak();
  
  // Task 5: 
  function checkVotingEligibility(age) {
    if (age >= 18) {
      console.log("Eligible to vote");
    } else {
      console.log("Not eligible to vote");
    }
  }
  checkVotingEligibility(20);
  // Task 6:
  function printEvenNumbers() {
    let i = 2;
    while (i <= 10) {
      console.log(i);
      i = i+ 2;
    }
  }
  printEvenNumbers();
  // Task 7:
  function checkEvenOdd(num) {
    if (num % 2 == 0) {
      console.log(`${num} is even`);
    } else {
      console.log(`${num} is odd`);
    }
  }
  checkEvenOdd(7);
  // Task 8:
  function printHello() {
    let i = 0;
    do {
      console.log("Hello");
      i++;
    } while (i < 11);
  }
  printHello();

  // Task 9: 
  function sumUntilFifty() {
    let sum = 0;
    let i = 1;
    while (sum <= 50) {
      sum += i;
      i++;
    }
    console.log("Sum exceeded 50:", sum);
  }
  sumUntilFifty();

  // Task 10: 
  function infiniteCounter() {
    let i = 1;
    while (true) {
      console.log(i);
      i++;
    }
  }
//   infiniteCounter();    