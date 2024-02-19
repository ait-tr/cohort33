import { useState } from "react";

import Button from "../../components/Button/Button";
import Counter from "../../components/Counter/Counter";
import "./styles.css";

function Lesson19() {
  //useState()
  // хук useState() возвращает нам массив из 2 элементов
  const [value, setValue] = useState("Kate");
//   console.log(value);

const changeStateOnClick = () => {
    setValue("John");
  };

  // пример useState  с массивом
  const [animals, setAnimals] = useState(["Cat", "Dog", "Pig"])
  console.log(animals);

  const addAnimal = () => {
    setAnimals((prevValue) => {
        console.log(prevValue);
        return [...prevValue, "Tiger", "Lion"].filter((value) => value !== "Cat")
    })
  }

  // Functions, triggers
  // Как передавать функции HTML элементам
  // 1. Создаете функцию
  // 2. Передаете HTML элементу ф-ю через onClick
  const makeAlert = () => {
    alert("Alert message without parametrs");
  };

  // 2 пример с аргументом
  const makeAlertWithArgs = (message) => {
    alert(`Alert message with message: ${message}`);
  };

  const showMessageInConsole = () => {
    console.log("This function works");
  };

  const onChange = (event, message, message1, message2 = "Initial message") => {
    console.log(message);
    console.log(message1);
    console.log(message2);
    console.log(event.target.value);
  };

  return (
    <div className="lesson19-wrapper">
      {/* Если вам нужен event, но у вас нет других аргументов, то функция передается так:
      <input onChange={onChange} /> */}
      {/* Если вам нужен event, и у вашей функции есть другие аргументы, то функция передается так: */}
      {/* <input
        onChange={(event) => onChange(event, "Some message", "Some message1")}
      />
      <button onClick={makeAlert}>Click me!</button>
      <button onClick={() => makeAlertWithArgs("This function works")}>
        Make Alert with message
      </button> */}
      {/* <div className="buttons-container"> */}
        {/* <Button
          name="Button with function in props"
          onClick={showMessageInConsole}
        />
        <Button name="Button with default funciton" /> */}
        {/* <Button name="Some action" onClick={changeStateOnClick} /> */}
        {/* <Button name="Add Animal" onClick={addAnimal} /> */}
      {/* </div> */}
      <Counter />
    </div>
  );
}

export default Lesson19;
