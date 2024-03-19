import { useState } from "react"

import Counter from "../../components/Counter/Counter"

import { Homework29Wrapper } from "./styles"

function Homework29() {
  const [count, setCount] = useState<number>(0)
  // const [name, setName] = useState<string>("Andrei")
  // setName("Pavel")
  // const [animals, setAnimals] = useState<string[]>(["Cat", "Dog"])
  // console.log(animals)
  // setAnimals(prevValue => {
  //   return [...prevValue, "Rat"]
  // })

  const onMinusValue = () => {
    setCount(prevValue => prevValue - 1)
  }

  const onPlus = () => {
    setCount(prevValue => prevValue + 1)
  }

  return (
    <Homework29Wrapper>
      <Counter count={count} onMinus={onMinusValue} onPlus={onPlus} />
    </Homework29Wrapper>
  )
}

export default Homework29
