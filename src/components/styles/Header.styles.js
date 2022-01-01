import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  width: 100%;
  height: 97px;
  background-color: #000000;
  /* position: absolute;
  top: 0; */
`;

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;


export const Logo = styled.img`
  max-width: 143px;
  max-height: 25px;
`;

export const NavLinks = styled.div`
  /* flex-basis: 50%; */
  display: flex;
  gap: 3vw;
  padding-right: clamp(50px, 200px, 200px);
  ;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  color: #f9f9f9;
`;

export const Cart = styled.img`
  max-width: 23.3%;
  max-height: 20px;

`;