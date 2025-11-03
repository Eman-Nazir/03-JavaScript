// Grabbing elements
const checkBtn = document.getElementById("checkBtn");
const fetchBtn = document.getElementById("fetchBtn");
const msg = document.getElementById("message");
const status = document.getElementById("status");
const userList = document.getElementById("userList");

//  Example 1: Error handling with try...catch for input
checkBtn.addEventListener("click", () => {
  msg.textContent = "";
  msg.className = "";

  try {
    const value = document.getElementById("numInput").value;

    if (value.trim() === "") throw new Error(" Please enter a number!");
    if (isNaN(value)) throw new Error(" That’s not a valid number!");
    if (value < 0) throw new Error(" Number cannot be negative!");

    msg.textContent = ` ${value} is a valid number!`;
    msg.className = "success";
  } catch (error) {
    msg.textContent = error.message;
    msg.className = "error";
  } finally {
    console.log("✔ Input check completed.");
  }
});

//  Example 2: Fetch API with Async/Await + Error Handling
fetchBtn.addEventListener("click", async () => {
  status.textContent = " Fetching user data...";
  userList.innerHTML = "";
  status.className = "";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(` Network Error: ${response.status}`);
    }

    const data = await response.json();

    status.textContent = " Users fetched successfully!";
    status.className = "success";

    // Show first 5 users in UI
    data.slice(0, 5).forEach((user) => {
      const div = document.createElement("div");
      div.classList.add("user-card");
      div.innerHTML = `
        <strong>${user.name}</strong><br>
        <small>${user.email}</small>
      `;
      userList.appendChild(div);
    });
  } catch (error) {
    status.textContent = " " + error.message;
    status.className = "error";
    console.error("Error occurred:", error);
  } finally {
    console.log("✔ Fetch attempt completed.");
  }
});
