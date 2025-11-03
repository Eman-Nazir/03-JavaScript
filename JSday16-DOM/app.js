//  DOM (Document Object Model)
 const DOM = {
   html: {
     head: { title: "My document" },
     body: {
       section: {
         h2: "Hero section",
         p: "Paragraph of the hero section",
       },
     },
   },
 };
 var myName = "Ayza"
 console.log(window);
 console.log(window.document);
 console.log(window.document.head);
 console.log(document.head);
 console.log(window.document.body);
 console.log(document.body);
 console.log(document.head.title.textContent);   
 console.log(document.head.title.innerText);   
 console.log(document.head.title.innerHTML);  
 console.log(document.body.h1);              
//  Getting elements
//  ***** getElementsByTagName ******** 
//  1.............
 const elements = document.getElementsByTagName("h1");
 console.log(elements)
 console.log(elements[0].innerText);
 console.log(elements[1].textContent);
 console.log(elements[2].innerHTML);
 console.log(elements[3].innerHTML);
//  modify(1st line dom)  and console 
 elements[0].innerText = "Hello there...";
 console.log(elements[0].innerText);
 console.log(elements[0].innerHTML);
 console.log(elements[0].textContent);
//  2.............
 const moreElements1 = document.getElementsByTagName("h1");
  const moreElements2 = document.getElementsByTagName("title");
 console.log(moreElements2);
  console.log(moreElements1[0].innerHTML);   
 console.log(moreElements1[1].textContent);    
 console.log(moreElements1[2].innerText);          
 console.log(moreElements1[3].innerHTML);   
//  ****** getElementById *****
 const firstElement = document.getElementById("title");
 firstElement.innerText = "First Element Here...";
 console.log(firstElement);
//  ********** getElementsByName *********** 
 const moreElements = document.getElementsByName("heading");
 console.log(moreElements);
 console.log(moreElements[0].innerHTML);   
 console.log(moreElements[1].textContent);    
 console.log(moreElements[2].innerText);          
 console.log(moreElements[3].innerHTML);          
 moreElements [3].innerText = "Hello there..";
 console.log(moreElements[3].innerHTML);          
//  ********** getElementsByClassName ****** 
 var classElement = document.getElementsByClassName('Heading 2');
 var classElement = document.getElementsByClassName('Heading 3');
 console.log(classElement);
var moreQueryElements = document.querySelector("title");  //tag name
var moreQueryElements = document.querySelector("h1");  //tag name
var moreQueryElements = document.querySelector("#title");  //id
var moreQueryElements = document.querySelector(".title");  //class
 console.log(moreQueryElements);
var AllQueryElements = document.querySelectorAll("title"); // tag name
var AllQueryElements = document.querySelectorAll("h1"); // tag name
var AllQueryElements = document.querySelectorAll("#title");  //id
var AllQueryElements = document.querySelectorAll(".title"); 
 console.log(AllQueryElements);
//  Getting text
//  by using querySelector we can change only first Element
const singleElementWithQuery = document.querySelector(".content");
const singleIdElementWithQuery = document.querySelector("#text");
 console.log({ singleElementWithQuery, singleIdElementWithQuery });
 singleElementWithQuery.innerText = "Some text here..."
 singleIdElementWithQuery.innerText = "Some text here with ID ..."
 const moreClassElements = document.querySelectorAll(".content");
 const moreElementsWithQuery = document.querySelectorAll("#text");
 console.log( { moreClassElements, moreElementsWithQuery });
 moreClassElements.innerText = "Some text here...";
 moreClassElements[0].innerText = "Some text here...";
 moreClassElements[1].innerText = "Some text here...";
 moreClassElements[2].innerText = "Some text here...";
 console.log(singleElementWithQuery.innerText = "Some text here...")
 moreElementsWithQuery.innerText = "Some text here...";
 moreElementsWithQuery[0].innerText = "Some text here...";
 moreElementsWithQuery[1].innerText = "Some text here...";
 moreElementsWithQuery[2].innerText = "Some text here...";
 const elementsWithClass = document.querySelectorAll(".content");
 elementsWithClass.forEach(function(element) {
   element.innerText = "Some text here for element with forEach ";
  console.log( element.innerText = "Some text here for element with forEach ")
 });
 const elementsWithId = document.querySelectorAll("#text");
 elementsWithId.forEach(function(element) {
    element.innerText = "Some text here for element of id  with forEach "
    element.innerHTML = "Some text here for element of id  with forEach "
   console.log(element.innerText = "Some text here for element of id  with forEach ")
   console.log (element.innerHTML = "Some text here for element of id  with forEach ")
    console.log(element.textContent = "   Some text here for element of id  with forEach ")
 });
//  Style
 singleElementWithQuery.style.color = "red";
 singleElementWithQuery.style.backgroundColor = "teal";
 singleElementWithQuery.style.padding = "20px";
 singleElementWithQuery.style.border = "10px";
 singleElementWithQuery.style.borderStyle = "solid";
  singleElementWithQuery.style.borderLeftColor = "black";
 console.log({ style: singleElementWithQuery.style });
