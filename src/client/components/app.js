import React from 'react';
import {Link, RouteHandler} from 'react-router';
import TransactionApi from './transaction/transaction-api';


require("babel/polyfill");

export default class App extends React.Component {

  componentDidMount() {
    require('fastclick').attach(document.body);
    TransactionApi.initialize();
  }

  render() {
    return (
      <div className="Framework" >
        <div className="ContentWrap">
          <RouteHandler />
        </div>
      </div>
    )
  }
}



