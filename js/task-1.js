const listOfCategories = document.getElementById("categories");
const itemsInCategories = listOfCategories.querySelectorAll(".item");

console.log(`Number of categories: ${document.querySelectorAll("h2").length}`);

itemsInCategories.forEach((itemInCategories) => {
  const namesOfCategories = itemInCategories.querySelector("h2").textContent;
  const liInCategories = itemInCategories.querySelectorAll("li");

  console.log(`Category: ${namesOfCategories}`);
  console.log(`Elements: ${liInCategories.length}`);
});