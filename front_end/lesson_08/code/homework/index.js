const button = document.getElementById("button-changecolor");
const colorMessage = "Цвет кнопки изменен";

function changeButtonColor(color, message) {
  button.style.backgroundColor = color;
  alert(message);
}

button.addEventListener("click", () => changeButtonColor('green', colorMessage));

