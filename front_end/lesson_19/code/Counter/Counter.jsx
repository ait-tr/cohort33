import { useState } from "react";

import "./styles.css";

import Button from "../Button/Button";

function Counter() {
  // Создаем state для нашего Counter
  const [count, setCount] = useState(0);

  // Создаем функцию, которая будет увеличивать наш count на 1
  const onPlus = () => {
    setCount((prevValue) => {
      return prevValue + 1;
    });
  };

  // Создаем функцию, которая будет уменьшать наш count на 1
  const onMinus = () => {
    setCount((prevValue) => prevValue - 1);
  };

  return (
    <div className="counter-wrapper">
      <div className="button-control">
        <Button name="-" onClick={onMinus} />
      </div>
      <p className="count">{count}</p>
      <div className="button-control">
        <Button name="+" onClick={onPlus} />
      </div>
    </div>
  );
}

export default Counter;
