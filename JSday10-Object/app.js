// // Objects
// const person = {
//     // Properties
//     personName: "Raheel",
//     // name: "Raheel",
//     height: 6,
//     weight: 80,
//     male: true,
//     female: false

    // Methods
//     heWalks: function (username) {
//      personName = username;
//       this.personName = username;
//       console.log(username)
//       console.log(`${this.personName} walks...`);
//       console.log(`${person.personName} walks...`);
//       console.log(`${person["personName"]} walks...`);
//       return `${person["personName"]} walks...`
//     },
//   };

//   person.heWalks("Rehman");

// // is username ko pass rehman kiya hoya ha 

// const someOne = "personName";
// console.log("Person", person);
// console.log("Person", person[someOne]);
// console.log("Person", person.personName);
// console.log("Person", person.height);
// console.log("Person", person);

// person.personName = "John";
// person["personName"] = "Celine";
// delete person.personName;
// delete person["name"];
// person.profession = "Development";
// person["age"] = 40;

// // person.heWalks("Rehman")

// console.log("Person", person);
// console.log("Person", person.heWalks("Rehman"));
// console.log("Person", name);
// console.log("Person", someOne);





// PRACTICE 

// const user = {
//   firstname : "EMAN",
//   lastname : "NAZIR",
//   age: 19,
//   'full-name' : "EMAN NAZIR"
// }

// UPDATE OBJECT 

// user.study = "BSCS",
// user.isstudent = "UNIVERSITY",
// user['is-student'] = "UNIVERSITY"


// console.log(user);
// console.log(user.firstname);
// console.log(user.study);
// console.log(user["lastname"]);
// console.log(user.full-name);
// console.log(user["full-name"]);
// console.log(user["is-student"]);

// console.log(user(this.age))   error
// this is us ein metho(function) 

// EXAMPLE  update

// const person = {
//   name: "Eman",
//   age: 25,
//   city: "New York"
// };

// person.name = "Maira";  
// person.age = 26;        
// person.city = "Chicago"; 

// console.log(person);



// EXAMPLE  update 


// const person = {
//   Name: "Eman",
//   age: 25,
//   city: "New York"
// };

// person.address =  "Burewala"  
// console.log( person);

// Example 1: Adding new keys to an object

// const book = {
//   title: "JavaScript Basics",
//   author: "John Doe",
//   pages: 250
// };

// // UPDATE OBJECT
// book.publisher = "TechPress";
// book['publish-year'] = 2021;

// console.log(book);

// Example 2: Updating existing keys and adding new ones

// const car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: 2018
// };

// // UPDATE OBJECT
// car.year = 2022;               
// car.color = "Blue";            
// car['registration-status'] = "Active";  

// console.log(car);

// Example 3: Mixing property updates and new additions

// const smartphone = {
//   brand: "Apple",
//   model: "iPhone 13",
//   memory: "128GB"
// };

// // UPDATE OBJECT
// smartphone.memory = "256GB";      
// smartphone.price = 999;               
// smartphone['operating-system'] = "iOS";  

// console.log(smartphone);

// Example 4: Using computed properties (dynamic key)

// const laptop = {
//   brand: "Dell",
//   model: "XPS 13",
//   processor: "Intel i7"
// };

// // UPDATE OBJECT

// laptop.ram = "16GB";          
// laptop[key] = "Available"; 

// console.log(laptop);



// Here are a few more examples of objects within objects:

// Example 1: Car Object

// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   specifications: {
//     engine: "2.5L",
//     horsepower: 203,
//     fuelType: "Gasoline"
//   }
// };
// console.log(car)
// console.log(car.specifications.horsepower); 

// // Example 2: School Object

// const school = {
//   name: "Greenwood High",
//   location: "New York",
//   students: {
//     count: 500,
//     gradeLevels: ["9th", "10th", "11th", "12th"]
//   }
// };
// console.log(school)
// console.log(school.students.count); 
// console.log(school.students.gradeLevels[1]); 

// // Example 3: Recipe Object

// const recipe = {
//   title: "Pancakes",
//   ingredients: {
//     flour: "2 cups",
//     eggs: "2",
//     milk: "1 cup"
//   },
//   cookingTime: "15 minutes"
// };
// console.log(recipe)
// console.log(recipe.ingredients.milk); 
// console.log(recipe.ingredients.eggs); 
// console.log(recipe.ingredients.flour); 


// // Example 4: Recipe Object

