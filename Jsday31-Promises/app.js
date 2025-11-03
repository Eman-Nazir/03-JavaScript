// const p = new Promise()
// const p =  Promise()

// if we write p in cosole we can see promise detail properly for next task we can aslo use console.log(p)

// const p = new Promise((resolve , rejecte) => {
//     resolve("hello")
//     // rejecte("promise rejected")
//     rejecte({ name : "Eman" } )
// })
// console.log(p)



// ******** By using set time 

// const button = document.querySelector("#resolve-button")


// const p = new Promise((resolve , reject) => {

// button.addEventListener('click', () => {
//     resolve("hello") 
// })
// })

// is ma ham na ya kiya ha ky jab resolve wale button par click kary gy to promise state resolve ho gi or jo b ham na us ma text pass kiya ha wo aye ga isi taeha jan reject wale ko kary gy to wo aye ga 

// Then And Catch 
// const resolveBtn = document.querySelector("#resolve-button")
// const rejectBtn = document.querySelector("#reject-button")
// const p = new Promise((resolve , reject) => {

// resolveBtn.addEventListener('click', () => {
//     resolve("Resolve Promise") 
// }) 

// rejectBtn.addEventListener('click', () => {
//     reject("Rejected Promise") 
// })
// })

// p.then(() => {
//     console.log("THEN ")
// }).catch(() => {
//     console.log("Catch  ")
// })

// jo text ham na resolve or reject karty waqat beacket ma diya ha agr wi lana hy then or catch ma 

// p.then((data) => {
//     console.log(data)
// }).catch((erroe) => {
//     console.log(erroe)
// })




// 2 VVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV 





// 1. Simple Resolve Promise 


const promise1 = new Promise((resolve, reject) => {
    resolve("Promise is resolved!");
  });
  
  promise1.then((message) => console.log(message));

  
//   2. Simple Rejected Promise

  const promise2 = new Promise((resolve, reject) => {
    reject("Promise is rejected!");
  });
  
  promise2.catch((error) => console.log(error));
 
  
//   3. Promise with setTimeout

  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data received after 2 seconds");
    }, 2000);
    
  });
  
  promise.then((message) => console.log(message));

// //   Data received after 2 seconds
  
//   4. Fetching Data from an API 


//   const fetchData = new Promise((resolve, reject) => {
//     const success = true; 
//     if (success) {
//       resolve("Data fetched successfully");
//     } else {
//       reject("Failed to fetch data");
//     }
//   });
  
//   fetchData
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error));
  
  
// // 5 . Button Click to Resolve/Reject

//   const resolveBtn = document.querySelector("#resolve-button");
//   const rejectBtn = document.querySelector("#reject-button");
  
//   const promise = new Promise((resolve, reject) => {
//     resolveBtn.addEventListener("click", () => resolve("Button Resolved!"));
//     rejectBtn.addEventListener("click", () => reject("Button Rejected!"));
//   });
  
//   promise
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));
 
  
//   6. Chaining Promises //

//   const promise = new Promise((resolve, reject) => {
//     resolve(10);
//   });
  
//   promise
//     .then((number) => number * 2)
//     .then((double) => double + 5)
//     .then((result) => console.log(`Final result: ${result}`));
  
  
//   7. Promise with setTimeout and Rejection

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject("Error: Timeout occurred!");
//     }, 3000);
//   });
  
//   promise.catch((error) => console.log(error));
  
  
//   8. Promise with Multiple Outcomes // 
//   const checkNumber = (num) => {
//     new Promise((resolve, reject) => {
//       if (num % 2 === 0) {
//         resolve("Even number");
//       } else {
//         reject("Odd number");
//       }
//     });
// }
//   checkNumber(4)
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error));
  
  
//   9. Handling Multiple Promises with Promise.all // 

//   const promise1 = new Promise((resolve) => setTimeout(() => resolve("One"), 1000));
//   const promise2 = new Promise((resolve) => setTimeout(() => resolve("Two"), 2000));
//   const promise3 = new Promise((resolve) => setTimeout(() => resolve("Three"), 3000));
  
//   Promise.all([promise1, promise2, promise3]).then((values) =>
//     console.log(values)
//   );
  
 


// CALLBACK HELL 

// Example 1: Nested Timer Functions
// Problem: Each setTimeout is inside another, making the code hard to read.
// console.log("Start");

// Using Callbacks (Callback Hell)
// setTimeout(() => {
//   console.log("Task 1");
//   setTimeout(() => {
//     console.log("Task 2");
//     setTimeout(() => {
//       console.log("Task 3");
//       console.log("End");
//     }, 1000);
//   }, 1000);
// }, 1000);

// // Using Promises (Simpler)
// const wait = (ms, message) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     }, ms);
//   });

// wait(1000, "Task 1")
//   .then(() => wait(1000, "Task 2"))
//   .then(() => wait(1000, "Task 3"))
//   .then(() => console.log("End"));

// ----------------------------------------

// Example 1: Nested Timer Functions
// console.log("Start");

// // Using Callbacks (Callback Hell)
// setTimeout(() => {
//   console.log("Step 1 completed");
//   setTimeout(() => {
//     console.log("Step 2 completed");
//     setTimeout(() => {
//       console.log("Step 3 completed");
//       console.log("End");
//     }, 1000);
//   }, 1000);
// }, 1000);

// Using Promises
// const wait = (message) =>
//   new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(message);
//       resolve();
//     });
//   });

