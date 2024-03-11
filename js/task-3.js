const inputField = document.getElementById("name-input");
const outputField = document.getElementById("name-output");

inputField.addEventListener("input", () => {
  const userName = inputField.value;
  outputField.textContent = userName || "Анонім";
});
