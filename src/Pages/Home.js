import {React, useState} from 'react'
import styled from 'styled-components'
import Header from '../Components/Header'
import MobileNav from '../Components/MobileNav'

const Home = () => {
    const [toggle, setToggle] = useState(false)

    function handleNav(){
        setToggle(!toggle)
    }

    return (
        <HomeContainer>
            <Header toggle={handleNav}/>
            {toggle && <MobileNav/>}
        </HomeContainer>
    )
}

export const HomeContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export default Home
