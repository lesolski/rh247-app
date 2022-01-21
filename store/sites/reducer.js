// ./store/sites/reducer.js

import Sites from '../../data/sites';
import addSite from './actions';

const initialState = {
  sites: Sites, 
  favoriteSites: []
};

const SitesReducer = (state = initialState, action) => {
  switch (action.type) {

    case 'ADD_SITE': {
      return {

      }  

    }

    default:
      return state;
  }
};

export default SitesReducer;

