// 1. Поиск элементов для взаимодействия
// Элементы управления
const CITY_INPUT = document.querySelector("#city-input");
const SEARCH_BUTTON = document.querySelector(".search-button");

// Отображения данных которые придут в ответе
const WEATHER_CARD = document.querySelector(".weather-card");
const TEMP = document.querySelector(".temp");
const CITY_NAME = document.querySelector(".city-name");
const WEATHER_IMG = document.querySelector(".weather-img");

const API_KEY = "Ваш api key";

const getWeatherByCityName = async () => {
  const CITY_INPUT_VALUE = CITY_INPUT.value.trim();

  if (CITY_INPUT_VALUE.length === 0) {
    return alert("Please, enter city name!");
  }

  WEATHER_CARD.style.display = "none";

  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${CITY_INPUT_VALUE}&appid=${API_KEY}`;

  try {
    const response = await fetch(URL);

    const result = await response.json();

    if (!response.ok) {
      throw Object.assign(new Error("Weather Error"), {
        response: result,
      });
    }

    // Тут пишете логику по работе с успешным ответом
    console.log(result);
    WEATHER_CARD.style.display = "flex";
    const iconUrl = `http://openweathermap.org/img/w/${result.weather[0].icon}.png`;

    CITY_NAME.innerHTML = result.name;
    WEATHER_IMG.src = iconUrl;
  } catch (error) {
    // Тут прописываете логику с ошибкой
    console.log(error.response);
  }
};

SEARCH_BUTTON.addEventListener("click", (event) => {
  event.preventDefault();
  getWeatherByCityName();
});
