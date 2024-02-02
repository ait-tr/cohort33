const cars = [
  { brand: "BMW", price: 20000, isDiesel: true },
  { brand: "Mercedes", price: 22000, isDiesel: false },
  { brand: "Porshe", price: 50000, isDiesel: true },
  { brand: "Nissan", price: 25000, isDiesel: false },
  { brand: "Audi", price: 40000, isDiesel: false },
];

// 1 задание

// 1 способ

const listOfCarsWithoutPrices1 = cars.map((value) => {
  const { price, ...rest } = value;
  console.log(rest); // rest опреатор включает в себя все остататочные парраметры

  return rest;
});

console.log(listOfCarsWithoutPrices1);

// 2 способ
const listOfCarsWithoutPrices2 = cars.map((car) => {
  ({ brand: car.brand, isDiesel: car.isDiesel });
});

console.log(listOfCarsWithoutPrices2);

// ЗАДАНИЕ 2
const dieselCars = cars.filter((car) => car.isDiesel); // car.isDiesel === true
console.log(dieselCars);

//ЗАДАНИЕ 3
const nonDieselCars = cars.filter((car) => !car.isDiesel); // car.isDieasel === false
console.log(nonDieselCars);

//zadanie 4

// [
//   { brand: "Mercedes", price: 22000, isDiesel: false },
//   { brand: "Nissan", price: 25000, isDiesel: false },
// { brand: "Audi", price: 40000, isDiesel: false },
// ];

const totalPriceNoDiesel = nonDieselCars.reduce((acc, currentValue) => {
  console.log(acc);
  console.log(currentValue.price);
  // 1 случай: Если вы не указали initialValue ,то при первой итерации
  // - acc будет равен первому элементу массива, который вы перебираете
  // - currentValue - будет равен второму элементу массива, который вы перебираете

  // 2 случай: Если мы указали initialValue, то при первой итерации
  // - acc будет равен initialValue
  // - currentValue - будет равен первому элементу массива, который вы перебираете

  return acc + currentValue.price; // при первой итерации, если не указывать initalValue, то вы получите такую операцию { brand: "Mercedes", price: 22000, isDiesel: false } +25000
},0);
console.log(totalPriceNoDiesel);

//zadanie 5
const increasedCarPrices = cars.map((car) => {
  return {
    ...car,
    price: car.price * 1.2,
  };
});

console.log(increasedCarPrices);

//zadanie 6
const replacementOfDieselCars = cars.map((car) => {
  if (car.isDiesel) {
    return { brand: "Tesla", price: 25000, isDiesel: false };
  } else {
    return car;
  }
});

console.log(replacementOfDieselCars);
