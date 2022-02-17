import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.min.css';
import './index.css';
import App from './App';

import {Provider} from 'react-redux'
import {store} from './store'

export const APIuri = 'http://localhost:3001'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
