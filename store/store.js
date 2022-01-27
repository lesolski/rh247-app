// ./store/store.js

import { createStore, combineReducers } from 'redux';
import SitesReducer from './sites/reducer';

const rootReducer = combineReducers({sites: SitesReducer});
const store = createStore(rootReducer);

export default store;

