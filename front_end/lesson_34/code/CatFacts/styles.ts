import styled from "@emotion/styled"

import { colors } from "styles/colors"

export const CarFactsWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary};
`

export const CarFactsCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 900px;
  min-height: 400px;
  max-height: 720px;
  background-color: white;
  border: 1px solid black;
  border-radius: 10px;
  padding: 20px;
  overflow-y: auto;
  overflow-x: none;
`

export const ButtonContainer = styled.div`
  min-width: 300px;
`
export const CatFactsInfoContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
`
export const CarFactsText = styled.p`
  font-size: 24px;
  font-weight: bold;
`
