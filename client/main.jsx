'use strict';

import 'styles/main.scss';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import { configureStore } from './store/configureStore';


import Layout from './components/Layout/Layout';


//import Index from 'components/Index/Index';
//render(<Index items={[1,2,3]} />, document.getElementById('js-main'));

const appStoreObj = configureStore();

render(
  <Provider store={appStoreObj}>
    <Layout />
  </Provider>,
  document.getElementById('js-main')
);
