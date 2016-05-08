import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { 
  Router, 
  browserHistory 
} from 'react-router';

import App from './components/App';
import configureStore from './configureStore';
import configureRoutes from './routes';

const store = configureStore();
const routes = configureRoutes(store);

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={browserHistory} />
  </Provider>,
  document.querySelector('#app')
);