import { combineReducers } from 'redux';

import auth from './auth';
import entities from './entities';
import ui from './ui';
export default combineReducers({
  auth,
  entities,
  ui,
});
