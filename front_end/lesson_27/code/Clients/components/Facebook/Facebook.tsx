import { useNavigate } from "react-router-dom";

import Button from "components/Button/Button";

import { ButtonWrapper, FacebookWrapper, Text } from "./styles";

function Facebook() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <FacebookWrapper>
      <Text>
        Facebook is an online social media and social networking service owned
        by American technology giant Meta Platforms. Created in 2004 by Mark
        Zuckerberg with four other Harvard College students and roommates
        Eduardo Saverin, Andrew McCollum, Dustin Moskovitz, and Chris Hughes,
        its name derives from the face book directories often given to American
        university students. Membership was initially limited to Harvard
        students, gradually expanding to other North American universities.
      </Text>
      <ButtonWrapper>
        <Button name="Go back" onClick={goBack} />
      </ButtonWrapper>
    </FacebookWrapper>
  );
}

export default Facebook;
