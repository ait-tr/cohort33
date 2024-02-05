// setInterval()

// 1 пример

function simpleCounter() {
  let count = 1;

  const intervalId = setInterval(() => {
    console.log(count);
    count++;

    if (count > 5) {
      clearInterval(intervalId); // clearInterval() - функция, которая прерывает выполнение setinterval(), этой ф-ии нужно передать id которое возвращает setInterval
    }
  }, 1000);
}

simpleCounter();

// 2 пример:

function simpleCounter2() {
  let count = 1;

  const intervalId = setInterval(() => {
    console.log(count);
    count++;
  }, 1000);

  setTimeout(() => {
    clearInterval(intervalId);
  }, 7000);
}

simpleCounter2();
