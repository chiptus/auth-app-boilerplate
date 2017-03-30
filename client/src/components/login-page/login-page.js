import React from 'react';
import './login-page.css';

import LoginButton from './login-button';

const LoginPage = () => {
  return (
    <div className="login-page">
      <LoginButton socialNetwork="facebook">Login with facebook</LoginButton>
      <LoginButton socialNetwork="twitter">Login with twitter</LoginButton>
    </div>
  );
};

export default LoginPage;
