function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const btnCreate = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.querySelector("#boxes");
const input = document.querySelector("input");

function createBoxes(amount) {
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.append(box);
  }
}
btnCreate.addEventListener("click", numberWithinNormalRange);
function numberWithinNormalRange() {
  const amount = input.value;

  if (amount >= 1 && amount <= 100) {
    boxesContainer.innerHTML = "";
    input.value = "";
    createBoxes(amount);
  } else {
    return (input.value = "");
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = ""; 
  input.value = "";
}
destroyBtn.addEventListener("click", destroyBoxes);
