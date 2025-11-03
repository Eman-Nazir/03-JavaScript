
document.getElementById("startBtn").addEventListener("click", startDemo);

function startDemo() {
  console.clear();
  console.log(" Async & Await Demo Started!");

  console.log("First line");
  console.log("Second line");

  // 2 Promise Example (microtask)
  new Promise((resolve) => {
    console.log("Inside the Promise (synchronous part)");
    resolve();
  }).then(() => {
    console.log("After Promise resolution (then block - microtask)");
  });

  // 3 setTimeout Example (macrotask)
  setTimeout(() => {
    console.log("Inside setTimeout (runs after 1 second)");
  }, 1000);

  // 4 Async/Await Example
  async function showAsyncExample() {
    console.log("Before await (inside async function)");

    await new Promise((resolve) => {
      setTimeout(() => {
        console.log(" Await completed (1s delay done)");
        resolve();
      }, 1000);
    });

    console.log("After await (async function continues)");
  }

  showAsyncExample();

  // 5 Final synchronous line
  console.log("Last line of the script");

  //  Explanation of expected output order
  console.log(" Expected Output Order:");
  console.log("1. First line");
  console.log("2. Second line");
  console.log("3. Inside the Promise (sync part)");
  console.log("4. Before await (inside async function)");
  console.log("5. Last line of the script");
  console.log("6. After Promise resolution (then block)");
  console.log("7.  Await completed (1s delay done)");
  console.log("8. Inside setTimeout (after 1s)");
  console.log("9. After await (async function continues)");
}
