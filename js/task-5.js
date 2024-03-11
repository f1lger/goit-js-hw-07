function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnForChangeColor = document.querySelector(".change-color");
const spanTextField = document.querySelector(".color");

btnForChangeColor.addEventListener("click", changeBodyColor);

function changeBodyColor(event) {
  const randomColor = getRandomHexColor();
  document.body.style.backgroundColor = randomColor;
  spanTextField.textContent = randomColor;
}
