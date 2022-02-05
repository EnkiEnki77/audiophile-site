import React from 'react';
import { LoginButt, LoginCont, LoginForm, Email, Password, Title, RegisterLink } from '../components/styles/Login.styles';

const Register = () => {
  return (
    <LoginCont>
        <Title>Register</Title>
        <LoginForm>
            <Email type = 'text' placeholder='Enter email...' />
            <Password type = 'password' placeholder='Enter password...'/>
            <Password type = 'password' placeholder='Confirm password...'/>
            <LoginButt type='submit' text='Register' route ='/'/>
        </LoginForm>
    </LoginCont>
    );
};

export default Register;