// wait("Step 1 completed")
//   .then(() => wait("Step 2 completed"))
//   .then(() => wait("Step 3 completed"))
//   .then(() => console.log("End"));

// ----------------------------------------

// Example 2: Simple Task Flow
// function performStep(step, callback) {
//   setTimeout(() => {
//     callback(`${step} done`);
//   }, 1000);
// }

// // Callback Hell
// performStep("Step 1", (result1) => {
//   console.log(result1);
//   performStep("Step 2", (result2) => {
//     console.log(result2);
//     performStep("Step 3", (result3) => {
//       console.log(result3);
//       console.log("All steps completed");
//     });
//   });
// });

// // Using Promises
// function performStepPromise(step) {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve(`${step} done`), 1000);
//   });
// }

// performStepPromise("Step 1")
//   .then((result1) => {
//     console.log(result1);
//     return performStepPromise("Step 2");
//   })
//   .then((result2) => {
//     console.log(result2);
//     return performStepPromise("Step 3");
//   })
//   .then((result3) => {
//     console.log(result3);
//     console.log("All steps completed");
//   });

// ----------------------------------------

// Example 3: File Reading Simulation
// function readFile(file, callback) {
//   setTimeout(() => callback(`Read ${file}`), 1000);
// }

// // Callback Hell
// readFile("file1.txt", (data1) => {
//   console.log(data1);
//   readFile("file2.txt", (data2) => {
//     console.log(data2);
//     readFile("file3.txt", (data3) => {
//       console.log(data3);
//       console.log("All files read");
//     });
//   });
// });

// // Using Promises
// function readFilePromise(file) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(`Read ${file}`), 1000)
//   );
// }

// readFilePromise("file1.txt")
//   .then((data1) => {
//     console.log(data1);
//     return readFilePromise("file2.txt");
//   })
//   .then((data2) => {
//     console.log(data2);
//     return readFilePromise("file3.txt");
//   })
//   .then((data3) => {
//     console.log(data3);
//     console.log("All files read");
//   });

// // ----------------------------------------

// // Example 4: Simple Steps with Fixed Values
// function fetchData(step, callback) {
//   setTimeout(() => callback(`${step} fetched`), 1000);
// }

// // Callback Hell
// fetchData("Data 1", (data1) => {
//   console.log(data1);
//   fetchData("Data 2", (data2) => {
//     console.log(data2);
//     fetchData("Data 3", (data3) => {
//       console.log(data3);
//       console.log("All data fetched");
//     });
//   });
// });

// // Using Promises
// function fetchDataPromise(step) {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve(`${step} fetched`), 1000)
//   );
// }

// fetchDataPromise("Data 1")
//   .then((data1) => {
//     console.log(data1);
//     return fetchDataPromise("Data 2");
//   })
//   .then((data2) => {
//     console.log(data2);
//     return fetchDataPromise("Data 3");
//   })
//   .then((data3) => {
//     console.log(data3);
//     console.log("All data fetched");
//   });

// // ----------------------------------------

// // Example 5: Simple Validation Flow
// function validate(callback) {
//   setTimeout(() => callback("Validation complete"), 1000);
// }
// function process(callback) {
//   setTimeout(() => callback("Processing complete"), 1000);
// }
// function notify(callback) {
//   setTimeout(() => callback("Notification sent"), 1000);
// }

// // Callback Hell
// validate((validationResult) => {
//   console.log(validationResult);
//   process((processResult) => {
//     console.log(processResult);
//     notify((notifyResult) => {
//       console.log(notifyResult);
//       console.log("All tasks completed");
//     });
//   });
// });

// // Using Promises
// function validatePromise() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("Validation complete"), 1000)
//   );
// }
// function processPromise() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("Processing complete"), 1000)
//   );
// }
// function notifyPromise() {
//   return new Promise((resolve) =>
//     setTimeout(() => resolve("Notification sent"), 1000)
//   );
// }

// validatePromise()
//   .then((validationResult) => {
//     console.log(validationResult);
//     return processPromise();
//   })
//   .then((processResult) => {
//     console.log(processResult);
//     return notifyPromise();
//   })
//   .then((notifyResult) => {
//     console.log(notifyResult);
//     console.log("All tasks completed");
//   });














// 2. Without return (Incorrect Behavior)
// function readFilePromise(file) {
  // return new Promise((resolve) =>
    // setTimeout(() => resolve(`Read ${file}`), 1000)
  // );
// }

// readFilePromise("file1.txt")
//   .then((data1) => {
//     console.log(data1);
//     readFilePromise("file2.txt"); // Not returning the promise
//   })
//   .then((data2) => {
//     console.log(data2); // This will log `undefined`
//     readFilePromise("file3.txt"); // Not returning the promise
//   })
//   .then((data3) => {
//     console.log(data3); // This will also log `undefined`
//     console.log("All files read");
  // });


// Behavior:

// Without return, the .then() callbacks don’t wait for the next promise.
// The data2 and data3 will be undefined because the chained promises are broken.
// Output:

// Read file1.txt
// undefined
// undefined
// All files read
// Why is return Important?
// Maintains Chain: return ensures that the .then() chain continues correctly with the resolved value of the promise.
// Waits for Resolution: Without return, the next .then() executes immediately without waiting for the promise to resolve.
// Avoids Undefined Values: Returning the promise passes the resolved value to the next .then().
// Key Takeaway
// Always use return when working with .then() in promise chains to maintain sequential execution and proper data flow.