// const person = {
//   name: "Eman",
//   age: 25,
//   address: {
//     city: "CityName",
//     country: "CountryName"
//   }
// };

// console.log(person)
// console.log(person.age)
// console.log(person.address.city); 

// // Example 5: Book Object

// const book = {
//   title: "The Great Gatsby",
//   author: {
//     firstName: "F. Scott",
//     lastName: "Fitzgerald"
//   },
//   year: 1925
// };
// console.log(book)
// console.log(book.title)
// console.log(book.year)
// console.log(book.author.lastName)



// ######### DELETE 
// delete person.personName;
   
// example 1 

// const user = {
//     firstname : "EMAN",
//     lastname : "NAZIR",
//     age: 19,
//   }
//   console.log("Before Delete ======",   user)
//   delete user.age;
//   console.log("Before Delete ======", user)

// example 1 

// const book = {
//   title: "The Great Gatsby",
//   author: {
//     firstName: "F. Scott",
//     lastName: "Fitzgerald"
//   },
//   year: 1925
// };
// console.log("With YEAR====", book)
// console.log(book.title)
// console.log(book.year)
// delete book.year
// console.log(book.author.lastName)
// console.log("With YEAR====",  book)

// Example 1: Deleting a Property

// const person = {
//   name: "Eman",
//   age: 30
// };

// // Deleting the 'age' property
// delete person.age;

// console.log(person); // Output: { name: "Eman" }

// Example 2: Deleting a Nested Property

// const user = {
//   username: "Eman",
//   details: {
//     email: "eman@example.com",
//     age: 30
//   }
// };

// // Deleting the 'age' property from the 'details' object

// delete user.details.age;

// console.log(user); 

// Example 3: Deleting a Dynamic Property



// const settings = {
//   darkMode: true,
//   notifications: false
// };



// delete settings.darkMode;

// console.log(settings);









// METHOD IN JS  (THIS)

// const person = {
//   personName: "Raheel",

//   heWalks: function (username) {
//     person.personName = username;
//     console.log(username);
//     console.log(`${this.personName} walks...`);
//     console.log(`${person.personName} walks...`);
//      console.log(`${person["personName"]} walks...`);
//   }
// };

// person.heWalks("Rehman");



// Example 1: Animal Object

// const animal = {
//   animalName: "Lion",
//   sound: function (newSound) {
//     animal.animalName = newSound;
//     console.log(newSound);
//     console.log(`${this.animalName} roars...`);
//     console.log(`${animal.animalName} roars...`);
//     console.log(`${animal["animalName"]} roars...`);
//   }
   
// };

// console.log(`${animal.animalName} roars...`);  //lion roars
// console.log(animal["animalName"]);  //lion roars

// animal.sound("Tiger");



// animal.sound("Tiger");

// Explanation:

// Object Definition: animal is an object with a property animalName and a method sound.

// Method Functionality: The method sound changes the animalName and logs different messages.

// this Keyword: Refers to the current object (animal) within the method.


// Example 2: Car Object

// const car = {
//   model: "Toyota",
//   start: function (newModel) {
//     car.model = newModel;
//     console.log(newModel);
//     console.log(`${this.model} starts...`);
//     console.log(`${car.model} starts.......`);
//     console.log(`${car["model"]} starts...`);
//   }
// };

// car.start("Honda");



// Explanation:

// Object Definition: car has a property model and a method start.

// Method Functionality: The method start updates the model and logs messages about starting the car.

// Use of this: Again, this refers to the car object.


// Example 3: Student Object

// const student = {
//   name: "Ayesha",
//   study: function (newName) {
//     student.name = newName;
//     console.log(newName);
//     console.log(`${this.name} studies...`);
//     console.log(`${student.name} studies...`);
//     console.log(`${student["name"]} studies...`);
//   }
// };

// student.study("Yashfa");


// Key Takeaway:
// In each example, the this keyword is used to refer to the current object within its method. It allows access to the object's properties (keys) inside that method.

// 1... 

  const book = {
  title: "JavaScript Basics",
  author: "John Doe",
  printDetails: function() {
    console.log(`Title: ${this.title}`);
    console.log(`Author: ${this.author}`);
  }
};

book.printDetails();

// 2.... 


//   const movie = {
//   title: "Inception",
//   year: 2010,
//   getDetails: function() {
//     console.log(`Movie: ${this.title}`);
//     console.log(`Released in: ${this.year}`);
//   }
// };

// movie.getDetails();

// 3.... 

