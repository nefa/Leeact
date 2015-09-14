import React from 'react'
import {DefaultRoute, Redirect, NotFoundRoute, Route} from 'react-router';

import App from './components/app';
import HomePage from './pages/home-page';
import ProductForm from './pages/buy-product-form';
import TransactionHystory from './pages/transactions';

export default (
  <Route handler={App}>
    <DefaultRoute handler={HomePage} name="home" />
    <Route path="buy-product-form" handler={ProductForm}/>
    <Route path="transactions" handler={TransactionHystory} />
  </Route>
)
