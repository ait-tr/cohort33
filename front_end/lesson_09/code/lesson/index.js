// 1. Объекты

// Создание пустого объекта
let emptyUser = {};
console.log(emptyUser);

// создание обьекта с нексколькими парами "ключ: значение"

let user = {
  name: "John",
  age: 28,
  "like dogs": true,
  job: "QA",
};

console.log(user);
console.log(user.age);
console.log(user["name"]);
console.log(user["like dogs"]);

// Добавление новго св-ва в обьект
user.isAdmin = true;

console.log(user);

// удаление свойств в обьекте

delete user.isAdmin;
console.log(user);

// свойсвто in - проверяет наличие свойства в обьекте
console.log("age" in user); // true
console.log("job" in user); // false

// Пример: если с сервера пришли даные пользователя в виде обьекта user
// если у обьекта user есть свойство job, тогда отображаем его карточку на экране - console.log("Показать карточку пользователя")
// если нет, то не оторажаем - console.log("Не показывать")

if (
  "job" in user &&
  (user["job"] === "Frontend developer" ||
    user["job"] === "Fullstack developer")
) {
  // если тут будет true
  // условие "job" in user выдаст либо true, либо false
  console.log("Показать карточку пользователя");
} else {
  console.log("Не показывать");
}

// Обьекты: Reference types

// как работают примитивы
let message = "Hello"; // создаем переменную message и присваеваем ей значение Hello.
let someText = message; // создаем переменную someText получаем значение переменной message

console.log(message); // Hello
console.log(someText); // Hello

message = "Hello world";
console.log(message); // Hello World
console.log(someText); // Hello

// как работают ссылочные типы(не примитивы)

let animal = {
  name: "Tiger",
  age: 20,
}; // создаем обьект { name: 'Tiger', age: 20 } и даем ССЫЛКУ на него переменной animal
let animalCopy = animal; // создаем переменную animalCopy и даем ей ссылку на обьект { name: 'Tiger', age: 20 }

console.log(animal); // { name: 'Tiger', age: 20 }
console.log(animalCopy); // { name: 'Tiger', age: 20 }

animal.age = 15;
console.log(animal); // { name: 'Tiger', age: 15 }
console.log(animalCopy); // { name: 'Tiger', age: 15 }

animal = { name: "Lion", age: 30 }; // создаю новый обьект {name: "Lion", age: 30}  и создается новая ссылка на этот обьект и передается переменной animal
console.log(animal); // { name: 'Lion', age: 30 }
console.log(animalCopy); // { name: 'Tiger', age: 15 }

// this

let person = {
  name: "John",
  age: 28,
  sayHi() {
    console.log(this.name); // this.name === person.name
    console.log(this.age);
  },
};

// function sayHi() {
//   console.log(person.age);
// }

person.sayHi();

// 2 обьекта и this
let persanal = {
  name: "Brat",
};

let admin = {
  name: "Stas",
};

function hello() {
  console.log(`Hello ${this.name}`);
}

persanal.say = hello;
admin.say = hello;

persanal.say();
admin.say();

// 4. Prototypes

let singer = {
  sing: true,
};

let eltonJohn = {
  sitting: true,
};

console.log(eltonJohn.sitting); // true
console.log(eltonJohn.sing); // undefined

eltonJohn.__proto__ = singer; // мы назвачаем прототип singer для eltonJohn
console.log(eltonJohn.sing); // true

let michaelJackson = {
  danse: true,
};

michaelJackson.__proto__ = eltonJohn;

console.log(michaelJackson.danse); // true
console.log(michaelJackson.sitting); // true
console.log(michaelJackson.sing); // true

// 5. Классы

class Car {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }

  showDescription() {
    console.log(
      `Model of this car is: ${this.name}, color of the car is ${this.color}`
    );
  }
}

let porsche = new Car("Porsche 911", "black");
let mercedes = new Car("Mercedes Benz", "red");

console.log(porsche);
console.log(mercedes);

porsche.showDescription();
mercedes.showDescription();

porsche.color = "red";

console.log(porsche);
console.log(mercedes);
