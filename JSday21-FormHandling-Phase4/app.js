// document.getElementById("userForm").addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     // Collecting values directly from the event target
//     var name = event.target.username.value;
//     var age = event.target.age.value;
//     var email = event.target.email.value;
//     var phone = event.target.phone.value;
//     var message = event.target.message.value;
//     // Collecting gender
//     var gender = event.target.gender.value; 
  
//     // Collecting hobbies
   
//     var hobbies = [];
//     var hobbyCheckboxes = event.target.hobbies; 
//     for (var i = 0; i < hobbyCheckboxes.length; i++) {
//       if (hobbyCheckboxes[i].checked) {
//         hobbies.push(hobbyCheckboxes[i].value);
//       }
//     }
  

//     // var hobbies = Array.from(event.target.querySelectorAll('input[name="hobbies"]:checked'))
//     // .map(function(checkbox) {
//     //     return checkbox.value;
//     // });
    

//     // var hobbies = [];
//     // Array.from(event.target.hobbies).forEach(function(checkbox) {
//     //     if (checkbox.checked) {
//     //         hobbies.push(checkbox.value);
//     //     }
//     // });


//     // Logging values

//     // console.table({
//     //   name: name,
//     //   age: age,
//     //   email: email,
//     //   phone: phone,
//     //   message: message,
//     //   gender: gender,
//     //   hobbies: hobbies
//     // });

  

//     console.log(  name,  age, email,  phone,  message, gender, hobbies);
//     console.table([ name,  age, email,  phone,  message, gender, hobbies] );
//     console.table({ name,  age, email,  phone,  message, gender, hobbies } );

// });

// <!-- Dynamic created form  -->


// Create Form Element
// const root = document.getElementById('root');

// // Create form dynamically using JavaScript
// const form = document.createElement('form');
// form.id = 'userForm';

// form.innerHTML = `
//   <div class="input-group">
//     <label for="username">Enter your name here:</label>
//     <input type="text" id="username" name="username" placeholder="Enter your name here" required>
//   </div>
//   <div class="input-group">
//     <label for="age">Enter your age here:</label>
//     <input type="number" id="age" name="age" placeholder="Enter your age here" required>
//   </div>
//   <div class="input-group">
//     <label for="email">Enter your email here:</label>
//     <input type="email" id="email" name="email" placeholder="Enter your email here" required>
//   </div>
//   <div class="input-group">
//     <label for="phone">Enter your phone number:</label>
//     <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required>
//   </div>
//   <div class="input-group">
//     <label for="message">Your message:</label>
//     <textarea id="message" name="message" rows="4" placeholder="Type your message here..." required></textarea>
//   </div>
//   <div class="input-group">
//     <label>Select your hobbies:</label>
//     <div>
//       <label><input type="checkbox" name="hobbies" value="reading"> Reading</label>
//       <label><input type="checkbox" name="hobbies" value="traveling"> Traveling</label>
//       <label><input type="checkbox" name="hobbies" value="gaming"> Gaming</label>
//     </div>
//   </div>
//   <div class="input-group">
//     <label>Select your gender:</label>
//     <div>
//       <label for="male">Male</label>
//       <input type="radio" id="male" name="gender" value="male" required>
//       <label for="female">Female</label>
//       <input type="radio" id="female" name="gender" value="female" required>
//     </div>
//   </div>
//   <button type="submit">Submit</button>
// `;

// // Append form to root
// root.appendChild(form);

// // Handle form submission
// form.addEventListener('submit', function (event) {
//   event.preventDefault();

//   // Collect values
//   const name = form.username.value;
//   const age = form.age.value;
//   const email = form.email.value;
//   const phone = form.phone.value;
//   const message = form.message.value;
//   const gender = form.gender.value;

//   // Collect hobbies
//   const hobbies = [];
//   const hobbyCheckboxes = form.hobbies;
//   for (let i = 0; i < hobbyCheckboxes.length; i++) {
//     if (hobbyCheckboxes[i].checked) {
//       hobbies.push(hobbyCheckboxes[i].value);
//     }
//   }

//   // Display data
//   const displayData = document.createElement('div');
//   displayData.classList.add('display-data');
//   displayData.innerHTML = `
//     <h2>Form Data</h2>
//     <ul>
//       <li><strong>Name:</strong> ${name}</li>
//       <li><strong>Age:</strong> ${age}</li>
//       <li><strong>Email:</strong> ${email}</li>
//       <li><strong>Phone:</strong> ${phone}</li>
//       <li><strong>Message:</strong> ${message}</li>
//       <li><strong>Gender:</strong> ${gender}</li>
//       <li><strong>Hobbies:</strong> ${hobbies.join(', ') || 'None'}</li>
//     </ul>
//   `;

//   root.appendChild(displayData);
// });



//  DYNAMICALY other way if i dont want to use FileSystemWritableFileStream.inerr Html 


const root = document.getElementById('root');
const form = document.createElement('form');
form.id = 'userForm';
function createInputGroup(labelText, inputType, inputId, inputName) {
  const group = document.createElement('div');
  group.classList.add('input-group');
  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = labelText;
  const input = document.createElement('input');
  input.setAttribute('type', inputType);
  input.id = inputId;
  input.name = inputName;
  input.required = true;
  group.appendChild(label);
  group.appendChild(input);
  return group;
}
form.appendChild(createInputGroup('Enter your name here:', 'text', 'username', 'username'));
form.appendChild(createInputGroup('Enter your age here:', 'number', 'age', 'age'));
form.appendChild(createInputGroup('Enter your email here:', 'email', 'email', 'email'));
form.appendChild(createInputGroup('Enter your phone number:', 'tel', 'phone', 'phone'));
const messageGroup = document.createElement('div');
messageGroup.classList.add('input-group');
const messageLabel = document.createElement('label');
messageLabel.setAttribute('for', 'message');
messageLabel.textContent = 'Your message:';
const messageInput = document.createElement('textarea');
messageInput.id = 'message';
messageInput.name = 'message';
messageInput.rows = 4;
messageInput.required = true;
messageGroup.appendChild(messageLabel);
messageGroup.appendChild(messageInput);
form.appendChild(messageGroup);
const submitButton = document.createElement('button');
submitButton.textContent = 'Submit';
submitButton.setAttribute('type', 'submit');
form.appendChild(submitButton);
root.appendChild(form);
form.addEventListener('submit', function (event) {
  event.preventDefault();


  root.appendChild(displayData);
});
