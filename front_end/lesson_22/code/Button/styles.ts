import styled from "@emotion/styled";

interface ButtonComponentProps {
  isRed: boolean | undefined;
}

export const ButtonComponent = styled.button<ButtonComponentProps>`
  width: 100%;
  height: 70px;
  outline: none;
  border: none;
  border-radius: 4px;
  padding: 20px;
  background-color: ${({isRed}) => isRed ? 'red' : '#1f27f5'};
  color: white;
  font-size: 16px;
  cursor: pointer;
`;
