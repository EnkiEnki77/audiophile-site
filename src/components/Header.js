import React from 'react'
import { HeaderContainer, Nav, Logo, NavLinks, NavLink, Cart } from './styles/Header.styles' 
import siteLogo from '../assets/shared/desktop/logo.svg'
import siteCart from '../assets/shared/desktop/icon-cart.svg'


const Header = () => {
    return (
        <HeaderContainer>
            <Nav>
                <Logo src={siteLogo}/>
                <NavLinks>
                    <NavLink to='/home'>Home</NavLink>
                    <NavLink to='/category/headphones'>Headphones</NavLink>
                    <NavLink to='/category/speakers'>Speakers</NavLink>
                    <NavLink to='/category/earphones'>Earphones</NavLink>
                    
                </NavLinks>
                <NavLink to='/'>Logout</NavLink>
                <Cart src={siteCart}/>
            </Nav>
        </HeaderContainer>
    )
}

export default Header
