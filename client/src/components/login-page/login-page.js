import React from 'react';
import PropTypes from 'prop-types';
import './login-page.css';

import LoginButton from './login-button';

const LoginPage = ({ login }) => {
  return (
    <div className="login-page">
      <LoginButton socialNetwork="facebook" login={login}>
        Login with facebook
      </LoginButton>
      <LoginButton socialNetwork="twitter" login={login}>
        Login with twitter
      </LoginButton>
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginPage;
