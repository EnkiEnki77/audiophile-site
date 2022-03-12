import {React, useState} from 'react'
import styled from 'styled-components'
import Button1 from './Button1'

const Product = (props) => {
    const [newItem, setNewItem] = useState(true)
  return (
    <ProductContainer>
        <ProductImg src={props.image}/>
        {newItem && <NewProduct>NEW PRODUCT</NewProduct>}
        <ProductName>{props.name}</ProductName>
        <ProductDescript>{props.description}</ProductDescript>
        <Button1/>
    </ProductContainer>
  )
}

export const ProductContainer = styled.div`
  width: 100%;
  padding:0 1.5rem;
  margin-top: 64px;
  margin-bottom:120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`;

export const ProductImg = styled.img`
  height: 352px;
  width:100%;
  margin-bottom: 8px;
`;

export const  NewProduct = styled.h3`
  font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 19px;
text-align: center;
letter-spacing: 10px;
text-transform: uppercase;
margin: 0;

color: #D87D4A;

`;

export const ProductName = styled.h2`
margin: 0;
  font-family: 'Manrope';
font-style: normal;
font-weight: 700;
font-size: 28px;
line-height: 38px;
text-align: center;
letter-spacing: 1px;
text-transform: uppercase;

color: #000000;
`;

export const  ProductDescript = styled.p`
margin: 0;
  font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 25px;
/* or 167% */

text-align: center;

color: #000000;

mix-blend-mode: normal;
opacity: 0.8;
`;


export default Product