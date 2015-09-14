import React from 'react';
import {BuyFormActions, BuyFormStore} from '../stores/buy-form-store';

export default class ProductForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = BuyFormStore.getInitialState();

  }

  componentDidMount() {
    window.onmessage = this.setProduct.bind(this);
    this.storeUnsubscribe = BuyFormStore.listen(this.onStateUpdate.bind(this));

  }

  componentWillUnmount() {
    this.storeUnsubscribe();
  }

  onStateUpdate(state) {
    this.setState(state);
  }

  setProduct(product) {
    this.setState({product: product.data});
  }

  onEmailKey(evt) {
    BuyFormActions.validateEmail(this.refs.emailField.getDOMNode().value);
  }

  onNameKey(evt) {
    BuyFormActions.validateName(this.refs.nameField.getDOMNode().value);
  }

  onHandleTransaction(e) {
    e.preventDefault();
    const data = {
      name: this.refs.nameField.getDOMNode().value,
      email: this.refs.emailField.getDOMNode().value
    }
    //send data through the iframe
    window.parent.postMessage(data, '*');
  }

  render() {
    const {pristine, nameInvalid, emailInvalid} = this.state;
    const emailError = 'Email is invalid';
    const showErrors = {'display': pristine ? 'none': 'block'}
    const submitDisabled = nameInvalid || emailInvalid

    if(this.state.product) {
      return (
        <div>
          <ul style={{'color': 'red'}, showErrors}>
            <li style={{'display': nameInvalid ? 'none' : 'block'}}>
              Name is invalid
            </li>
            <li style={{'display': emailInvalid ? 'none' : 'block'}}>
              Email is invalid
            </li>
          </ul>
          <form >
            <p>Current product: {this.state.product.description}</p><br />
            Name: <input type="text" ref="nameField"
              onKeyUp={this.onNameKey.bind(this)} /><br />
            Email: <input type="email" ref="emailField"
              onKeyUp={this.onEmailKey.bind(this)} /><br />
            <button
              disabled={submitDisabled}
              onClick={this.onHandleTransaction.bind(this)}>Buy
              </button>
          </form>
        </div>
      )
    } else return <p>loading...</p>
  }
}
