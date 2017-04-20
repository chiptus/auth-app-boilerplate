import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from '../../containers/login-page-container';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={LoginPage} />
    </BrowserRouter>
  );
};

export default Router;
