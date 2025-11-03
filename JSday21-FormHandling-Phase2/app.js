// Targetting
const ROOT = document.getElementById("root");
// Creating elements
const section = document.createElement("section");
const form = document.createElement("form");
// const nameInput = createInputElement("text", "Enter your name here", true);
// const ageInput = createInputElement("number", "Enter your age here", true);
// const input = document.createElement("input");
// input.setAttribute("type", "number");
// input.type = "number"

// console.dir(input);

// Name input 

const nameInput = createInputElement( "text", "Enter your name here", "username"  
);
const nameInputLabel = createInputLabel("Enter your name here", "username");
const nameInputGroup = wrapMultipleElements(
  [nameInputLabel, nameInput],
  "input-group"
);

// Age input
const ageInput = createInputElement("number", "Enter your age here", "age");
const ageInputLabel = createInputLabel("Enter your age here", "age");
const ageInputGroup = wrapMultipleElements(
  [ageInputLabel, ageInput],
  "input-group"
);

// Email input
const emailInput = createInputElement(
  "email",
  "Enter your email here",
  "email"
);
const emailInputLabel = createInputLabel("Enter your email here", "email");
const emailInputGroup = wrapMultipleElements(
  [emailInputLabel, emailInput],
  "input-group"
);

// Select Gender Label
const selectGenderLabel = createInputLabel("Select your gender", "");

// Radio buttons
const maleRadioInput = createInputElement("radio", "", "male", "gender");
const maleRadioLabel = createInputLabel("Male", "male");
const maleRadioWrapper = wrapMultipleElements(
  [maleRadioLabel, maleRadioInput],
  ""
);

const femaleRadioInput = createInputElement("radio", "", "female", "gender");
const femaleRadioLabel = createInputLabel("Female", "female");
const femaleRadioWrapper = wrapMultipleElements(
  [femaleRadioLabel, femaleRadioInput],
  ""
);

const genderRadioWrapper = wrapMultipleElements(
  [
    selectGenderLabel,
    wrapMultipleElements([maleRadioWrapper, femaleRadioWrapper]),
  ],
  "input-group"
);

// Appending elements

form.appendChild(nameInput);
form.appendChild(ageInput);
form.appendChild(nameInputGroup);
form.appendChild(ageInputGroup);
form.appendChild(emailInputGroup);
form.appendChild(genderRadioWrapper);

section.appendChild(form);
ROOT.appendChild(section);

// Utils
function createInputElement(type, placeholder, label = false) {
function createInputElement(type, placeholder, id, name) {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.placeholder = placeholder;
  inputElement.id = id;
  inputElement.name = name;
  return inputElement;
}

  if (label) {
    const wrapper = document.createElement("div");
    wrapper.classList.add("input-wrapper");
    const labelField = document.createElement("label");
    labelField.innerText = placeholder;
// generate label

    wrapper.appendChild(labelField);
    wrapper.appendChild(inputElement);
    return wrapper;
  }
function createInputLabel(labelText, labelFor) {
  const labelField = document.createElement("label");
  labelField.setAttribute("for", labelFor);
  labelField.innerText = labelText;
   return inputElement;
   // return labelField;
}
return labelField;

// function wrapInputAndLabel(label, input) {
//   const wrapper = document.createElement("div");
//   wrapper.classList.add("input-wrapper");
//   wrapper.appendChild(label);
//   wrapper.appendChild(input);
//   return wrapper;
// }



function wrapMultipleElements(elements, className) {
  const wrapper = document.createElement("div");
  // if (className) wrapper.classList.add(className);
  // elements.forEach(function (element) {
  //   wrapper.appendChild(element);
  // });
  className && wrapper.classList.add(className);
  elements.forEach(function (element) {
    wrapper.appendChild(element);
  });
  return wrapper;

};