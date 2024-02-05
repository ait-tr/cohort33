// setTimeout

// 1 пример
console.log("1");
console.log("2");
console.log("3");
console.log("4");
setTimeout(() => {
  console.log("5");
}, 2000); // 1000ms === 1s
console.log("6");

// 2 пример

const showMessage = (ms) => {
  const messageTimer = ms / 1000;

  // setTimeout(функция,которая должна выполнится потом, колличество миллисекунд)

  const alertMessage = () => {
    console.log(`Прошло ${messageTimer} секунды`);
  };
  
  setTimeout(alertMessage, ms);

  //   setTimeout(() => {
  //     console.log(`Прошло ${messageTimer} секунды`);
  //   }, ms);
};

showMessage(4000);

// 3 пример

function countToTen() {
  let count = 1;

  // Рекурсивный вызов функции - это когда функция вызывает сама себя
  function increment() {
    console.log(count);
    if (count < 10) {
      count++;
      setTimeout(increment, 1000); // Увеличивает счетчик каждую секунду
    }
  }

  increment();
}

countToTen();
