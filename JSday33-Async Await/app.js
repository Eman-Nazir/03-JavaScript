// // // function makeRequest (){
// // //     return "hello"
// // // }


// //     // async function makeRequest (){
// //     //     return "Hello"
// //     //  }

// //     //   makeRequest().then((result) => {
// //     //     console.log(result)
// //     //  })

     


// // // let test = async () => " ASYNC FUNCTION ";
// // // test().then( (data) => {
// // //     console.log(data)
// // // })

// // // AWAIT 

// // // async function test (){
// // // console.log("A");
// // //  await console.log("B");
// // // console.log("C");
// // // }

// // // test()

// // // console.log("D");
// // // console.log("E");



// // // function test1() {
// // //     console.log("A");
// // //     return new Promise(resolve => {
// // //       console.log("B");
// // //       resolve();
// // //     }).then(() => {
// // //       console.log("C");
// // //     });
// // //   }
  
// // //   test1();
  
// // //   console.log("D");
// // //   console.log("E");
  
// // ******************** EXAMPLES  

// async function example1() {
//     return "Hello, Async!";
//   }
  
//   example1().then(console.log); 

// //   Example 2: Using await with a Resolved Promise
 
//   async function example2() {
//     const result = await Promise.resolve("Resolved!");
//     console.log(result); 
//   }
  
//   example2();

// //   Example 3: Simulating a Delay with setTimeout
  
//   function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
//   }
  
//   async function example3() {
//     console.log("Waiting...");
//     await delay(1000); // Wait for 1 second
//     console.log("Done waiting!"); // Output: Done waiting!
//   }
  
//   example3();

// //   Example 4: Async/Await with Error Handling
  
//   async function example4() {
//     try {
//       const result = await Promise.reject("Something went wrong!");
//       console.log(result);
//     } catch (error) {
//       console.log("Caught error:", error); 
//     }
//   }
  
//   example4();

// //   Example 5: Sequential Execution with await
  
//   function delayMessage(message, ms) {
//     return new Promise((resolve) => setTimeout(() => resolve(message), ms));
//   }
  
//   async function example5() {
//     const first = await delayMessage("First Message", 500);
//     console.log(first); // Output: First Message
  
//     const second = await delayMessage("Second Message", 500);
//     console.log(second); // Output: Second Message
//   }
  
//   example5();

// //   Example 6: Using Async Function in a Loop

//   async function example6() {
//     for (let i = 1; i <= 3; i++) {
//       await new Promise((resolve) => setTimeout(resolve, 500));
//       console.log(`Step ${i}`); // Output: Step 1, Step 2, Step 3 (with delay)
//     }
//   }
  
//   example6();

// //   Example 7: Simple Fetch Simulation 
 
//   function fetchData() {
//     return new Promise((resolve) => {
//       setTimeout(() => resolve("Fetched Data"), 1000);
//     });
//   }
  
//   async function example7() {
//     const data = await fetchData();
//     console.log(data); // Output: Fetched Data
//   }
  
//   example7();


// //   Example 8: Async Function Returning a Value
  
//   async function example8() {
//     return 42; 
//   }
//   example8()
//   .then(console.log); 

// //   Example 9: Combining async/await and .then()
  
//   async function example9() {
//     const result = await Promise.resolve("Hello, World!");
//     return result;
//   }
  
//   example9().then((data) => console.log(data)); // Output: Hello, World!

// //   Example 10: Handling Multiple Async Tasks
  
//   async function example10() {
//     const task1 = await Promise.resolve("Task 1 Complete");
//     const task2 = await Promise.resolve("Task 2 Complete");
  
//     console.log(task1); // Output: Task 1 Complete
//     console.log(task2); // Output: Task 2 Complete
//   }
  
//   example10();
  



// // Example 1: Basic async/await with try and catch
// async function example1() {
//     try {
//       const result = await new Promise((resolve, reject) => {
//         setTimeout(() => resolve("Hello from example 1"), 1000);
//       });
//       console.log(result);
//     } catch (error) {
//       console.error("Error in example 1:", error);
//     }
//   }
  
//   // Example 2: Handling error in async function
//   async function example2() {
//     try {
//       const result = await new Promise((resolve, reject) => {
//         setTimeout(() => reject("Something went wrong in example 2"), 1000);
//       });
//       console.log(result);
//     } catch (error) {
//       console.error("Error in example 2:", error);
//     }
//   }
  
