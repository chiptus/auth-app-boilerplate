import React from 'react';
import PropTypes from 'prop-types';

import './login-button.css';

const LoginButton = ({ children, socialNetwork, login }) => {
  return (
    <div className="login-button-wrapper">
      <button className="login-button" onClick={() => login(socialNetwork)}>
        <i className={`fa fa-${socialNetwork}`} />{children}
      </button>
    </div>
  );
};

LoginButton.propTypes = {
  socialNetwork: PropTypes.string.isRequired,
};

export default LoginButton;
