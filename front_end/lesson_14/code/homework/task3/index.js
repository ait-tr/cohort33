// Создаем функцию showNumbers, которая возращает нам промис и в качестве аргумента принимает кол-во сек
function showNumbers(seconds) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(`Прошло ${seconds} секунд(ы)`), seconds * 1000);
    setTimeout(() => reject("Error"), 5000);
  });
}

// Создаем массив секунд
// const timers = [3, 2, 4, 1, 2, 6];

// // перебираем timers через forEach()
// timers.forEach((second) => {
//   showNumbers(second) // вызываем showNumbers() для каждого элемента массива
//     .then((result) => console.log(result)) // вызываем then для успешного выполнения
//     .catch((error) => console.log(error)); // на catch ловим ошибку
// });

// showNumbers(3).then((result) => console.log(result));
// showNumbers(2).then((result) => console.log(result));
// showNumbers(4).then((result) => console.log(result));
// showNumbers(1).then((result) => console.log(result));
// showNumbers(2).then((result) => console.log(result));
// showNumbers(3).then((result) => console.log(result));

// Promise API
// 1. Promise.race()

const promiseResult = Promise.race([
  showNumbers(2),
  showNumbers(4),
  showNumbers(5),
]);
promiseResult
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 2. Promise.all()

const promiseResultAll = Promise.all([
  showNumbers(2),
  showNumbers(4),
  showNumbers(5),
  showNumbers(6),
]);
promiseResultAll
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
