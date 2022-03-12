import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { AiOutlineInstagram } from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
      <Logo></Logo>
      <nav>
        <ul>
          <Link to="/"><LI>Home</LI></Link>
          <Link to="/"><LI>HEADPHONES</LI></Link>
          <Link to="/"><LI>SPEAKERS</LI></Link>
          <Link to="/"><LI>EARPHONES</LI></Link>
        </ul>
      </nav>
      <FooterDescript>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</FooterDescript>
      <Copyright>Copyright 2021. All Rights Reserved</Copyright>
      <Socials>
        <Link to="/"><Facebook/></Link>
        <Link to="/"><Twitter/></Link>
        <Link to="/"><Insta/></Link>
      </Socials>
    </FooterContainer>
  )
} 

export const FooterContainer = styled.div`
  width: 100%;
  height: 654px;
  background-color: #000000;
  margin-top: 120px;
`;

export const  Logo= styled.img`
  
`;

export const LI = styled.li`
  
`;

export const FooterDescript = styled.p`
  
`;

export const  Copyright= styled.p`
  
`;

export const Socials = styled.div`
  
`;

export const  Facebook= styled(AiFillFacebook)`
  font-size: 20px;
  color: black;
`;

export const  Twitter= styled(AiOutlineTwitter)`
  font-size: 20px;
  color: black;
`;

export const  Insta= styled(AiOutlineInstagram)`
  font-size: 20px;
  color: black;
`;

export default Footer