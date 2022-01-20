// ./store/reducers/sites.js

import Sites from '../../data/sites';

const initialState = {
  sites: Sites, 
  favoriteSites: []
};

const SitesReducer = (state = initialState, action) => {
   return state;
};

export default SitesReducer;

