import React from 'react';
import {Link, RouteHandler} from 'react-router';

require("babel/polyfill");

export default class App extends React.Component {

  componentDidMount() {
    require('fastclick').attach(document.body);
  }

  onClick() {
    // ActiveControlsActions.focus({type: 'framework'});
  }

  render() {
    return (
      <div className="Framework" onClick={this.onClick.bind(this)}>
        <div className="ContentWrap">
          <RouteHandler />
        </div>
      </div>
    )
  }

}

// App.willTransitionTo = function(transition, params, query, ready) {
//   BBWebApi.initialize()
//     .then(function() { return Nomenclature.initialize() })
//     .then(function() { ready() })
//     .catch(function(err) {
//       const from = 'App Component';
//       console.error(`${from} was unable to complete initialization process because`, err);
//     });
// };
