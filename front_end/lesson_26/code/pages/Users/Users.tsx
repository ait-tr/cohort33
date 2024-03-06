import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { UsersWrapper, UsersPageTitle, ButtonControl } from "./styles";

import Button from "components/Button/Button";

function Users() {
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  useEffect(() => {
    return () => console.log('Component Users unmounted')
  }, [])
  
  return (
    <UsersWrapper>
      <UsersPageTitle>Users</UsersPageTitle>
      <ButtonControl>
        <Button name="Go to Home page" onClick={goToHomePage} />
      </ButtonControl>
    </UsersWrapper>
  );
}

export default Users;
