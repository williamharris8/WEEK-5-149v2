const moonPoem = document.getElementById("poem-moon");

moonPoem.style.backgroundColor = "gray";

const westPoems = document.querySelectorAll("#wall-west .poem");

console.log(moonPoem);
console.log(westPoems);

const rainPoem = document.getElementById("poem-rain");

const eastWall = document.getElementById("wall-east");

eastWall.appendChild(rainPoem);

rainPoem.style.backgroundColor = "yellow";
