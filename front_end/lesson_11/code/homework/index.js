// Задание 1
let numbersArray = [1, 2, 3, 4, 5];

const getArrayElementByIndex = (array, index) => array[index];

console.log(getArrayElementByIndex(numbersArray, 2));

// Задание 2
let numbersArray1 = [1, 2, 3, 4];
let numbersArray2 = [5, 6, 7, 8];

// Альтернативный вариант с Function Decloration
// function connectTwoArray(array1, array2) {
//   return [...array1, ...array2];
// }

const connectTwoArray = (array1, array2) => [...array1, ...array2];

// let connectedArray = connectTwoArray(numbersArray1, numbersArray2);
// const connectedArray2 = connectTwoArray(numbersArray1, numbersArray2)

console.log(connectTwoArray(numbersArray1, numbersArray2));

//Задание 3*
const getWeatherDecodedMessage = (weatherCode, decode) => decode(weatherCode);

const weatherCodes = {
  SQ: "SQ",
  PO: "PO",
  FC: "FC",
  BR: "BR",
  HZ: "HZ",
  FU: "FU",
  DS: "DS",
  SS: "SS",
};

const decode = (codeOfWeather) => {
  switch (codeOfWeather) {
    case weatherCodes.SQ:
      return "шквал";
    case weatherCodes.PO:
      return "пыльный вихрь";
    case weatherCodes.FC:
      return "торнадо";
    case weatherCodes.BR:
      return "дымка (видимость от 1 до 9 км)";
    case weatherCodes.HZ:
      return "мгла (видимость менее 10 км)";
    case weatherCodes.FU:
      return "дым (видимость менее 10 км)";
    case weatherCodes.DS:
      return "пыльная буря (видимость менее 10 км)";
    case weatherCodes.SS:
      return "песчаная буря (видимость менее 10 км) ";
    default:
      return "Неверный код погоды!";
  }
};

let decodedWeatherMessage = getWeatherDecodedMessage(weatherCodes.BR, decode);
console.log(decodedWeatherMessage);
