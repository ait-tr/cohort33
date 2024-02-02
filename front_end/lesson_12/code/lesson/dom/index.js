// 1. Методы поиска html элементов

// - по id - getElementById()
const mainPageTitle = document.getElementById("main-page-title");
console.log(mainPageTitle);

// - по тегу getElementsByTagName()
const divs = document.getElementsByTagName("div");
console.log(divs);

// - по классу getElementsByClassName()
const box = document.getElementsByClassName("box");
console.log(box);

// - по атрибуту name getElementsByName()
const emailInput = document.getElementsByName("email");
console.log(emailInput);
// console.log(emailInput)

// - по CSS селекторам querySelectorAll() и querySelector()
// id
const selectorByID = document.querySelector("#main-page-title");
console.log(selectorByID);
// class
const selectorByClass = document.querySelector(".box");
console.log(selectorByClass);
const selectorAllByClass = document.querySelectorAll(".box");
console.log(selectorAllByClass);
// тег
const selectorALLByTeg = document.querySelectorAll("div");
console.log(selectorALLByTeg);
// name атрибут
const selectorByName = document.querySelector("[name=email]");
console.log(selectorByName);

selectorAllByClass.forEach((el) => {
  console.log(el);
  el.style.color = "red";
});

selectorByID.remove();

//1. Получаем доступ к нашим кнопкам и карточке
const showUserDataButton = document.querySelector(".show-button");
const showCardButton = document.querySelector(".show-card");
const hideCardButton = document.querySelector(".hide-card");
const userCard = document.querySelector(".user-card");

// 2. Создаем фунцию которая будет отображать наши данные в карточке
const showUserData = () => {
  // пришел с бэкенда объект user
  const user = {
    firstName: "John",
    lastName: "Jameson",
    age: 60,
    job: "CEO",
  };

  // Создание элементов, в которых мы хотим отобразить информацию
  const userFullName = document.createElement("p");
  const userAge = document.createElement("p");
  const userJob = document.createElement("div");

  // Заполнение элементов контентом
  userFullName.innerHTML = `Имя: ${user.firstName} ${user.lastName}`;
  userAge.innerHTML = `Возраст: ${user.age}`;
  userJob.innerHTML = `Должность: ${user.job}`;

  // Положить html элементы в карточку
  userCard.append(userFullName);
  userCard.append(userAge);
  userCard.append(userJob);
};

const showCard = () => {
  userCard.style.display = "flex";
};
const hideCard = () => {
  userCard.style.display = "none";
};

// добавляем события к кнопкам
showUserDataButton.addEventListener("click", showUserData);
showCardButton.addEventListener("click", showCard);
hideCardButton.addEventListener("click", hideCard);

console.log(selectorByName);
selectorByName.addEventListener("change", (event) => {
  console.log(event.target.value);
  alert(event.target.value);
});

const link = document.querySelector("#google");

link.addEventListener("click", (event) => {
  event.preventDefault();
  // Пишете далее свои действия
});
