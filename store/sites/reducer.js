// ./store/sites/reducer.js

import Sites from '../../data/sites';
import { SAVE_MARKER } from './types';

const initialState = {
  sites: Sites, 
  favoriteSites: [],
  coords: undefined 
};

const SitesReducer = (state = initialState, action) => {
  switch (action.type) {

    case SAVE_MARKER : {
      return {
        ...state,
        coords: {latitude:action.payload.latitude, longitude:action.payload.longitude}
      }
    }
    default:
      return state;
  }
};

export default SitesReducer;

