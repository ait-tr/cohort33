import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { ButtonWrapper, SegaWrapper, Text } from "./styles";

function Sega() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SegaWrapper>
      <Text>
        Sega Corporation is a Japanese multinational video game and
        entertainment company headquartered in Shinagawa, Tokyo. Its
        international branches, Sega of America and Sega Europe, are
        headquartered in Irvine, California, and London, respectively. Its
        division for the development of both arcade games, Sega Games, has
        existed in its current state since 2020; from 2015 to that point, the
        two had made up separate entities known as Sega Games and Sega
        Interactive Co., Ltd. Sega is a subsidiary of Sega Sammy Holdings. From
        1983 until 2001, Sega had also developed video game consoles.
      </Text>
      <ButtonWrapper>
        <Button name="Go back" onClick={goBack} />
      </ButtonWrapper>
    </SegaWrapper>
  );
}

export default Sega;
