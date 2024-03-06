import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

import { UserLogo } from "assets";

import { colors } from "styles/colors";

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  height: fit-content;
  background-color: ${colors.primary};
  color: white;
`;

export const HeaderLogoContainer = styled.div`
  width: 40px;
  height: 40px;
`;

export const HeaderLogo = styled.img`
  width: 100%;
  height: 100%;
`;

HeaderLogo.defaultProps = { src: UserLogo };

export const NavContainer = styled.nav`
  display: flex;
  gap: 10px;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Footer = styled.footer`
  display: flex;
  padding: 30px;
  width: 100%;
  height: 100px;
  background-color: ${colors.primary};
  color: white;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: white;
`;
