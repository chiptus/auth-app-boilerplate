import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import LoginPage from '../login-page';

const Router = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={LoginPage} />
    </BrowserRouter>
  );
};

export default Router;
