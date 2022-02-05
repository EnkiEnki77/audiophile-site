import React from 'react';

const Input = (props) => {
  return (
  <label htmlFor={props.id} >
      {props.label}
     <input type={props.type} name={props.name} placeholder={props.placeholder} id={props.id}/>
  </label>
  )
};

export default Input;
