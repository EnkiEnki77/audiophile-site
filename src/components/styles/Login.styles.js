import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../Button";
import Form from "../Form";
import Input from "../Input";


export const LoginButt = styled(Button)`
  width: 100px;
  height: 50px;
  color: white;
  background-color: blue;
  border-radius: 5px;
`;

export const LoginCont = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    flex-flow: column nowrap;
`;

export const LoginForm = styled(Form)`
  
`;

export const Email = styled(Input)`
  width: 200px;
  height: 50px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const Password = styled(Input)`
   width: 200px;
  height: 50px;
  border: 2px solid black;
  border-radius: 5px;
`;

export const Title = styled.h1`
  
`;

export const RegisterLink = styled(Link)`
  
`;