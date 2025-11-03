// 1*********************  globally 

var globalVar = "I'm a global var variable";
var a = "I'm a global var variable";
let globalLet = "I'm a global let variable";
const globalConst = "I'm a global const variable";

console.log(globalVar)
console.log(globalLet)
console.log(globalConst)



// 2******************* FUNCTION 


function scopeTest() {
    var varVariable = "I am a var variable"; 
    let letVariable = "I am a let variable"; 
    const constVariable = "I am a const variable"; 
    console.log(varVariable); 
    console.log(letVariable); 
    console.log(constVariable); 


}

scopeTest();

// Outside of the function,  we cannot access these variables
// console.log(varVariable); 
// console.log(letVariable);
// console.log(constVariable); 

// function ko outside access kary gy tu source ma b erroe aye ga 



// 3******************* BLOCK SCOPEE 


// Block scope example
{
    let blockScopedVar = "I am block scoped!";
    const blockScopedConst = "I am also block scoped!";
    console.log(blockScopedVar);    
    console.log(blockScopedConst);   
}

// // Trying to access the block-scoped variables outside the block

console.log(blockScopedVar);   
console.log(blockScopedConst);


// practice **********  


var b = "Hello"
var c  = "Good Night "
console.log(a)
console.log(b)
console.log(c)



var a = 23 ;
var b = "Hello"
var c  = "Good Night "
console.log(a)
console.log(b)
console.log(c)


{
    // var a = "Inside Block" ;
let b = "Inside Block"
const c  ="Inside Block"
console.log(a)
console.log(b)
console.log(c)
}


// // var block ka anda access nahi hoya ya global my ayr ga 



function demonstrateVariables() {
    // Using var
    var varVariable = "I am a var variable"; 
    console.log(varVariable); 

    // Using let
    let letVariable = "I am a let variable"; 
    console.log(letVariable); 

    // Using const
    const constVariable = "I am a const variable"; 
    console.log(constVariable); 
}

demonstrateVariables();



function testFunction() {
   const a = "Hello";
      let b = "hello WORLD"
      console.log(a,b);

    for (let i = 0; i < 5; i++) {
      const a = "Hello";
      let b = "hello WORLD"
      console.log(i, a,b);
    }

  }
  testFunction();





// let a = "global"; 


function testScope() {
  let x = "local"; 
  
  if (true) {
    let x = "block"; 
    console.log(x); 
  }
  console.log(x); 
}

testScope();
console.log(a); 



