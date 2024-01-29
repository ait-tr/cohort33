// Spread operator ...

// 1. Создаем новый массив на оснавании 2 других, копируя их значения
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];

console.log(array1);
console.log(array2);

// Клориуем значнения массивов array1 и array2 в массив array3 используя spead operator ...
let array3 = [...array1, ...array2];
console.log(array3); // [ 1, 2, 3, 4, 5, 6 ]

// Кладем массивв array1 и array2 в array4
let array4 = [array1, array2];
console.log(array4); // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// 2. Создадим новый массив со своими значения и скопируем туда свойства из другого массива

let commonArray = [...array1, ...array2, 7, 8, 9, 10];
console.log(commonArray);

// 3. Создаем новый объект на оснавании 2 других, копируя их значения

const user1 = {
  name: "Andrei",
  age: "28",
};

const user2 = {
  name: "Pavel",
  age: "30",
  isAdmin: true,
};

const user3 = { ...user2, ...user1, pets: ["dog", "cat"] }; // { name: 'Andrei', age: '28', isAdmin: true, pets: [ 'dog', 'cat' ] }

console.log(user1);
console.log(user2);
console.log(user3);

// 4. Spread в аогументах функции

function sum(a, b, c) {
  return a + b + c;
}

let sumResult = sum(1, 2, 3);

console.log(sumResult); // 6

let sumArguments = [5, 5, 5];

let sumResultWithSpread = sum(...sumArguments);

console.log(sumResultWithSpread);