//   // Example 3: Using async/await with a timeout
//   async function example3() {
//     try {
//       const result = await new Promise((resolve) => setTimeout(() => resolve("Timeout completed in example 3"), 1500));
//       console.log(result);
//     } catch (error) {
//       console.error("Error in example 3:", error);
//     }
//   }
  
//   // Example 4: Sequential async function calls
//   async function example4() {
//     try {
//       const step1 = await new Promise((resolve) => setTimeout(() => resolve("Step 1 complete"), 1000));
//       console.log(step1);
//       const step2 = await new Promise((resolve) => setTimeout(() => resolve("Step 2 complete"), 1000));
//       console.log(step2);
//       const step3 = await new Promise((resolve) => setTimeout(() => resolve("Step 3 complete"), 1000));
//       console.log(step3);
//     } catch (error) {
//       console.error("Error in example 4:", error);
//     }
//   }
// in ko call end py kiya gaya ha 
  
  // Example 5: Parallel async function calls

  async function example5() {
    try {
      const [result1, result2] = await Promise.all([
        new Promise((resolve) => setTimeout(() => resolve("Task 1 complete"), 1000)),
        new Promise((resolve) => setTimeout(() => resolve("Task 2 complete"), 2000))
      ]);
      console.log(result1);
      console.log(result2);
    } catch (error) {
      console.error("Error in example 5:", error);
    }
  }
  
  example5();


//   // Example 6: Handling multiple errors
//   async function example6() {
//     try {
//       const result1 = await new Promise((resolve, reject) => setTimeout(() => reject("Error in Task 1"), 1000));
//       console.log(result1);
//     } catch (error) {
//       console.error("Error in example 6:", error);
//     }
  
//     try {
//       const result2 = await new Promise((resolve) => setTimeout(() => resolve("Task 2 complete"), 1500));
//       console.log(result2);
//     } catch (error) {
//       console.error("Error in example 6:", error);
//     }
//   }
  
//   // Example 7: Using try/catch within a loop
//   async function example7() {
//     const tasks = [1, 2, 3, 4, 5];
//     for (let i = 0; i < tasks.length; i++) {
//       try {
//         const result = await new Promise((resolve, reject) => {
//           setTimeout(() => resolve(`Task ${tasks[i]} complete`), 1000);
//         });
//         console.log(result);
//       } catch (error) {
//         console.error(`Error in task ${tasks[i]}:`, error);
//       }
//     }
//   }
  
//   // Example 8: Async function with a conditional
//   async function example8() {
//     try {
//       const condition = true; // Change to false to simulate failure
//       const result = await new Promise((resolve, reject) => {
//         setTimeout(() => {
//           if (condition) resolve("Condition met in example 8");
//           else reject("Condition not met");
//         }, 1000);
//       });
//       console.log(result);
//     } catch (error) {
//       console.error("Error in example 8:", error);
//     }
//   }
  
//   // Example 9: Handling timeouts with try/catch
//   async function example9() {
//     try {
//       const result = await new Promise((resolve, reject) => {
//         setTimeout(() => reject("Request timed out in example 9"), 1000);
//       });
//       console.log(result);
//     } catch (error) {
//       console.error("Error in example 9:", error);
//     }
//   }
  
//   // Example 10: Nested async functions with try/catch
//   async function example10() {
//     try {
//       const result1 = await new Promise((resolve) => setTimeout(() => resolve("Result from nested function 1"), 1000));
//       console.log(result1);
//       const result2 = await nestedFunction();
//       console.log(result2);
//     } catch (error) {
//       console.error("Error in example 10:", error);
//     }
  
//     async function nestedFunction() {
//       return new Promise((resolve) => setTimeout(() => resolve("Result from nested function 2"), 1500));
//     }
//   }
  
//   // Call all examples
//   example1();
//   example2();
//   example3();
//   example4();
//   example6();
//   example7();
//   example8();
//   example9();
//   example10();
    

// when we use simple console of 3 line and then we use a promise and then we use a function with timeout who it will behave as it is asyncronous


// console.log("First line");  
// console.log("Second line"); 

// new Promise((resolve, reject) => {
//   console.log("Inside the promise");  
//   resolve();
// }).then(() => {
//   console.log("After promise resolution");
// });

// setTimeout(() => {
//   console.log("Inside setTimeout (after timeout)");
// }, 1000);

// console.log("Last line"); 






// console.log("First line");  
// console.log("Second line"); 

// async function asyncFunction() {
//   console.log("Before await"); 

//   await new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Inside async function (after timeout)");
//     }, 1000);
//   });

//   console.log("After await"); 
// }

// asyncFunction();

// console.log("Last line"); 
