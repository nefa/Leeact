import React from 'react';

export default class ProductTemplate extends React.Component {

  render() {
    const description = this.props.description;
    const price = this.props.price;
    return (
      <div>
        <h3>Product template</h3>
        <p>Buy {description} at: {price}</p>
      </div>
    )
  }
}
