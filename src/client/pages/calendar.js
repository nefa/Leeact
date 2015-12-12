import React from 'react';
import Moment from 'moment';

/*set localization*/
momentLocalizer(Moment);

/* main container class */
export default class Calendar extends React.Component {

  constructor(props) {
    super(props);
    this.displayName = 'Calendar';
  }

  render() {
    return (<div>
      {this.displayName}

    </div>);
  }
}


