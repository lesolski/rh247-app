// ./store/store.js

import { createStore, combineReducers } from 'redux';
import SitesReducer from './reducers/sites';

const rootReducer = combineReducers({sites: SitesReducer});
  
/* eslint-disable no-underscore-dangle */
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-disable no-underscore-dangle */

export default store;

