import React from 'react'
import styled from 'styled-components'

const RadioInput = (props) => {
  return (
    <div>
        <Radio>
            <Select type="radio" id="radio"/>
            <Label id="radio">{props}</Label>
        </Radio>
    </div>
  )
}

export const Radio = styled.div`
  
`;

export const Select = styled.input`
  
`;

export const Label = styled.label`
  
`;

export default RadioInput