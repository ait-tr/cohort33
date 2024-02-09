// 1 пример

console.log(1);
setTimeout(() => console.log(2), 0);
console.log(3);
setTimeout(() => console.log(4), 0);

// 2 пример
setTimeout(() => console.log(1), 0);

const promise = new Promise((resolve, reject) => {
  resolve(2);
});

promise.finally(() => console.log(3)).then((result) => console.log(result));

console.log(4);
