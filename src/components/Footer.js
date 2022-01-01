import React from 'react'
import { FooterCont, FooterInfo, FooterLogo, FooterDescript, Copywrite, FooterLinks, FooterNavLink,FooterNavLinks, SocialLink, SocialLinks} from './styles/Footer.styles'
import siteLogo from '../assets/shared/desktop/logo.svg'
import facebook from '../assets/shared/desktop/icon-facebook.svg'
import instagram from '../assets/shared/desktop/icon-instagram.svg'
import twitter from '../assets/shared/desktop/icon-twitter.svg'

const Footer = () => {
    return (
        <FooterCont>
            <FooterInfo>
                <FooterLogo src={siteLogo}/>
                <FooterDescript>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we’re open 7 days a week.</FooterDescript>
                <Copywrite>Copyright 2021. All Rights Reserved</Copywrite>
            </FooterInfo>
            <FooterLinks>
                <FooterNavLinks>
                    <FooterNavLink to='/home' >Home</FooterNavLink>
                    <FooterNavLink to='/category/headphones'>Headphones</FooterNavLink>
                    <FooterNavLink to='/category/speakers'>Speakers</FooterNavLink>
                    <FooterNavLink to='/category/earphones'>Earphones</FooterNavLink>
                </FooterNavLinks>
                <SocialLinks>
                    <a href='https://twitter.com/home?lang=en'><SocialLink src={facebook}/></a>
                    <a href='www.instagram'><SocialLink src={instagram}/></a>
                    <a href='www.twitter.com'><SocialLink src={twitter}/></a>
                </SocialLinks>
            </FooterLinks>
        </FooterCont>
    )
}

export default Footer
