import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';

import store from './store';

import 'font-awesome/css/font-awesome.css';

import App from './containers/app';
import './index.css';

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);
