document.addEventListener("DOMContentLoaded", () => {
  const excuse = false;

  const resolveButton = document.getElementById("resolve-button");
  const rejectButton = document.getElementById("reject-button");
  const dataButton = document.getElementById("data-button");

  const promise = new Promise((resolve, reject) => {
    resolveButton.addEventListener("click", () => {
      resolve("Promise resolved...");
    });
    rejectButton.addEventListener("click", () => {
      reject("Promise rejected...");
    });

    setTimeout(() => {
      reject("Promise rejected...");
    }, 0);
  });

  promise
    .then((message) => console.log(message))
    .catch((err) => console.log(err));

  const letsHaveSomeTea = new Promise((resolve, reject) => {
    if (excuse) {
      reject("I'm sorry, I can't make it today.");
    } else {
      resolve("Hey, let's have some tea today.");
    }
  });
  letsHaveSomeTea.then((message) => console.log(message));
  letsHaveSomeTea.catch((error) => console.log(error));

  console.log(letsHaveSomeTea);
  // console.log(letsHaveSomeTea);

  // const excuse = true;
  // new Promise((resolve, reject) => {
  //   if (excuse) reject("Just rejected");
  //   resolve("Let's do it");
  // })
  //   .then((message) => {
  //     console.log(message);
  //   })
  //   .catch((err) => console.log(err));

  // const resolveButton = document.getElementById("resolve-button");
  // const rejectButton = document.getElementById("reject-button");
  // const showSomething = () => console.log("Arrow log...");

  // const promise = new Promise((resolve, reject) => {
  //   resolveButton.addEventListener("click", () => {
  //     resolve("Promise resolved...");
  //   });
  //   rejectButton.addEventListener("click", () => {
  //     reject("Promise rejected...");
  //   });
  // console.log("Log 1...");

  //   setTimeout(() => {
  //     reject("Promise rejected...");
  //   }, 5000);
  // showSomething();

  // console.log("Log 2...");

  // Line by line 1, 2, 3...

  // 1- Default
  // 2 - Promises
  // 3- Timers

  // API's (Application Programming Interface)

  // https://jsonplaceholder.typicode.com/users

  // XHR (XMLHttpRequest)
  // Fetch (window.fetch)

  // window
  //   .fetch("https://jsonplaceholder.typicode.com/users") // GET
  //   .then((result) => {
  //     return result.json(); // Convert to JSON
  //   })
  //   .then((data) => console.log(data)) //Data
  //   .catch((err) => console.log(err));

  // let apiData;

  dataButton.addEventListener("click", () => {
    window
      .fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  });

  promise
    .then((message) => console.log(message))
    .catch((err) => console.log(err));
  // console.log(apiData);

  // then, catch                                                                                                                                                                         
});
