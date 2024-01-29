// Деструктуризация

// 1. Деструктуризация массивов
const animals = ["Lion", "Tiger", "Cat", "Dog"];

// console.log(animals[1]); // Мы забрали Tiger по индексу

const [lion, tiger, cat, dog] = animals;
// const lion = animals[0];
// const tiger = animals[1];
// const cat = animals[2];
// const dog = animals[3];

console.log(lion);
console.log(tiger);
console.log(cat);
console.log(dog);

// 2. Деструктуризация объектов

const user = {
  firstName: "Pavel",
  lastName: "Ivanov",
  age: 28,
};

// const firstName = user.firstName;
// const lastName = user.lastName;
// cosnt age = user.age;

const { firstName, lastName, age } = user;
console.log(firstName);
console.log(lastName);
console.log(age);
