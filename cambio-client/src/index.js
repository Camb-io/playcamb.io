import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import './assets/index.scss';
import App from './components/App';
import store from './store'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App}/> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);