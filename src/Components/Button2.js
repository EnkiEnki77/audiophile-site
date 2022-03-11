import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button2 = (props) => {
  return (
    <Link to={props}><ButtonTwo>SEE PRODUCT</ButtonTwo></Link>
  )
}

export const ButtonTwo = styled.button`
    height: 48px;
    width: 160px;
    background-color: var(--color6);
    border: 1px solid black;
    color: var(--color7);
    font-family: 'Manrope';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: left;


    &:hover{
        cursor: pointer;
        background-color: var(--color7);
        color: var(--color6)
    }
`;
export default Button2