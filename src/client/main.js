import React from 'react';
import Router from 'react-router';
import ReactDOM from 'react-dom';
import routes from './routes';

// TODO: break the css into multiple, per-component styles
// require('../../assets/styles/main.scss')

Router.run(routes, Router.HistoryLocation, (Handler) => {
    ReactDOM.render(<Handler />, document.getElementById('app'));
});
