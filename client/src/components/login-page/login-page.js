import React from 'react';
import PropTypes from 'prop-types';
import './login-page.css';

import LoginButton from './login-button';

const LoginPage = ({ login, loginError, user }) => {
  return (
    <div className="login-page">
      {user && 'Logged In'}
      <LoginButton socialNetwork="facebook" login={login}>
        Login with facebook
      </LoginButton>
      <LoginButton socialNetwork="twitter" login={login}>
        Login with twitter
      </LoginButton>
      <div className="login-error error">
        {loginError}
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  login: PropTypes.func.isRequired,
  loginError: PropTypes.string,
};

export default LoginPage;
