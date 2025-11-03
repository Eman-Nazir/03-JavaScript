// 1
function HOF(callback) {
    callback(loggerForCallback);
  }
  function loggerForCallback() {
    console.log("Callback goes here");
  }
  HOF(loggerForCallback);
  // 2
  function greeting(callback) {
    console.log("I'm about to greet someone...");
    callback(sayHello);
  }
  function sayHello() {
    console.log("Hello, Eman!");
  }
  greeting(sayHello);
   // 3
  function farewell(callback) {
    console.log("I'm about to say goodbye...");
    callback(sayGoodbye);
  }
  function sayGoodbye() {
    console.log("Goodbye, Eman!");
  }
  farewell(sayGoodbye);
  // 4
  function checkWeather(callback) {
    console.log("Checking the weather...");
    callback(displayWeather);
  }
  function displayWeather() {
    console.log("It's sunny today!");
  }
  checkWeather(displayWeather);
// 6
  function prepareFood(callback) {
    console.log("Starting to cook...");
    callback(serveFood);
  }
  function serveFood() {
    console.log("Dinner is ready, Mam!");
  }
  prepareFood(serveFood);
// 7
  function startExercise(callback) {
    console.log("Getting ready for exercise...");
    callback(doPushUps);
  }
  function doPushUps() {
    console.log("Doing 20 push-ups!");
  }
  startExercise(doPushUps);
// 8
  function startReading(callback) {
    callback();
  }
  function readChapter() {
    console.log("Reading the first chapter...");
  
  }
  startReading(readChapter);
// 9
  function startReading(nextStep) {  
    console.log("Picking up a book...");
    nextStep(readSecondChapter);
  }
  function readSecondChapter() {
    console.log("Reading the second chapter...");
  }
  startReading(readSecondChapter);
// 10
  function startReading(action) { 
    console.log("Picking up a book...");
    action();
  }
  function bookmarkPage() {
    console.log("Bookmarking the current page...");
  }
  startReading(bookmarkPage);
// 11
  function startReading(task) {
    console.log("Picking up a book...");
    task();
  }
  function closeBook() {
    console.log("Closing the book...");
  }
  startReading(closeBook);
// 12
  function startReading(activity) {  
    console.log("Picking up a book...");
    activity();
  }
  function writeNotes() {
    console.log("Writing notes from the chapter...");
  }
  startReading(writeNotes);
// 13
  function calculate(a, b, operation) {
    console.log("Performing an operation...");
    return operation(a, b);
  }
  function add(x, y) {
    return x + y;
  }
  function subtract(x, y) {
    return x - y;
  }
  console.log(calculate(5, 3, add));  
  console.log(calculate(5, 3, subtract));   
  // 14
  function calculate(a, b, operation) {
    return operation(a, b);
  }
  function multiply(x, y) {
    return x * y;
  }
  function divide(x, y) {
    return x / y;
  }
  console.log(calculate(6, 2, multiply)); 
  console.log(calculate(6, 2, divide)); 
    // 15
     function calculate(a, b, operation) {
      return operation(a, b);
    }
   function max(x, y) {
     return x > y;
  }
   function min(x, y) {
     return x < y ;
    }
   console.log(calculate(8, 12, max));    
     console.log(calculate(8, 12, min));   
// 16
 function calculate(a, b, operation) {
    return operation(a, b);
  }
  function power(x, y) {
    return x ** y;
  }
  function modulus(x, y) {
    return x % y;
  }
  console.log(calculate(2, 3, power));   
  console.log(calculate(10, 3, modulus)); 
// 17
   function manipulateStrings(str1, str2, operation) {
    return operation(str1, str2);
  }
  function concatenate(a, b) {
    return a + b;
  }
  function reverseConcat(a, b) {
    return b + a;
  }
  console.log(manipulateStrings("Hello", "World", concatenate));    
  console.log(manipulateStrings("Hello", "World", reverseConcat));  
  // Average of three numbers
  function averageOfThree(num1, num2, num3, callback) {
    const sum = num1 + num2 + num3;
    const avg = sum / 3;
    callback(avg);
    return avg;
  }
  averageOfThree(10, 20, 30, function (avg) {
    console.log("Average", avg);
  });
function averageOfThree(num1, num2, num3, callback) {
  const sum = num1 + num2 + num3;
  const avg = sum / 3;
  callback(avg); 
  return avg;
}
function logAverage(avg) {
  console.log("Average", avg);

}
averageOfThree(10, 20, 30, logAverage);

function averageOfThree(num1, num2, num3, callback) {
  const sum = num1 + num2 + num3;
  const avg = sum / 3;
  callback(avg);
}
averageOfThree(5, 15, 25, function (average) {
  console.log("The average is:", average);
});
averageOfThree(5, 15, 25, function (average) {
  console.log("Double the average is:", average * 2);
});
function showSomethingHoF(callback) {
  callback();
}
function showSomethingCallback() {
  console.log("Hello something")
}
showSomethingHoF(showSomethingCallback);

function showSomethingHoFMultiply(callback) {
  callback(5, 10);
}
function multiplyNumbers(a, b) {
  console.log(a * b);
}

showSomethingHoFMultiply(multiplyNumbers);

function showSomethingHoF(callback) {
  callback("asma");
  }
function greetUser(name) {
  console.log("Hello, " + name + "!");
}
showSomethingHoF(greetUser);

function showSomethingHoFAdd(callback) {
  callback(7, 3);
}
function addNumbers(a, b) {
  console.log(a + b);
}
showSomethingHoFAdd(addNumbers); 

function showSomethingHoF(callback) {
  callback("Hello something");
}
function showSomethingCallback(arg) {
  console.log(arg);
}
showSomethingHoF(showSomethingCallback); 
