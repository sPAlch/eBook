import { createAction } from 'redux-actions';
import {
  GET_CONFIG_SUCCESS,
  GET_CONFIG_FAIL
} from '../constants/actionTypes';

export const getConfigSuccess = createAction('GET_CONFIG_SUCCESS');
export const getConfigFail = createAction('GET_CONFIG_FAIL');
