import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterCont  = styled.footer`
  height: 365px;
  width: 100%;
  background-color: #000000;
  display: flex;
  padding: 0;
  justify-self: flex-end;
  /* position: absolute;
  bottom: 0; */
`;

export const FooterInfo  = styled.div`
  flex-basis: 50%;
  height: 100%;
  color: #f9f9f9;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  gap: 4%;
  padding-left: 150px;
`;

export const FooterLogo  = styled.img`
  max-width: 143px;
  max-height: 25px;
`;

export const FooterDescript  = styled.p`
  font-size: 15px;
  color: #ffffff;
  opacity: 0.5;
`;

export const Copywrite  = styled.p`
  font-size: 15px;
  color: #ffffff;
  opacity: 0.5;
`;

export const FooterLinks  = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: flex-end;
  gap: 25%;
  flex-basis: 50%;
  padding-right: 150px;
`;

export const FooterNavLinks  = styled.div`
  /* width: 100%; */
  display: flex;
  padding-right: 20%;

  a{
    text-decoration: none;
  color: #f9f9f9;
  padding-right: 14%;
  
  }
`;

export const FooterNavLink  = styled(Link)`
  
`;

export const SocialLinks  = styled.div`
  margin-bottom: 40px;
  display: flex;
  gap: 15%;
  padding-right: 5%;
`;

export const SocialLink  = styled.img`
  
`;

