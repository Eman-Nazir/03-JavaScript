document.getElementById("checkBtn").addEventListener("click", checkRegex);

function checkRegex() {
  const text = document.getElementById("userInput").value;
  let result = "";

  console.log("User Input:", text);

  const onlyLetters = /^[A-Za-z]+$/;
  const onlyNumbers = new RegExp("^[0-9]+$");
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const containsDigit = /\d/;
  const hasSpace = /\s/;
  const startsWithA = /^A/;
  const endsWithDot = /\.$/;
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/;
  const isMixed = /[A-Za-z]/.test(text) && /\d/.test(text);

  console.log("Only letters:", onlyLetters.test(text));
  console.log("Only numbers:", onlyNumbers.test(text));
  console.log("Valid email format:", emailPattern.test(text));
  console.log("Contains digit:", containsDigit.test(text));
  console.log("Contains space:", hasSpace.test(text));
  console.log("Starts with A:", startsWithA.test(text));
  console.log("Ends with dot:", endsWithDot.test(text));
  console.log("Has special characters:", hasSpecial.test(text));
  console.log("Mixed (letters + digits):", isMixed);

  console.log("Digits found:", text.match(/\d+/g));
  console.log("Position of '@' (search):", text.search(/@/));

  result += `<b>Input:</b> ${text}<br><br>`;
  result += `Only letters: ${onlyLetters.test(text)}<br>`;
  result += `Only numbers: ${onlyNumbers.test(text)}<br>`;
  result += `Valid email format: ${emailPattern.test(text)}<br>`;
  result += `Contains digit: ${containsDigit.test(text)}<br>`;
  result += `Contains space: ${hasSpace.test(text)}<br>`;
  result += `Starts with "A": ${startsWithA.test(text)}<br>`;
  result += `Ends with dot: ${endsWithDot.test(text)}<br>`;
  result += `Has special character: ${hasSpecial.test(text)}<br>`;
  result += `Mixed (letters + digits): ${isMixed}<br>`;

  const replaced = text.replace(/\d/g, "#");
  result += `<br>After replacing digits: ${replaced}<br>`;

}
