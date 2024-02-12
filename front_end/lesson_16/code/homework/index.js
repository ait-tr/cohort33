// Элементы управления
const SEARCH_BUTTON = document.querySelector("#search-button");
const SEARCH_CITY_INPUT = document.querySelector("#city-input");

// Контейнеры для отображения
const LOADING_TEXT = document.querySelector("#load");
const WEATHER_INFO_CONTAINER = document.querySelector(
  "#weather-info-container"
);
const WEATHER_ERROR_CONTAINER = document.querySelector(
  "#weather-error-container"
);

// Тексты с информацией
const WEATHER_CITY = document.querySelector("#weather-city");
const WEATHER_ICON = document.querySelector("#weather-icon");
const INFO_TEMP = document.querySelector(".info__temp");
const ERROR_TITLE = document.querySelector(".error__title");
const ERROR_DESC = document.querySelector(".error__desc");

// Наш APP_ID
const APP_ID = "eea75aae6dbe00233ac1efadf2d99a2a";

// Создадим функцию createWeatherCard, которая будет принимать в себя в кажестве аргумента
// данные о погоде в случае успешного ответа с сервера
const createWeaterCard = (weatherData) => {
  INFO_TEMP.innerHTML = `${(weatherData.main.temp - 273.15).toFixed()} º`;
  WEATHER_CITY.innerHTML = weatherData.name;
  WEATHER_ICON.src = `http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;

  LOADING_TEXT.style.display = "none";
  WEATHER_INFO_CONTAINER.style.display = "flex";
};

const createErrorCard = (weatherError) => {
  ERROR_TITLE.innerHTML = weatherError.cod;
  ERROR_DESC.innerHTML = weatherError.message;

  LOADING_TEXT.style.display = "none";
  WEATHER_ERROR_CONTAINER.style.display = "flex";
};

// Создадим асинхронную функцию searchWeatherForCity, которая будет делать наш запрос
// на openweatherapp и показазывать блок с погодой или с ошибкой, в зависимости от результата выполнения запроса
const searchWeatherForCity = async () => {
  // Получаем данные с инпута SEARCH_CITY_INPUT и убираем пробелы
  const CITY_NAME = SEARCH_CITY_INPUT.value.trim();

  // Создаем URL для запроса на openweathermap, прокинув CITY_NAME, APP_ID
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${APP_ID}`;

  if (CITY_NAME.length === 0) {
    return alert("Please enter a city name");
  }

  WEATHER_INFO_CONTAINER.style.display = "none";
  WEATHER_ERROR_CONTAINER.style.display = "none";
  LOADING_TEXT.style.display = "flex";

  try {
    const response = await fetch(URL);
    const result = await response.json();

    if (!response.ok) {
      // Если статус ответа не в пределах 200-299, считаем это ошибкой
      // и гененируем ее таким образом, чтобы отдать result блоку catch
      throw Object.assign(new Error("API Error"), {
        response: result,
      });
    } else {
      createWeaterCard(result);
    }
  } catch (error) {
    createErrorCard(error.response);
  }
}

SEARCH_BUTTON.addEventListener("click", searchWeatherForCity);
