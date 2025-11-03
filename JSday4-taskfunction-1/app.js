// <======== Task 01 goes here  ========>
function averageOfThreeNumbers (firstValue,secondValue,thirdValue) {
    return (firstValue + secondValue + thirdValue) / 3;
  }
  console.log(averageOfThreeNumbers(10, 20, 30));

// <======= Task 02 goes here =======>

  function distanceAndTime (distance,time){
    return(distance/time);
  }
  console.log(distanceAndTime(150,2));


  function distanceAndTime (distance,time){
    return(distance/time);
  }
  console.log(distanceAndTime(100,1.5));

// <============== Task 03 goes here  ================>


  function prices (firstValue,secondValue,thirdValue) {
    return (firstValue + secondValue + thirdValue);
  }
  console.log(prices(25, 35, 15));

  function prices (firstValue,secondValue,thirdValue) {
    return (firstValue + secondValue + thirdValue);
  }
  console.log(prices(50, 20, 30));

// <============== Task 04 goes here  ================>

    function averageHeight (height1,height2){
        return((height1+height2)/2);
    }
    console.log(averageHeight(1.75,1.80));


    function averageHeight (height1,height2){
        return((height1+height2)/2);
    }
    console.log(averageHeight(1.65,1.70));


// <============== Task 05 goes here  ================>

    function  TimetoCoverDistance (distance,speed){
        return(distance/speed);
    }
    console.log(TimetoCoverDistance(120,60))


    function  TimetoCoverDistance (distance,speed){
        return(distance/speed);
    }
    console.log(TimetoCoverDistance(160,80))


// <============== Task 06 goes here  ================>

    function positiveOrNegative (num) {
      if(num > 0){
        return "The number is positive";
      }
       else{
          return "The number is negative";
     }
    }
    console.log(positiveOrNegative(5));



    function positiveOrNegative (num) {
        if(num > 0){
          return "The number is positive";
        }
         else{
            return "The number is negative";
       }
      }
      console.log(positiveOrNegative(-3));


// <============== Task 07 goes here  ================>


    function evenOrOdd (num) {
        if(num % 2 == 0){
          return "The number is even";
        }
         else{
            return "The number is odd";
       }
      }
      console.log(evenOrOdd(12));



      function evenOrOdd (num) {
        if(num % 2 == 0){
          return "The number is even";
        }
         else{
            return "The number is odd";
       }
      }
      console.log(evenOrOdd(12));


      
      function evenOrOdd (num) {
        if(num % 2 == 0){
          return "The number is even";
        }
         else{
            return "The number is odd";
       }
      }
      console.log(evenOrOdd(7));


 
// <============== Task 08 goes here  ================> 

    function compareBmi( massA,heightA,massB,heightB){
    const  bmiA = massA/ (heightA **2)
    const  bmiB = massB/ (heightB **2)
    
   if(bmiA > bmiB){
    return "Person 1 has higher BMI than person 2" ;
   }
   else if (bmiA < bmiB){
    return "Person 1 has lower BMI than person 2" ;
   }
   else{
    return "Person 1 has equall BMI to person 2" ;
   }
}
     console.log(compareBmi(68,1.75,85,1.80));





     function compareBmi( massA,heightA,massB,heightB){
        const bmiA = massA/ (heightA **2)
        const bmiB = massB/ (heightB **2)
       
      if(bmiA > bmiB){ 
       return "Person 1 has higher BMI than person 2" ;
      }
      else if (bmiA < bmiB){
       return "Person 1 has lower BMI than person 2" ;
      }
      else{
       return "Person 1 has equall BMI to person 2" ;
      }
   }
        console.log(compareBmi(72,1.60,72,1.70));



// <============== Task 09 goes here  ================>


  function determinegrade (score){
if(score >= 90){
  return "Grade A"
}
else if (score >=80){
  return "Grade B"
}
else if (score >= 70){
  return "Grade C"
}
else{
  return "Grade D"
}

}
  console.log(determinegrade(85))


  function determinegrade (score){
    if(score >= 90){
      return "Grade A"
    }
    else if (score >=80){
      return "Grade B"
    }
    else if (score >= 70){
      return "Grade C"
    }
    else{
      return "Grade D"
    }
    
    }
      console.log(determinegrade(65))



