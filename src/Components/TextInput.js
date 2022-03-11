import React from 'react'
import styled from 'styled-components'

const TextInput = (props) => {
  return (
    <div>
        <Label id={props}>{props}</Label>
        <Input type = {props} placeholder={props} id={props}/>
    </div>
  )
}

export const Input = styled.input`
  
`;

export const Label = styled.label`
  
`;

export default TextInput