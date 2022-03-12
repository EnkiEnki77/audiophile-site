import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button1 = (props) => {
  return (
    <Link to='/'><ButtonOne>SEE PRODUCT</ButtonOne></Link>
  )
}

export const ButtonOne = styled.button`
    height: 48px;
    width: 160px;
    background-color: var(--color1);
    color: var(--color6);
    font-family: 'Manrope';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: center;


    &:hover{
        cursor: pointer;
        background-color: var(--color5)
    }
`;
export default Button1