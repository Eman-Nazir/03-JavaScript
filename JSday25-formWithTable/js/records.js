// const records = JSON.parse(
//     window.localStorage.getItem("records") ?? JSON.stringify([])
//   );
  
//   const ROOT = document.getElementById("table-root");
  
//   const table = document.createElement("table");
//   const tHead = document.createElement("thead");
//   const tBody = document.createElement("tbody");
  


// // THEAD


//   const head = Object.keys(records[0]);
//   const tr = document.createElement("tr");
//   head.forEach(function name (element) {
//     const th = document.createElement("th");
//     const textNode = document.createTextNode(element);
//     th.appendChild(textNode);
//     tr.appendChild(th);
//   });

// const deleteTh = document.createElement("th");
// deleteTh.textContent = "Actions"; 
// tr.appendChild(deleteTh)

// tHead.appendChild(tr);


// // TBODY 

//   records.forEach(function name(element) {
//     const tr = document.createElement("tr");
  
//     Object.values(element).forEach(function name(text) {
//       const td = document.createElement("td");
//       const textNode = document.createTextNode(text);
//       td.appendChild(textNode);
//       tr.appendChild(td);
//     });
  
//     const addBtn = document.createElement("td");
//     const dltbutton = document.createElement("button");
//     dltbutton.setAttribute("id", "delete");
//     dltbutton.textContent = "Delete";
  

//     addBtn.appendChild(dltbutton);
//     dltbutton.addEventListener("click", function() {
//       tr.remove(); 

//       const filteredElements = records.filter(function (child) {
//         return child.name !== element.name;

//     });
  
//     window.localStorage.setItem("records", JSON.stringify(filteredElements));
//     records = filteredElements;

//      window.location.reload();


//     addBtn.appendChild(dltbutton);
//     tr.appendChild(addBtn);
//     tBody.appendChild(tr);

    
//   });
  



//   table.appendChild(tHead);
//   table.appendChild(tBody);
//   ROOT.appendChild(table);







// 2********************************* 

  // const records = JSON.parse(
  //   window.localStorage.getItem("records") ?? JSON.stringify([])
  // );
  
  // const ROOT = document.getElementById("table-root");
  // const table = document.createElement("table");
  // const tHead = document.createElement("thead");
  // const tBody = document.createElement("tbody");
  
  // // THEAD
  // if (records.length > 0) {
  //   const head = Object.keys(records[0]);
  //   const tr = document.createElement("tr");
  //   head.forEach(function (element) {
  //     const th = document.createElement("th");
  //     const textNode = document.createTextNode(element);
  //     th.appendChild(textNode);
  //     tr.appendChild(th);
  //   });
  //   const deleteTh = document.createElement("th");
  //   deleteTh.textContent = "Actions";
  //   tr.appendChild(deleteTh);
  //   tHead.appendChild(tr);
  // }
  
  // // TBODY
  // records.forEach(function (element) {
  //   const tr = document.createElement("tr");
  
  //   Object.values(element).forEach(function (text) {
  //     const td = document.createElement("td");
  //     const textNode = document.createTextNode(text);
  //     td.appendChild(textNode);
  //     tr.appendChild(td);
  //   });
  
  //   const addBtn = document.createElement("td");
  //   const dltbutton = document.createElement("button");
  //   dltbutton.setAttribute("id", "delete");
  //   dltbutton.textContent = "Delete";
  
  //   addBtn.appendChild(dltbutton);
  //   dltbutton.addEventListener("click", function () {
  //     tr.remove();
  //     const filteredElements = records.filter(function (child) {
  //       return child.name !== element.name;
  //     });
  //     window.localStorage.setItem("records", JSON.stringify(filteredElements));
  //     records = filteredElements;
  //   });
  
  //   tr.appendChild(addBtn);
  //   tBody.appendChild(tr);
  // });
  
  // table.appendChild(tHead);
  // table.appendChild(tBody);
  // ROOT.appendChild(table);
  




let records = JSON.parse(
  window.localStorage.getItem("records") ?? JSON.stringify([])
);

const ROOT = document.getElementById("table-root");
const table = document.createElement("table");
const tHead = document.createElement("thead");
const tBody = document.createElement("tbody");

const headers = ["name", "age", "dob", "gender", "Actions"];
const trHead = document.createElement("tr");

headers.forEach(function (header) {
  const th = document.createElement("th");
  th.textContent = header;
  trHead.appendChild(th);
});

tHead.appendChild(trHead);

records.forEach(function (element) {
  const tr = document.createElement("tr");
  Object.values(element).forEach(function (text) {
    const td = document.createElement("td");
    td.textContent = text;
    tr.appendChild(td);
  });

  const actionTd = document.createElement("td");
  const dltbutton = document.createElement("button");
  dltbutton.textContent = "Delete";
  dltbutton.setAttribute("id", "delete");

  dltbutton.addEventListener("click", function () {
    const rows = [...tBody.querySelectorAll("tr")];
    const rowIndex = rows.indexOf(tr);
    if (rowIndex !== -1) {
      tr.remove(); 
      records.splice(rowIndex, 1); 
      window.localStorage.setItem("records", JSON.stringify(records)); 
    }
  });

  actionTd.appendChild(dltbutton);
  tr.appendChild(actionTd);
  tBody.appendChild(tr);
});

table.appendChild(tHead);
table.appendChild(tBody);
ROOT.appendChild(table);
