// Global/Local scopes

// let и var - могут менять значения, а const - это константа и менять значения у константы нельзя!
// let a = "Hello it's let";
// var b = "Hello it's var";

// console.log(a);
// console.log(b);

// a = "Hello, let";
// b = "Hello, var";

// console.log(a);
// console.log(b);

// Различия между var и let
// Глобальные переменные - это переменные обьевленные на самом верхнем уровне
// Локальные - это то что лежит внутри скобок {}
// let animal = "Tiger";
if (true) {
  let animal = "Tiger";
  const lion = "Lion";
  console.log(animal);
  console.log(lion);
}

// console.log(lion); // Если вывести в консоль, то будет ошибка, т.к lion  локальная константа и видна только в условии if
// console.log(animal); // Если вывести в консоль, то будет ошибка, т.к animal локальная переменная и видна только в условии if

// var - это переменная, которая если обьявленная в локальной области видимости, будет видна и в глобально
if (true) {
  var fullName = "John Lock";
  console.log(fullName);
}

console.log(fullName);

// Исключение: функции - в них если обьявить var, то в глобальной области видимости она будет не видна
function sayHi() {
  var hi = "Hi, John";
  console.log(hi);
}

console.log(hi);

// Если мы используем переменную, до того как мы ее обьявили с помощью let, то мы получим ошибку
// // Если мы используем переменную, до того как мы ее обьявили с помощью var, то мы получим undefined

// console.log(user);
// let user = "John Smith";

// console.log(admin);
// var admin = "Some Admin";