//   const laptop = {
//   brand: "Dell",
//   model: "Inspiron",
//   showSpecs: function() {
//     console.log(`Brand: ${this.brand}`);
//     console.log(`Model: ${this.model}`);
//   }
// };

// laptop.showSpecs();

// 4,,,,,, 

// const phone = {
//   brand: "Apple",
//   model: "iPhone 12",
//   getPhoneInfo: function() {
//     console.log(`Phone Brand: ${this.brand}`);
//     console.log(this.brand);
//     console.log(`Phone Model: ${this.model}`);
//   }
// };

// phone.getPhoneInfo();

// 5.... 

// const city = {
//   name: "Paris",
//   population: 2148327,
//   describe: function() {
//     console.log(`${this.name} has a population of ${this.population}`);
//   }
// };

// city.describe();




// const car = {
//   model: "Toyota",
//   lauch: 2023,
//   start: function (newCars) {
//     car.model = newCars;
//     console.log(newCars);
//     console.log(`${this.model} starts...`);
//     console.log(`${car.model} starts.......`);
//     console.log(`${car["model"]} starts...`);
//   }
// };

// car.start("Honda");

// console.log(car)


// In all these examples:

// We pass a value to a function (method) using parameters.

// The this keyword allows the method to access and modify the object’s properties based on the input values.




// Example 1: Car Object with setSpeed Method

// const car = {
//   brand: "Honda",
//   speed: 0,
//   setSpeed: function(newSpeed) {
//     car.speed = newSpeed;
//     console.log(`${this.brand} is now going at ${this.speed} km/h.`);
//   }
// };

// car.setSpeed(120); 


// Object Definition: car has properties brand and speed.

// Method setSpeed: Accepts a newSpeed value and updates the speed of the car. The method logs the updated speed using the this keyword.


// Example 2: Laptop Object with upgradeRAM Method

// const laptop = {
//   brand: "HP",
//   ram: 8,
//   upgradeRAM: function(newRAM) {
//     laptop.ram = newRAM;
//     console.log(`${this.brand} laptop now has ${this.ram}GB of RAM.`);
//   }
// };

// laptop.upgradeRAM(16);

// Explanation:

// Object Definition: laptop has properties brand and ram.

// Method upgradeRAM: Accepts a newRAM value and updates the ram property. The method uses this to access and update the ram value.


// Example 3: BankAccount Object with deposit Method

// const bankAccount = {
//   owner: "Alice",
//   balance: 1000,
//   deposit: function(amount) {
    // bankAccount.balance = amount;

    // console.log(`${this.owner} deposited $ ${amount}. New balance: $${this.balance}.`);

    // console.log(this.owner + " deposited $" + amount + ". New balance: $" + this.balance + ".");
  // }
// };

// bankAccount.deposit(500); 

// Explanation:
// 
// Object Definition: bankAccount has owner and balance properties.

// Method deposit: Accepts a value amount to add to the balance. The method uses this.balance to update the property.


// Example 4: Phone Object with changeModel Method

// const phone = {
//   brand: "Samsung",
//   model: "Galaxy S20",
//   changeModel: function(newModel) {
//     this.model = newModel;
//     console.log(`${this.brand} phone model is now ${this.model}.`);
//   }
// };

// phone.changeModel("Galaxy S21");

// Explanation:

// Object Definition: phone has properties brand and model.

// Method changeModel: Takes newModel as a parameter and updates the model property using this.model.


// Example 5: User Object with updateAge Method

// const user = {
//   name: "John",
//   age: 25,
//   updateAge: function(newAge) {
//   user.age = newAge;
//     console.log(`${this.name} is now ${this.age} years old.`);
//   }
// };

// user.updateAge(30);

// Explanation:

// Object Definition: user has name and age properties.

// Method updateAge: Accepts a newAge value to update the age property. The method uses this.age to make the change.


// Example 6: Store Object with applyDiscount Method

// const store = {
//   name: "Tech Store",
//   price: 500,
//   applyDiscount: function(discount) {
//     this.price -= discount;
//     console.log(`${this.name}'s product is now priced at $${this.price}.`);
//   }
// };

// store.applyDiscount(50);






// Example:

const person = {
  name: "John",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  }
};
person.greet();  // Output: Hello, John

// Example:



const car1 = {
  brand: "Toyota",
  showBrand1: function () {
    console.log(this.brand);
  }
};

const car2 = {
  brand: "Honda",
  showBrand2:   function () {
    console.log(this.brand); 
}
}

car1.showBrand1();  // Output: Toyota
car2.showBrand2();  // Output: Honda




