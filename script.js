const moonPoem = document.getElementById("poem-moon");

moonPoem.style.backgroundColor = "gray";

const westPoems = document.querySelectorAll("#wall-west .poem");

console.log(moonPoem);
console.log(westPoems);

const rainPoem = document.getElementById("poem-rain");

const eastWall = document.getElementById("wall-east");

eastWall.appendChild(rainPoem);

rainPoem.style.backgroundColor = "yellow";

const addPoemButton = document.getElementById("add-poem-btn");

addPoemButton.addEventListener("click", function () {
  const titleInput = document.getElementById("poem-title");
  const linesInput = document.getElementById("poem-lines");
  const color = document.getElementById("poem-color").value;
  const wallId = document.getElementById("poem-wall").value;

  const newPoem = document.createElement("article");
  const newTitle = document.createElement("h3");
  const newText = document.createElement("p");

  newTitle.textContent = titleInput.value;
  newText.textContent = linesInput.value;
  newPoem.className = "poem";
  newPoem.style.backgroundColor = color;

  newPoem.appendChild(newTitle);
  newPoem.appendChild(newText);
  document.getElementById(wallId).appendChild(newPoem);

  titleInput.value = "";
  linesInput.value = "";
});