// <============== Task 10 goes here  ================>


  function voteEligibility (age){
    if(age >= 18){
      return "Eligible to vote"
    }
    else{
      return "Not eligible to vote"
    }
  }
  console.log(voteEligibility (20))


  function voteEligibility (age){
    if(age >= 18){
      return "Eligible to vote"
    }
    else{
      return "Not eligible to vote"
    }
  }
  console.log(voteEligibility (16))



// <============== Task 11 goes here  ================>

  function triangleAngles (angle1, angle2, angle3){
   if (angle1 + angle2 + angle3 == 180){
    return "Valid Triangle"
   }
   else {
    return "Invalid Triangle"
   }
  }
console.log(triangleAngles (60,60,60))



function triangleAngles (angle1, angle2, angle3){
  if (angle1 + angle2 + angle3 == 180){
   return "Valid Triangle"
  }
  else {
   return "Invalid Triangle"
  }
 }
console.log(triangleAngles (90,45,50))



// function greet(username) {

//   return "Hello"+username;
// }
// console.log(greet("John")); 


function greet(username) {

  return "Hello "+ username;
}
console.log(greet("John")); 





function multiplier(factor) {
      return 10 * factor;
  };

console.log(multiplier(5)); 




// function getMultiplication (a,b,c){
//   return a*b*c ;
// }

// console.log(getMultiplication(20,30,40));



//  const getMultiplication  = function (a,b,c){
//  return a*b*c ;
// }
//  console.log(getMultiplication(20,30,40));



// function containsChar(str, char) {
//   if (str) {
//     return "Contains the character";
//   } else {
//     return "Does not contain the character";
//   }
// }
// console.log(containsChar("hello"))


// type conversion 

// let typechange = String(4);
// console.log(typechange, typeof(typechange))

// let typechange = String(true);
//  console.log(typechange, typeof(typechange))



// let number =Number("33")
// console.log(number,typeof(number))


// let number =Number("Hello")
// console.log(number,typeof(number))


// let boolean = Number(true)
// console.log(boolean,typeof(boolean))
   


//  parseint  and parsefloat 


// let boolean = Number(false)
// console.log(boolean,typeof(boolean))



// let boolean = Boolean(1)
// console.log(boolean,typeof(boolean))

// let boolean = Boolean(0)
// console.log(boolean,typeof(boolean))

// let boolean = Boolean(34)
// console.log(boolean,typeof(boolean))


// let boolean = Boolean("")
// console.log(boolean,typeof(boolean))


// let boolean = Boolean("PIXEL")
// console.log(boolean,typeof(boolean))


// TYPE COERCION 


// let number = "5" + 2;
// console.log(number, typeof(number))



// let number = "5" - 2;
// console.log(number, typeof(number))


// let number = "5" * 2;
// console.log(number, typeof(number))



// let number = "20" / 2;
// console.log(number, typeof(number))

// let number = "20" / "2";
// console.log(number, typeof(number))



// let number = "hello" / "2";
// console.log(number, typeof(number))

// TYPE LITERALS 

// let number = "hello        my   name is     eman  "   +    "2";
// console.log(number, typeof(number))

// let username = "Emna"
// let Age = 19

// let number = `Hello        My   name is     ${username}  and my age is     ${Age} `;
// console.log(number )


// let username = "Emna"
// let Age = 19

// let intro = `Hello        My   name is     ${username} 
//  and my age is     
// ${Age} `;

// console.log(intro)


// let username = "Emna"
// let Age = 19

// let intro = `Hello My name is ${username} and My age is ${Age} `;

// console.log(intro)


// CONCATENATION 

// const x = "Hello";
// const y = "Everyone"
// const z = "There"
// const result = x+y+z+"W3School"
// console.log(result);


// const x = "Hello";
// const y = " Everyone"
// const z = " There"
// const result = x+y+z+" W3School"
// console.log(result);
