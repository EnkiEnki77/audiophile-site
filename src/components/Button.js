import React from 'react';

const Button = (props) => {
  return <button type = {props.type}><a href={props.route}>{props.text}</a></button>;
};

export default Button;
