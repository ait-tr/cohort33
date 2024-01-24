// 1. Expression

// +
let a = 3;
let b = 5;

let result = a + b;
console.log(result);
console.log("моя " + "строка");
console.log("1" + 2);
console.log("5" + "25");

// -
let minusResult = b - a;
console.log(minusResult);
console.log(5 - "25");

// *
console.log(a * b);

// /
console.log(a / b);
// Math.floor() - округление вниз в любом случае даже если цифра 4.6
// Math.round() - округление до большего
let roundedValue = Math.floor(5.680986);
let decValue = 5.680986;
console.log(33 / 303);
console.log(roundedValue);

// метод toFixed() позволяет вывести столько знаков полсе запятой, сколько вы укажите в круглых скобках
console.log(decValue.toFixed(3));

// %

console.log(b % a);

// **
console.log(2 ** 3);

// 2. Преобразование типов

// Строковое преобразование String()
let number = 3;
console.log(typeof number);

let numberToSting = String(number);
console.log(typeof numberToSting);

// числовое преобразование Number()
let stringToNumber = Number("123");

console.log(typeof stringToNumber);

// Булленовское преоюразование Boolean()

console.log(Boolean(0));
console.log(Boolean(10));
console.log(Boolean(-4));
console.log(Boolean(""));
console.log(Boolean("Hello"));

// 3. Операторы сравнения

console.log(8 > 12); // false
console.log(12 > 8); // true
console.log(0 == 0); // true
console.log(0 == false); // true
console.log(0 === false); // false
console.log("3" == 3); // true

// 4. Условные операторы

let year = 2023;

if (year === 2024) {
  console.log("Вы правы, сейчас 2024 год");
} else if (year === 2023) {
  console.log("Не совсем, сейчас 2024, а вы пишете 2023");
} else {
  console.log(`Вы не правы, сейчас 2024, а вы пишете ${year}`);
}

// 4.1 Условый тернарный оператор

let ternarNumber = 20;

let message1 = ternarNumber > 10 ? "Сравнение верное" : "Сравнение ложное";
console.log(message1);

let message2 =
  ternarNumber === 10
    ? "Сравнение верное для 10"
    : ternarNumber === 9
    ? "Сравнение верное для 9"
    : "сравнение неверное";

console.log(message2);

// 4.2 switch case

let switchNumber = 10;

switch (switchNumber) {
  case 10: {
    console.log("Число 10");
    break;
  }

  case 9: {
    console.log("Число 9");
    break;
  }

  default: {
    console.log("Не нацденно ни оно из чисел");
  }
}

//5. Логические операторы

let res = 5 > 7 && 5 > 4;
console.log(res);

console.log(!null);

//6. Массивы

let array = ["apple", "orange", "cherry"];
let fruit = "";

// concat() - это метод который прибавляет к нашей строке другую строку

// забрать элемент через index
console.log(array[1]);

// получить длинну массива
console.log(array.length);

// 7.Цикл for

for (let i = 0; i< array.length; i++) {
    console.log(array[i])
    fruit = fruit + array[i]
}

console.log(array.toString());