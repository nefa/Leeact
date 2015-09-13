import React from 'react';
import {ProductModalActions} from '../../stores/product-modal-store';

export default class ProductModal extends React.Component {

  componentDidMount() {
    const iFrame = React.findDOMNode(this.refs.productIframe);

    iFrame.onload = () => {
      iFrame.contentWindow.postMessage(this.props, '*');

      window.onmessage = user => {
        const transactionData = {
          user: user.data,
          product: this.props
        };
        ProductModalActions.processTransaction(transactionData);
      };
    };
  }

  render() {
    return (
      <div>
        <h3>product template</h3>
        <iframe src="buy-product-form" ref="productIframe"></iframe>
      </div>
    );
  }
}
