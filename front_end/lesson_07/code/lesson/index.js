let message = "Hello world from separate file!!";
let message1 = message;
message = 10;

let number1 = 1;
let number2 = 2;

console.log(message);
console.log(message1);

console.log(number1 + number2);

const firstName = "Nick";
// firstName = "Mike"; Нельзя передавать новое имя константе, т.к это константы

console.log(firstName);
// console.log('Hello world from separate file!!')

// Создаем функцию showMessage
function showMessage() {
  console.log("This function showMessage works!");
}

// вызываем функцию showMessage

showMessage();
showMessage();
showMessage();

// 2. Создаем функцию сложения которая складывает 2 числа

function sum() {
  return 2 + 16;
}

// Создаем переменную sumResult и передаем ей результат выполнения ф-ии sum
let sumResult = sum();

console.log(sumResult);

function sumWithArguments(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

let sumResult2 = sumWithArguments(5, 10);

console.log(sumResult2);

// Типы данных

// 1 тип number
let number = 53;
let inf = 1 / 0;
console.log(typeof number);
console.log(inf);
console.log(typeof inf);
console.log("Hello" / 3);
console.log("9" / 5);

// 2 тип bigInt
const bigInt = 12345245982305823904820394n;
console.log(typeof bigInt);

// 3 тип строка sting
let someMessage = "Some message";
console.log(typeof someMessage);

let messageWithNumber = `${someMessage} ${number}`;
console.log(messageWithNumber);

//4 тип boolean

let isDoSomething = true;
console.log(typeof isDoSomething);

// 5 тип null

let emptyVal = null;
console.log(typeof emptyVal);

// 6 тип undefined

let unknownVar = undefined;

console.log(typeof unknownVar);

// 7 тип обьекты

const user = {
  name: "Nick",
  age: 28,
};

console.log(user);
console.log(user.age);
console.log(typeof user);

let array = [1, "Brat", true, 2];
console.log(array);
console.log(array[0], array[3]);
console.log(typeof array);

// 8 тип данных Symbol

let mySymbol = Symbol();

let animal = {
  [mySymbol]: "Tiger",
};

// console.log(mySymbol)
// console.log(animal[mySymbol]);

// DOM: показать всплывающее сообщение на экране
//1 шаг: найти кнопку в документе

let button = document.getElementById("show");
console.log(button);

// 2 шаг создать функцию
function showMessageOnClick() {
  console.log("Button works");
  // alert('Button works on click!!')
  // let age = prompt('How old are you?')
  // alert(age)
  // console.log(age)
  let answer = confirm("Ты тут главный босс?");
  alert(answer);
}

// 3 шаг: привязать функцию к кнопке через addEventListener, которая будет сабатывать на click
button.addEventListener("click", showMessageOnClick);

// изменяет стиль на клик
button.style.backgroundColor = "#dbd002";
