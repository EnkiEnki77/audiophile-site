import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { AiFillFacebook } from 'react-icons/ai';
import { AiOutlineTwitter } from 'react-icons/ai';
import { BsInstagram } from 'react-icons/bs';
import MainLogo from '../assets/home/mobile/audiophile.png'

const Footer = () => {
  return (
    <FooterContainer>
      <Logo src={MainLogo}/>
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
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 52px 24px;

  ul{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 148px;
  }
`;

export const  Logo= styled.img`
  
`;

export const LI = styled.li`
  font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 13px;
line-height: 25px;
/* identical to box height, or 192% */

letter-spacing: 2px;
text-transform: uppercase;

color: #FFFFFF;
text-align: center;
margin: 0;
opacity: 0.8;
`;

export const FooterDescript = styled.p`
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */

text-align: center;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;
margin: 0;
`;

export const  Copyright= styled.p`
  font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 15px;
line-height: 25px;
/* identical to box height, or 167% */


color: #FFFFFF;
margin: 0;

mix-blend-mode: normal;
opacity: 0.5;
`;

export const Socials = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
  justify-content: center;
  align-items: center;
`;

export const  Facebook= styled(AiFillFacebook)`
  font-size: 28px;
  color: #FFFFFF;
`;

export const  Twitter= styled(AiOutlineTwitter)`
  font-size: 28px;
  color: #FFFFFF;
`;

export const  Insta= styled(BsInstagram)`
  font-size: 22px;
  color: #FFFFFF;
`;

export default Footer