import { useState, ChangeEvent } from "react";

import Input from "components/Input/Input";
import Button from "components/Button/Button";

import WeatherInfo from "./components/WeatherInfo/WeatherInfo";
import WeatherError from "./components/WeatherError/WeaherError";

import { WeatherInfoData, WeatherErrorData } from "./types";
import {
  WeatherWrapper,
  Header,
  Main,
  WeatherForm,
  WeatherButtonWrapper,
  InputButtonWrapper,
  Loading,
} from "./styles";

function Weather() {
  // Контролируем Input
  const [city, setCity] = useState<string>("");
  // В этом стейте мы будем хранить успешно пришедшие данные с бекенда, но только те которые нам нужны для отображения
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoData | undefined>(
    undefined
  );
  // В этом стейте будут зраниться данные об ошибке, которая нам пришли с сервера
  const [weatherError, setWeatherError] = useState<
    WeatherErrorData | undefined
  >(undefined);
  // isLoading нам нужен как индикатор загрузки, чтобы мы его показывали в момент ожиданиия данных по сети
  const [isLoading, setLoading] = useState<boolean>(false);
  // APP_ID у каждого свой, найти его на можно на сайте у себя в зарегестрированном профиле
  const APP_ID: string = "eea75aae6dbe00233ac1efadf2d99a2a";
  // По  этому URL мы получаем данные из сервиса openweathermap
  const URL: string = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APP_ID}`;

  const onChangeCity = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  };

  const getWeatherInfo = async () => {
    // Тут проверяем пустое ли у нас поле, если да, то показываем alert и прерываем ф-ю
    if (city.trim().length === 0) {
      return alert("Enter city name");
    }

    // очищаем 2 стейта weatherInfo и weatherError, т.к при каждом новом запросе
    // нужно скрывать контейнеры со старой инфорацией об ошибке или погоде
    setWeatherInfo(undefined);
    setWeatherError(undefined);
    //т.к у нас начинается запрос, мы показыаем индикатор загрузки
    setLoading(true);

    // делаем зарпрос в openweatherapp и получаем обьект Response(там храниться инфа об ответе на запрос)
    // и получаем data - там будут храниться либо данные об ошибке, либо данные о погоде
    const response = await fetch(URL);
    const data = await response.json();

    console.log(response.ok);
    console.log(data);

    if (response.ok) {
      // Тут пишем логику работы с данными о погоде
      setLoading(false);
      setWeatherInfo({
        temp: `${Math.round(data.main.temp - 273.15)}°`,
        icon: `http://openweathermap.org/img/w/${data?.weather[0]?.icon}.png`,
        cityName: `${data.name}`,
      });
    } else {
      // Тут пишем логику работы с ошибкой
      setLoading(false);
      setWeatherError({ cod: data.cod, message: data.message });
    }
  };

  return (
    <WeatherWrapper>
      <Header>Weather App</Header>
      <Main>
        {/* Тут нужно показывать компоненты WheatherInfo или WeatherError
        в зависимоти от того какие данные придут, с ошибкой или с информацией о погоде */}
        <WeatherForm>
          <InputButtonWrapper>
            <Input
              placeholder="Enter city name"
              onChange={onChangeCity}
              value={city}
              name="city"
              id="weather-city"
              isWhite
            />
            <WeatherButtonWrapper>
              <Button name="Search" onClick={getWeatherInfo} />
            </WeatherButtonWrapper>
          </InputButtonWrapper>
          {isLoading && <Loading>Loading...</Loading>}
          {!!weatherInfo && (
            <WeatherInfo
              temp={weatherInfo.temp}
              icon={weatherInfo.icon}
              cityName={weatherInfo.cityName}
            />
          )}
          {!!weatherError && <WeatherError error={weatherError} />}
        </WeatherForm>
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
