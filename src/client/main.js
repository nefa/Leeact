import React from 'react';
import Router from 'react-router';
import routes from './routes';

// TODO: break the css into multiple, per-component styles
require('../../assets/styles/main.scss')

Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler />, document.getElementById('app'));
});
