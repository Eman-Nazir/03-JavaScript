 // Object methods/ 
 const personOne = {
  username : "Musa",
  age: 28,
  getUserDetails: function () {
    return `${this.username} is ${this.age} years old`;
  },
  toString: function () {
    return `${this.username} is ${this.age} years old`;
  },
};
console.log(personOne);
console.log("String", personOne.toString());
console.log(typeof personOne.toString());
const newObject = Object()
console.log({}, Object());
console.log([]);
console.log("construct", {}.constructor, Object());
console.log({}.constructor());
console.log([].constructor());
console.log([]);
// EXAMPLES ....... 
// // 1.... 
  let obj1 = Object(); 
console.log(obj1);  
// // 2.... 
 let obj = new Object();
obj.name = "Eman";
obj.age = 19;
obj.greet = function() {
    console.log("Hello,  my Name is " + this.name + " and my age is " + this. age) ;
};
console.log(obj.name);  
obj.greet();            
// 3........  

 let person = new Object(); 

person.name = "Eman";
person.age = 19;
person.occupation = "Web Developer";
person.greet = function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
};
person.greet();               
console.log(person.name);    
console.log(person.age);     
console.log(person.occupation); 
// Simple object with a function inside
let personTwo = {
    name: "Hadia",
    age: 21,
    greet: function() {
      return "Hello, " + this.name;
    }
  };
  console.log(personTwo);  
  console.log(personTwo.name);  
  console.log(personTwo.age);  
  console.log(personTwo.greet());  
  // Using hasOwnProperty method
  console.log(personTwo.hasOwnProperty('name'));  
  console.log(personTwo.hasOwnProperty('gender'));  
  
  // Using valueOf method

  console.log(personTwo.valueOf());  
  
  // Using propertyIsEnumerable method

  console.log(personTwo.propertyIsEnumerable('name'));  
  console.log(personTwo.propertyIsEnumerable('age'));  
  console.log(personTwo.propertyIsEnumerable('study'));  
  console.log(personTwo.propertyIsEnumerable('gender'));  
  console.log(personTwo.propertyIsEnumerable('greet'));  
  
  // Using the constructor function
  console.log(personTwo.constructor);  
  console.log(Object);  
  // Using Object.keys method
  console.log(Object.keys(person));  
  // Using Object.values method
  console.log(Object.values(person)); 
  // Using Object.entries method
  console.log(Object.entries(person));
//  Enumerable Property
let car = {
  brand: "Toyota",
  model: "Corolla"
};
console.log(car.propertyIsEnumerable('brand')); 
console.log(car.propertyIsEnumerable('car'));   
// valueOf  *************** 
let personData = {
  name: "Eman",
  age: 25
};
console.log(personData.valueOf());  
let counter = {
  count: 5,
  valueOf: function() {
    return this.count;
  }
};
console.log(counter.valueOf()); 
let num = 42;
console.log(num.valueOf());  

const add = {
  value: 5,
  valueOf: function() {
      return this.value;
  }
};
console.log(add + 10);
const objOne = {
   name: "Eman",
   age: 18 
  };

console.log(objOne.propertyIsEnumerable("name")); 
console.log(objOne.propertyIsEnumerable("age"));  
console.log(objOne.propertyIsEnumerable("address"));  
console.log(objOne.propertyIsEnumerable("class"));  
 const objTwo = {
   name: "Eman" 
  };
console.log(objTwo.propertyIsEnumerable("toString"));       
console.log(objTwo.propertyIsEnumerable("valueOf"));        
console.log(objTwo.propertyIsEnumerable("hasOwnProperty")); 
console.log(objTwo.propertyIsEnumerable("constructor"));    
const objThree = { a: 1, b: 2 };
console.log(objThree.propertyIsEnumerable('a'));
console.log(objThree.propertyIsEnumerable('c'));
console.log(objThree.propertyIsEnumerable('f'));
console.log(objThree.valueOf());

