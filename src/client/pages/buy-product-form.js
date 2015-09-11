import React from 'react';

export default class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      product: null
    }
  }

  componentDidMount() {
    window.onmessage = this.setProduct.bind(this);
  }

  setProduct(product) {
    this.setState({product: product.data});
  }

  validateFrom(data) {

  }

  onHandleTransaction(e) {
    e.preventDefault();
    const data = {
      name: this.refs.nameField.getDOMNode().value,
      email: this.refs.emailField.getDOMNode().value
    }
    this.validateFrom(data);

    window.parent.postMessage(data, '*');
  }

  renderForm() {
    if(this.state.product) {
      return (
        <form >
          <p>Current product: {this.state.product.description}</p>
          <br />Name<input type="text" ref="nameField" />
          <br />Email<input type="email" ref="emailField" />
          <br /><button onClick={this.onHandleTransaction.bind(this)}>Buy</button>
        </form>
      )
    } else return <p>loading...</p>
  }

  render() {
    return this.renderForm()
  }
}
