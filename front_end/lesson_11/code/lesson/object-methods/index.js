// Методы объекта

// 1. Object.keys() - возвращает все ключи объекта в массив

const animals = {
  name: "Python",
  color: "black",
  age: 5,
  isPoison: false,
  size: 2,
};

const animalsKeys = Object.keys(animals);

console.log(animalsKeys);

// 2. Object.values() - возвращает все значения объекта в массив

const animalsValues = Object.values(animals);
console.log(animalsValues);

const inputsData = {
  label: "First Name",
  initialValues: "Some name",
  placeholder: "Enter first name",
  name: "firstName"
};
