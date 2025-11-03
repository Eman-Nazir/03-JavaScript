// Targeting
const ROOT = document.getElementById("root");

// Creating elements
const section = document.createElement("section");
const form = document.createElement("form");

// Name input
const nameInput = createInputElement("text", "Enter your name here:", "username", "username", "");
const nameInputLabel = createInputLabel("Enter your name here", "username");
const nameInputGroup = wrapMultipleElements([nameInputLabel, nameInput], "input-group");

// Age input
const ageInput = createInputElement("number", "Enter your age here:", "age", "age", "");
const ageInputLabel = createInputLabel("Enter your age here", "age");
const ageInputGroup = wrapMultipleElements([ageInputLabel, ageInput], "input-group");

// Email input
const emailInput = createInputElement("email", "Enter your email here:", "email", "email", "");
const emailInputLabel = createInputLabel("Enter your email here", "email");
const emailInputGroup = wrapMultipleElements([emailInputLabel, emailInput], "input-group");

// Select Gender Label
const selectGenderLabel = createInputLabel("Select your gender:", "");

// Radio buttons
const maleRadioInput = createInputElement("radio", "", "male", "gender", "male");
const maleRadioLabel = createInputLabel("Male", "male");
const maleRadioWrapper = wrapMultipleElements([maleRadioLabel, maleRadioInput], "");

const femaleRadioInput = createInputElement("radio", "", "female", "gender", "female");
const femaleRadioLabel = createInputLabel("Female", "female");
const femaleRadioWrapper = wrapMultipleElements([femaleRadioLabel, femaleRadioInput], "");


// const otherRadioInput = createInputElement("radio", "", "other", "gender" , "other");
// const otherRadioLabel = createInputLabel("other", "other");
// const otherRadioWrapper = wrapMultipleElements([otherRadioLabel, otherRadioInput], "");


const genderRadioWrapper = wrapMultipleElements(
  [
    selectGenderLabel,
    wrapMultipleElements([maleRadioWrapper, femaleRadioWrapper]),
  ],
  "input-group"
);


// const genderRadioWrapper = wrapMultipleElements(
//   [
//     selectGenderLabel,
//     wrapMultipleElements([maleRadioWrapper, femaleRadioWrapper,otherRadioWrapper]),
//   ],
//   "input-group"
// );


const submit = document.createElement("button")
submit.innerText = "Submit "


// Appending elements to the form
form.appendChild(nameInputGroup);
form.appendChild(ageInputGroup);
form.appendChild(emailInputGroup);
form.appendChild(genderRadioWrapper);
form.appendChild(submit)

// Appending form to section, then section to ROOT
section.appendChild(form);
ROOT.appendChild(section);

// Utils  is function ko call upar kiya hy with different differnet paeameter ... 

function createInputElement(type, placeholder, id, name = "", value = "") {
  const inputElement = document.createElement("input");
  inputElement.type = type;
  inputElement.placeholder = placeholder;
  inputElement.id = id;
  inputElement.name = name;
  inputElement.value = value
  return inputElement;
}

function createInputLabel(labelText, labelFor) {
  const labelField = document.createElement("label");
  labelField.setAttribute("for", labelFor);
  labelField.innerText = labelText;
  return labelField;
}

function wrapMultipleElements(elements, className) {
  const wrapper = document.createElement("div");
  if (className) wrapper.classList.add(className);
  elements.forEach(function (element) {
    wrapper.appendChild(element);
  });
  return wrapper;
}





// EVENT LISTENER FOR FUNCTION 

// 1...

// form.addEventListener("submit" ,function(event){
//   event.preventDefault();
//   // const form =  event.target.form ;
//   const name =  event.target.username.value ;
//   const age =  event.target.age.value ;
//   const email =  event.target.email.value ;
//   const gender =  event.target.gender.value ;


// console.log(form,name,age,email,gender);
// console.table ([name,age,email,gender])


// });


// 2.... 



form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.username.value; 
  const age = event.target.age.value;      
  const email = event.target.email.value;  

  // Log the individual values using console.dir
  console.dir(name);
  console.dir(age);
  console.dir(email);

  // Retrieve the checked gender value
  const gender = Array.from(event.target.gender).filter(function (element) {
    return element.checked; 
//  return element.value && element.checked; 

  })[0].value; 
  
  console.dir(gender);

  console.table({ name, age, email, gender });
   // Using an object for clarity

  console.table([ name, age, email, gender] );
   // Using an array for clarity
});


// 3....... 


// form.addEventListener("submit", function (event) {
//   event.preventDefault();
  
// 0 1 2 index ma name[0] age[1] email[2] ya wali value ko ham na index diya ka ha ka jab ham tabel ko print kar waye tu ya ba aye 

//   // Retrieve values from the form fields
//   const name = event.target[0].value;  
//   const age = event.target[1].value;  
//   const email = event.target[2].value;  

//   // Retrieve gender value using filter

//   const gender = Array.from(event.target["gender"]).filter(function (element) {
//     return element.value && element.checked; 
//     // Condition to check checked elements
//   })[0].value; 

//   // Use optional chaining to avoid errors if no checkbox is checked

//   console.table([ name, age, email, gender ]);
//   console.table({ name, age, email, gender});
//   console.log(name, age, email, gender);
// });




// 4...,,,, 


// form.addEventListener("submit", function (event) {
//   event.preventDefault();

//   const name = document.getElementById("username").value;
//   const age = document.getElementById("age").value;
//   const email = document.getElementById("email").value;
//   const male = document.getElementById("male").checked;
//   const female = document.getElementById("female").checked;
//   const gender = document.querySelector('input[name = "gender"]:checked').value;

//   console.table([name, age, email, gender]);
//   console.log([male, female]);

// });

