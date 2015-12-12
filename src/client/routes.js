import React from 'react'
import {DefaultRoute, Redirect, NotFoundRoute, Route} from 'react-router';

import App from './components/app';
import HomePage from './pages/home-page';
import ProductForm from './pages/buy-product-form';
import TransactionHystory from './pages/transactions';
import Client2 from './pages/client_2';


export default (
  <Route handler={App}>
    <DefaultRoute name="home" handler={HomePage} />
  {/*<Route path="buy-product-form" handler={ProductForm} />
    <Route path="transactions" handler={TransactionHystory} />
  */}
    <Route path="client2" handler={Client2} />
  </Route>
)
