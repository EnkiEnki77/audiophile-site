import React from 'react';

const Form = (props) => {
  return(<form action={props.action} method='POST' encType='multipart/form-data' >
                {props.children}
        </form>)
      
  
};

export default Form;
