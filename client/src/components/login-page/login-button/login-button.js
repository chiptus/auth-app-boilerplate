import React, { PropTypes } from 'react';
import './login-button.css';
const LoginButton = ({ children, socialNetwork }) => {
  return (
    <div className="login-button-wrapper">
      <button className="login-button">
        <i className={`fa fa-${socialNetwork}`} />{children}
      </button>
    </div>
  );
};

LoginButton.propTypes = {
  socialNetwork: PropTypes.string.isRequired,
};

export default LoginButton;
