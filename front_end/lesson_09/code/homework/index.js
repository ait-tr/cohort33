// 1 задание:
let nameArray = ["Семен", "Иван", "Петр", "Татьяна"];
let ageArray = [18, 27, 74, 34];
let nameAgeArray = []; // Это массив, в который мы будем класть данные в формате: Семен 18 лет/годов

for (let i = 0; i < nameArray.length; i++) {
  // устаревший способ
  // nameAgeArray.push(
  //   nameArray[i].toString() + " " + ageArray[i].toString() + " " + "лет/годов"
  // );
  nameAgeArray.push(`${nameArray[i]} ${ageArray[i]} лет/годов`); // современный способ - используйте его `${}`
}
console.log(nameAgeArray);

// 2 задание
let reversedNameAgeArray = [];

for (let i = nameAgeArray.length - 1; i >= 0; i--) {
  reversedNameAgeArray.push(nameAgeArray[i]);
}

console.log(reversedNameAgeArray);

// Повторение: цикл while и for

// for
for (let i = 0; i < 3; i++) {
  // for (переменная; условие; действие)
  console.log(i);
}

// while
let i = 3; // 0, 1, 2, 3

while (i < 3) {
  console.log(i);
  i++;
}

// do while

let j = 3;

do {
  console.log(j);
  j++;
} while (j < 3);
