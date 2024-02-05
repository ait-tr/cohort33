// Promise

// 1 пример
let userDataFromServer = {
  firstName: "John",
  lastName: "Johnson",
  age: 32,
};

let promise = new Promise((resolve, reject) => {
  // Делаем запрос на бэкенд сервер GET и хотим получить ответ userDataFromServer
  // Имитация ответа по сети: мы не знаем заранее что и менно нам придет: ошибка или ответ который мы ожитаем(а именно обьект пользователя)

  let response; // в response нам приходит либо ошибка либо нормальный ответ с реальными данными

  setTimeout(() => {
    response = true;
    if (response) {
      resolve(userDataFromServer);
    } else {
      reject("Some server error");
    }
  }, 5000); // делаем имитацию запроса
});

promise
  //   .then(
  //     (result) => {
  //       console.log(result);
  //     }, // 1 - работает с resolve
  //     (error) => console.log(error) // 2 - работает с reject
  //   )
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.log(error))
  .finally(() => {
    console.log(
      "Блок finally выполняется всегда, неважно придет ошибка или ожидаемые данные"
    );
  });

console.log(promise);

console.log(2 + 3);
console.log("Hello world");

// Пример 2

let promise2 = new Promise((resolve, reject) => {
  reject("Error");
  resolve("Success");
});

promise2
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
