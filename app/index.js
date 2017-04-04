import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
  getConfigSuccess
} from './actions';
import Main from './components/Main';
import store from './store';
import 'whatwg-fetch'
import './index.scss'

fetch('app/config.json')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    store.dispatch(getConfigSuccess(json))
  }).catch(function(ex) {
    console.log('parsing failed', ex)
  })

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);