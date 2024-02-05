const ingredientButtonNames = [
  "Cheese",
  "Onion",
  "Bacon",
  "Salad",
  "Cutlet",
  "Bread",
  "Ketchup",
];

// const chesse = document.querySelector("#cheese");
// const onion = document.querySelector("#onion");
// const bacon = document.querySelector("#bacon");
// const salad = document.querySelector("#salad");
// const cutlet = document.querySelector("#cutlet");
// const bread = document.querySelector("#bread");
// const ketchup = document.querySelector("#ketchup");
const clearRecipeButton = document.querySelector(".clear-button");
const list = document.querySelector("#listItems");
const ingredientButtons = document.querySelector(".ingredients-buttons");

const addIngredient = (ingredient) => {
  const listItem = document.createElement("li");
  listItem.innerHTML = ingredient;
  list.append(listItem);
};

// 2 способ: создать кнопки динамически
// Проходимся по каждому элементу массива ingredientButtonNames
ingredientButtonNames.forEach((ingredient) => {
  // cоздаем кнопку каждый раз когда происходит новая итерация
  const button = document.createElement("button");
  // задаем при каждой итерации id кнопке с помощью ingredient
  button.id = ingredient;
  // Добавляем контент при каждой итерации
  button.innerHTML = ingredient;
  // Добавляем событие для каждой кнопки
  button.addEventListener("click", () => addIngredient(ingredient));
  // Кладем каждую кнопку в div
  ingredientButtons.append(button);
});

const clearRecipe = () => {
  list.innerHTML = "";
};

// chesse.addEventListener("click", () => addIngredient("сыр"));
// onion.addEventListener("click", () => addIngredient("лук"));
// bacon.addEventListener("click", () => addIngredient("бекон"));
// salad.addEventListener("click", () => addIngredient("салат"));
// cutlet.addEventListener("click", () => addIngredient("котлета"));
// bread.addEventListener("click", () => addIngredient("булочка"));
// ketchup.addEventListener("click", () => addIngredient("кетчуп"));

clearRecipeButton.addEventListener("click", clearRecipe);
