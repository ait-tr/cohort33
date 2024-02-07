const numbers = document.querySelectorAll(".number"); // ищем элементы через querySelectorAll

// Проходимся по каждому через цикл forEach() и вызываем ф-ю displayNum() для каждого жлемента
numbers.forEach((elem, index) => {
  setTimeout(() => {
    displayNum(elem);
  }, (index + 1) * 1000);
});

// создаем ф-ю displayNum
function displayNum(elem) {
  elem.style.visibility = "visible";
}
