const main = document.getElementById("root");

const container = document.createElement("div");
container.className = "container";

const section = document.createElement("section");

let newDiv = document.createElement("div");
newDiv.id = "picker";  

const cancelButton = document.createElement("button");
cancelButton.className = "cancel-btn";
cancelButton.textContent = "Cancel";


container.appendChild(newDiv);
container.appendChild(section);
main.appendChild(container);
container.appendChild(cancelButton);


const padButtons = [
  { text: 1 },
  { text: 2 },
  { text: 3 },
  { text: 4 },
  { text: 5 },
  { text: 6 },
  { text: 7 },
  { text: 8 },
  { text: 9 },
  { text: "*" },
  { text: 0 },
  { text: "#" },
];

for (let index = 0; index < padButtons.length; index++) {
  const button = document.createElement("button");
  button.appendChild(document.createTextNode(padButtons[index].text));
  
  button.addEventListener("click", function (event) {
    newDiv.innerText += event.target.innerText;
  });

  section.appendChild(button);
}




cancelButton.onclick = function () {
  newDiv.innerText = newDiv.innerText.slice(0, -1) ;
};


