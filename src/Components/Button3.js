import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button1 = (props) => {
  return (
    <Link to={props.route}><ButtonOne>SHOP <p>{'>'}</p></ButtonOne></Link>
  )
}

export const ButtonOne = styled.div`
    display: flex;
    height: 18px;
    width: 57.32px;
    background-color: var(--color6);
    align-items: center;
    color: #101010;
    font-family: 'Manrope';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: left;
    gap: 2px;

    p{
        font-size: 23px;
        padding-bottom: 3px;
        color: var(--color1)
    }

    a{
        text-decoration:none;
    }

    &:hover{
        cursor: pointer;
        background-color: var(--color7);
        color: var(--color6)
    }
`;
export default Button1