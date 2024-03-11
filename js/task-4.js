const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", checkingForEmptyFields);

function checkingForEmptyFields(event) {
  event.preventDefault();

  const form = event.target;
  const emailFields = form.elements.email.value;
  const passwordFields = form.elements.password.value;
  if (emailFields === "" || passwordFields === "") {
    return alert("All form fields must be filled in");
  }

  console.log(`Email: ${emailFields}, Password: ${passwordFields}`);
  form.reset();
}
