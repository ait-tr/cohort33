import { useEffect } from "react"

import { useAppDispatch, useAppSelector } from "store/hooks"
import {
  catFactSliceActions,
  catFactSliceSelectors,
} from "store/redux/catFacts/catFactsSlice"

import Button from "components/Button/Button"

import {
  CarFactsWrapper,
  ButtonContainer,
  CarFactsText,
  CarFactsCard,
  CatFactsInfoContainer,
} from "./styles"
import { CatFactInfo } from "store/redux/catFacts/types"

function CatFacts() {
  const dispatch = useAppDispatch()
  const { data, error, isLoading } = useAppSelector(
    catFactSliceSelectors.catFact,
  )

  const getCatFact = () => {
    dispatch(catFactSliceActions.getCatFact(undefined))
  }

  const deleteAllCatFacts = () => {
    dispatch(catFactSliceActions.resetCatFactState())
  }

  useEffect(() => {
    if (error) {
      alert("Error response")
    }
  }, [error])

  return (
    <CarFactsWrapper>
      <CarFactsCard>
        <ButtonContainer>
          <Button
            disabled={isLoading}
            name="Get cat fact"
            onClick={getCatFact}
          />
        </ButtonContainer>
        {data.map((catFactObj: CatFactInfo, index: number) => {
          return (
            <CatFactsInfoContainer key={catFactObj.id}>
              <CarFactsText>{`${index + 1}. ${catFactObj.fact}`}</CarFactsText>
              <ButtonContainer>
                <Button
                  isRed
                  name="Delete cat fact"
                  onClick={() =>
                    dispatch(catFactSliceActions.deleteCatFact(catFactObj.id))
                  }
                />
              </ButtonContainer>
            </CatFactsInfoContainer>
          )
        })}
        {data.length > 0 && (
          <ButtonContainer>
            <Button
              name="Delete all cat Facts"
              onClick={deleteAllCatFacts}
              isRed
            />
          </ButtonContainer>
        )}
      </CarFactsCard>
    </CarFactsWrapper>
  )
}

export default CatFacts
