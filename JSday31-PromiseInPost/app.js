document.addEventListener("DOMContentLoaded", () => {

  //  Simple Promise (resolve / reject)
  const excuse = false;

  const letsHaveSomeTea = new Promise((resolve, reject) => {
    if (excuse) {
      reject("I'm sorry, I can't make it today.");
    } else {
      resolve("Hey, let's have some tea today.");
    }
  });

  letsHaveSomeTea
    .then((message) => console.log("Tea Promise Resolved:", message))
    .catch((error) => console.log("Tea Promise Rejected:", error));

  //  Promise from Button Events
  const resolveButton = document.getElementById("resolve-button");
  const rejectButton = document.getElementById("reject-button");

  const buttonPromise = new Promise((resolve, reject) => {
    resolveButton.addEventListener("click", () => {
      resolve("Promise resolved by button click!");
    });

    rejectButton.addEventListener("click", () => {
      reject("Promise rejected by button click!");
    });
  });

  buttonPromise
    .then((message) => console.log("Button:", message))
    .catch((error) => console.log("Button:", error));

  // Timer Promise (with .catch)
  const timerPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true; 
      if (success) {
        resolve("Data received after 2 seconds...");
      } else {
        reject("Error: Failed to get data after timeout.");
      }
    }, 2000);
  });

  timerPromise
    .then((message) => console.log(message))
    .catch((err) => console.log(err));

  //  Promise Chaining
  const numberPromise = new Promise((resolve) => {
    resolve(10);
  });

  numberPromise
    .then((num) => {
      console.log("Step 1 value:", num);
      return num * 2;
    })
    .then((double) => {
      console.log("Step 2 value:", double);
      return double + 5;
    })
    .then((result) => {
      console.log("Step 3 value:", result);
      console.log(`Final result: ${result}`);
    })
    .catch((err) => console.log("Error in chain:", err));

  const p1 = new Promise((resolve) => setTimeout(() => resolve("Promise 1 done"), 1000));
  const p2 = new Promise((resolve) => setTimeout(() => resolve("Promise 2 done"), 1500));
  const p3 = new Promise((resolve) => setTimeout(() => resolve("Promise 3 done"), 2000));

  Promise.all([p1, p2, p3])
    .then((results) => {
      console.log(" Promise.all results:");
      console.log(results);
    })
    .catch((err) => console.log(" One of the promises failed:", err));

  // Fetch API Example
  const dataButton = document.getElementById("data-button");

  dataButton.addEventListener("click", () => {
    console.log("Fetching data from API...");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(" Data fetched successfully:");
        console.log(data);
      })
      .catch((err) => console.log(" Error fetching data:", err));
  });


  // Callback Hell 
  console.log("Start (Callback Hell)");
  setTimeout(() => {
    console.log("Step 1 completed");
    setTimeout(() => {
      console.log("Step 2 completed");
      setTimeout(() => {
        console.log("Step 3 completed");
        console.log("End (Callback Hell)");
      }, 1000);
    }, 1000);
  }, 1000);

  console.log("Start (Promises)");
  const wait = (ms, message) =>
    new Promise((resolve) => {
      setTimeout(() => {
        console.log(message);
        resolve();
      }, ms);
    });

  wait(1000, "Step 1 completed (Promise)")
    .then(() => wait(1000, "Step 2 completed (Promise)"))
    .then(() => wait(1000, "Step 3 completed (Promise)"))
    .then(() => console.log("End (Promises)"));
});
