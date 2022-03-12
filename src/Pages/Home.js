import {React, useState} from 'react'
import styled from 'styled-components'
import Button1 from '../Components/Button1'
import Button2 from '../Components/Button2'
import Header from '../Components/Header'
import MobileNav from '../Components/MobileNav'
import HeroImage from '../assets/home/mobile/image-header.jpg'
import Footer from '../Components/Footer'
import SiteMessage from '../Components/SiteMessage'
import Item1IMG from '../assets/home/mobile/image-speaker-zx9.png'
import Item2IMG from '../assets/home/mobile/image-speaker-zx7.jpg'
import Item3IMG from '../assets/home/mobile/image-earphones-yx1.jpg'
import HeadWithNav from '../Components/HeadWithNav'


const Home = () => {
    
    return (
        <HomeContainer>
            <HeadWithNav/>
            <HeroContainer>
                <HeroImg src={HeroImage}/>
                <NewProduct>NEW PRODUCT</NewProduct>
                <HeroItem>XX99 Mark II HeadphoneS</HeroItem>
                <HeroDescript>Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</HeroDescript>
                <Button1/>
            </HeroContainer>
            <MobileNav/>
            <ItemShowcase>
                <Item1>
                    <Item1img src={Item1IMG}/>
                    <Item1Item>ZX9 SPEAKER</Item1Item>
                    <Item1Descript>Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.</Item1Descript>
                    <Button2 item1={true}/>
                </Item1>
                <Item2>
                    <Item2img src={Item2IMG}/>
                    <Item2Item>ZX7 SPEAKER</Item2Item>
                    <Button2 item2 = {true}/>
                </Item2>
                <Item3>
                    <Item3img src={Item3IMG}/>
                    <Item3Info>
                        <Item3Item>YX1 EARPHONES</Item3Item>
                        <Button2 item2 = {true}/>
                    </Item3Info>
                </Item3>
            </ItemShowcase>
            <SiteMessage/>
            <Footer/>
        </HomeContainer>
    )
}

export const HomeContainer = styled.div`
  width: 100%;

  
`;

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position:0 -100px;
  position: absolute;
  z-index:-1;
`;

export const NewProduct = styled.h3`
  font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-align: center;
letter-spacing: 10px;
text-transform: uppercase;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.5;
padding-bottom: 16px;
margin: 0;
`;

export const HeroItem = styled.h2`
  font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 40px;
/* or 111% */

text-align: center;
letter-spacing: 1.28571px;
text-transform: uppercase;

color: #FFFFFF;
padding-bottom: 24px;
margin: 0;
`;

export const HeroDescript = styled.p`
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */

text-align: center;

color: #FFFFFF;
margin: 0;

mix-blend-mode: normal;
opacity: 0.75;
padding: 0 1.5rem;
padding-bottom: 28px;
`;

export const HeroContainer = styled.div`

  width: 100%;
  height: 510px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 90px;
`;

export const HeadMobileNav = styled(MobileNav)`
  
`;

export const  ItemShowcase= styled.div`
  padding: 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 120px;
`;

export const  Item1= styled.div`
  height: 600px;
  width: 100%;
  background: #D87D4A;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
  gap: 24px;
`;

export const  Item1img= styled.img`
  height: 207px;
width: 172.2481689453125px;

border-radius: 0px;
margin-top: 55px;
margin-bottom: 8px;
`;

export const  Item1Item= styled.h2`
  font-family: 'Manrope';
  width:80%;
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 40px;
/* or 111% */

text-align: center;
letter-spacing: 1.28571px;
text-transform: uppercase;

color: #FFFFFF;
margin: 0;
`;

export const  Item1Descript= styled.p`
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */

text-align: center;
margin: 0;

color: #FFFFFF;

mix-blend-mode: normal;
opacity: 0.75;
`;

export const  Item2= styled.div`
  height: 320px;
  width: 100%;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  gap: 32px;
  
`;

export const  Item2img= styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const  Item2Item= styled.h2`
 font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: 2px;
text-transform: uppercase;

color: #000000;
margin: 0;
margin-left: 1.5rem;
`;

export const Item3 = styled.div`
  height: 424px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const  Item3img= styled.img`
  width: 100%;
  height: 200px;
  border-radius: 8px;
`;

export const  Item3Info= styled.div`
  width: 100%;
  height: 200px;
  border-radius: 8px;
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

export const  Item3Item= styled.h2`
  font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
letter-spacing: 2px;
text-transform: uppercase;
padding-left: 1.5rem;

color: #000000;
margin: 0;
`;

export const HeaderContainer = styled.div`
  width: 100%;
  height: ${props => props.toggle ? '804px' : null};
  position: absolute;
  background-color: rgba(0,0,0,0.2);
 
`;


export default Home
