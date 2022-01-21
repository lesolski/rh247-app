// ./store/store.js

import { createStore, combineReducers } from 'redux';
import SitesReducer from './sites/reducer';

const rootReducer = combineReducers({sites: SitesReducer});
  
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer);
/* eslint-disable no-underscore-dangle */

export default store;

