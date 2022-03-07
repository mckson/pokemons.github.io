import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes';

import configureStore from './store/configureStore';

const store = configureStore();

render(
  <Provider store={store}>
    <Router>
      <AppRoutes />
    </Router>
  </Provider>,
  document.getElementById('root'),
);
