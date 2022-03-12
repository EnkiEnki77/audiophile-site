import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Button2 = (props) => {
  console.log(props)
  return (
    <Link to={props}><ButtonTwo item1 = {props.item1} item2 = {props.item2}>SEE PRODUCT</ButtonTwo></Link>
  )
}

export const ButtonTwo = styled.button`
    height: 48px;
    width: 160px;
    background-color: ${props => props.item1 ? '#000000' : 'transparent'};
    border: 1px solid black;
    color: ${props => props.item1 ? '#ffffff' : '#000000'};
    font-family: 'Manrope';
    font-size: 13px;
    font-style: normal;
    font-weight: 700;
    line-height: 18px;
    letter-spacing: 1px;
    text-align: center;
    margin-left: ${props => props.item2 ? '1.5rem' : '0'};


    &:hover{
        cursor: pointer;
        /* background-color: #f1f1f1 */
    }
`;
export default Button2