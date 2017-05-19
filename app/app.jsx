/*
 * @file app main file
 */

import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Deskmark from 'components/Deskmark';
import rootRedurer from 'reducers';

import 'bootstrap/scss/bootstrap.scss';

const store = applyMiddleware(
  thunkMiddleware
)(createStore)(rootRedurer);

const app = document.createElement('div');
document.body.appendChild(app);
render(
  <Provider store={store}>
    <Deskmark />
  </Provider>,
  app
);
