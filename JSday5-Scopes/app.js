// <=======   GLOBAL SCOPE  ============ >



var a = 10
var a = 55
a = 40
let b =20
// let b 66
b = 50
const c = 30
// c = 69

console.log(a)
console.log(b)
console.log(c)


{
    console.log(a)
    console.log(b)
    console.log(c) 
}



function globalscope () {
    var a = 44
     b = 66
    console.log(a)
    console.log(b)
    console.log(c) 
}
globalscope();

console.log(a)
console.log(b)
console.log(c) 




// <=======  LOCAL OR BLOCK VARAIABLE ============ >



{
var a = 10
var a = 55
a = 40
let b =20
// let b 66
b = 50
const c = 30
// c = 69
console.log(a)
console.log(b)
console.log(c)
}

var a = "i am outside block "
console.log(a)
console.log(b)
console.log(c)

// // b or c outside block accesssible nahi ho gay 



function localScope() {
 var a = " i am in function "
  console.log(a)
console.log(b)
console.log(c)
}
localScope();

var a = " i am outside function "
console.log(a)
localScope();


var a = " i am end of function "

    console.log(a)
    console.log(b)
    console.log(c)


// hamry pass jase hi function start { ho ga i am in function wali line execute ho gi memory ma space ly gii or print ho gii }  is ka bad ya line delete ho  jaye ga 
// i am outside wali line run ho gi sath hi orint ho jaye gi 
// phir upar wala function call ho ga to wali line run ho gi 
// phly  outside wali line run ho gi ua=s ka bad jab function call ho ga tu i am in function wali line run ho gii 



// function add (){
//     let result = 276;
//     // console.log(result)
// }

// console.log(result-outside-add)

// add();

//     console.log(result-end-add)


// function  sub  (){
//     let result = 277;
//     console.log(result)
// }
    // console.log(result-outside-sub)

// sub();
    // console.log(result-end-sub)
    
    // <======= FUNCTION SCOPE ============ >


function testVar() {
    var x = 10;
    var x = 100
    x = 300
    console.log(x);  
  }

  testVar();

// wrong way

// function testVar() {
//     var x = 10;
//     var x = 100
//     x = 300
//     console.log(x);  
//   }
  
//   console.log(x);  


//   testVar();

//   console.log(x);  



// function testLet() {
//     let y = 20;
//     console.log(y);  
//   }

//   testLet();

// wrong way  

//   function testLet() {
//     let y = 20;
//     console.log(y);  
//   }
//   console.log(y);  
  
//   testLet();
//   console.log(y);  
  
  

//   function testConst() {
//     const z = 30;
//     console.log(z); 
//   }


//   testConst();



//   wrong way 
  
//   function testConst() {
//     const z = 30;
//     console.log(z); 
//   }
//   console.log(z);
  
//   testConst();
//   console.log(z);




function myFunction() {
    var a = 10;  
    let b = 20;  
    const c = 30;  

    console.log(a); 
    console.log(b); 
    console.log(c); 
}

myFunction();

console.log(a); 
console.log(b); 
console.log(c); 