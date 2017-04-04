import { handleActions } from 'redux-actions';
import { GalleryState } from '../../constants/galleryState';

import {
  GET_CONFIG_SUCCESS
} from '../../constants/actionTypes';

const configReducers = handleActions({
  GET_CONFIG_SUCCESS: (state, { payload }) => {
    return state.set('configData', payload)
  }
}, GalleryState);

export default configReducers;