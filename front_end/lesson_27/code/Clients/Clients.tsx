import { ClientsWrapper, StyledLink } from "./styles";

function Clients() {
  return (
    <ClientsWrapper>
      <StyledLink to="facebook">Facebook</StyledLink>
      <StyledLink to="apple">Apple</StyledLink>
      <StyledLink to="sega">Sega</StyledLink>
    </ClientsWrapper>
  );
}

export default Clients;
