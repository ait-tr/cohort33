import { useState, useEffect } from "react";

import Button from "components/Button/Button";

import { JokeInfo } from "./types";
import { Homework24Wrapper, Text, Card, ContainerJokes } from "./styles";

function Homework24() {
  // Объявляем jokeInfo - для отображения данных, которые пришли
  // с сервера. JokeError для отображения ошибки
  const [jokeInfo, setJokeInfo] = useState<JokeInfo | undefined>(undefined);
  const [jokeError, setJokeError] = useState<string | undefined>(undefined);

  const getJokes = async (isCalledForUpdate?: boolean) => {
    try {
      // response возвращает обьект Response, который отображает информацию о
      // ответе: status, ok, header и т.д
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data = await response.json();

      if (!response.ok) {
        // Если статус ответа не в пределах 200-299, считаем это ошибкой
        // и гененируем ее таким образом, чтобы отдать result блоку catch
        throw Object.assign(new Error("API Error"), {
          response: data,
        });
      } else {
        setJokeError(undefined);
        setJokeInfo({ question: data.setup, answer: data.punchline });

        if (isCalledForUpdate) {
          alert("Вы получили новую шутку");
        }
      }
    } catch (error) {
      //Тут обрабатываются ошибки
      setJokeInfo(undefined);
      setJokeError("Ошибка при получении данных");

      if (isCalledForUpdate) {
        alert("Ошибка при получении данных");
      }
    }
  };

  // В жизненный цикл Mounting, вызваем ф-ию getJokes только один раз
  // для этого мы 2 аргументом прокидываем []
  useEffect(() => {
    getJokes();
  }, []);

  return (
    <Homework24Wrapper>
      <Card>
        <ContainerJokes>
          {jokeInfo && (
            <>
              <Text>{jokeInfo?.question}</Text>
              <Text>{jokeInfo?.answer}</Text>
            </>
          )}
          {jokeError && <Text>{jokeError}</Text>}
        </ContainerJokes>
        <Button name="Get new joke" onClick={() => getJokes(true)} />
      </Card>
    </Homework24Wrapper>
  );
}

export default Homework24;
