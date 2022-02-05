import React from 'react';
import { LoginButt, LoginCont, LoginForm, Email, Password, Title, RegisterLink } from '../components/styles/Login.styles';

const Login = () => {
  return (
  <LoginCont>
      <Title>Login</Title>
      <LoginForm>
          <Email type = 'text' placeholder='Enter email...' />
          <Password type = 'password' placeholder='Enter password...'/>
          <LoginButt type='submit' route = 'home' text='Log In'/>
      </LoginForm>
      <RegisterLink to = 'register'>Don't have an account? Create one now.</RegisterLink>
  </LoginCont>
  )
};

export default Login;
