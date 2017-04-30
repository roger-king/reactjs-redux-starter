import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import {Router, browserHistory} from 'react-router';
import './styles/index.css';
import routes from './Routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
render(
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>,
  document.getElementById('root')
);
