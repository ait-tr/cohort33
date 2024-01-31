// Строчный метод split()

let names = "Jonh, Brat, Mike";

let namesArray = names.trim().split();

console.log(namesArray);

// Методы массивов

// 1. Метод map() - возвращает новый массив и не меняет старый
// Классический пример с числами
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((value, index, array) => {
  console.log(value);
  console.log(index);
  console.log(array);
  return value + 5;
});

console.log(newNumbers);

// Создать новый массив, который проверяет, что если у нас имена начинаются на букву J, то слово становиться с большой буквы
const persons = ["John", "Mike", "Johny", "Kirill"];

const newPersons = persons.map((value) => {
  if (value.startsWith("J")) {
    // true или false
    let convertedName = value.toUpperCase();

    return convertedName;
  } else {
    return value;
  }
});

console.log(newPersons);

// 2. Метод forEach() - возращает undefined и не меняет старый
// С помощью forEach вы можете перебирать и делать внутри функции любые действия, имея доступ к значениям массива
const animals = ["Cat", "Dog", "Pig", "Tiger", "Python"];
let newAnimals = [];

animals.forEach((value) => {
  console.log(value);
  newAnimals.push(value.toUpperCase());
  // alert(value.toUpperCase())
  // тут можно делать push в новый массив
  // создавать html элемент и класть туда значение - value
});

console.log(newAnimals);

// 3. Метод filter() - фильтрует массив по условию, возвращабтся те значения, которые соответсвуют условию. Не меняет исходный массив

const numbers2 = [1, 2, 5, 6, 10, 20, 30, 50, 60, 70];

const newFilteredNumbers = numbers2.filter((value) => {
  return value > 10;
});

console.log(newFilteredNumbers);

// 4. Метод includes() - проверяет наличие элемента в массиве и возвращает true или false

console.log(numbers2.includes(10));
console.log(numbers2.includes(100));

// 5. Метод reduce()

const numbers3 = [0, 1, 2, 3, 4, 5];

let result = numbers3.reduce((acc, currentValue) => {
  console.log(acc);
  console.log(currentValue);
  return acc + currentValue;
}, 100);

console.log(result);

// 6. метод reverse() - меняет исходный массив

const langs = ["Java", "JavaScript", "Python", "C++"];

langs.reverse();
console.log(langs);

// 7. find() - находит элемент в массиве

const users = [
  { name: "Brat", age: 20 },
  { name: "Peter", age: 30 },
  { name: "Mike", age: 40 },
  { name: "John", age: 50 },
  { name: "Brat", age: 40 },
];

const user = users.find((value) => {
  return value.name === "Brat" && value.age === 50;
});

console.log(user);
