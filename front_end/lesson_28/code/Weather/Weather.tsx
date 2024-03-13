import { WeatherWrapper, Header, Main } from "./styles";

function Weather() {
  // В компоненте Weather, вам нужно посылать запрос и получить ответ
  return (
    <WeatherWrapper>
      <Header>Weather app</Header>
      <Main>
        {/* Тут нужно показывать компоненты WheatherInfo или WeatherError
        в зависимоти от того какие данные придут, с ошибкой или с информацией о погоде */}
      </Main>
    </WeatherWrapper>
  );
}

export default Weather;
