function generateRecipe() {
  const recipeName = document.getElementById("recipeName").value;

  const numIngredients = parseInt(
    document.getElementById("numIngredients").value
  );

  const recipeTitleElement = document.getElementById("recipeTitle");
  recipeTitleElement.innerHTML = `<h2>${recipeName}</h2>`;

  const ingredientsListElement = document.getElementById("ingredientsList");
  ingredientsListElement.innerHTML = "";

  for (let i = 1; i <= numIngredients; i++) {
    const ingredientName = document.getElementById(`ingredient${i}`).value;
    const listItem = document.createElement("li");
    listItem.innerText = ingredientName;
    ingredientsListElement.appendChild(listItem);
  }
}

document
  .getElementById("numIngredients")
  .addEventListener("input", function () {
    const numIngredients = parseInt(this.value);
    const container = document.getElementById("ingredientsInputContainer");

    container.innerHTML = "";

    for (let i = 1; i <= numIngredients; i++) {
      const label = document.createElement("label");
      label.innerText = `Ingredient ${i}: `;

      const input = document.createElement("input");
      input.type = "text";
      input.id = `ingredient${i}`;
      input.placeholder = `Enter ingredient ${i}`;

      container.appendChild(label);
      container.appendChild(input);
      container.appendChild(document.createElement("br"));
    }
  });
