import React from 'react';
import {TransactionActions, TransactionStore} from '../stores/transaction-store';
console.log(React);

export default class TransactionHystory extends React.Component {

  constructor(props) {
    super(props);
    this.state = TransactionStore.getInitialState();
  }

  componentDidMount() {
    this.storeUpdateHandler = this.storeDidUpdate.bind(this);
    this.storeUnsubscribe = TransactionStore.listen(this.storeUpdateHandler);
    TransactionActions.getAllTransactions();
  }

  componentWillUnmount() {
    this.storeUnsubscribe();
  }

  storeDidUpdate(state) {
    this.setState(state);
  }

  renderTransactions() {
    console.log(this.state.allTransactions);
    if (this.state.allTransactions) {
      return this.state.allTransactions.map(item => {
        return (
          <p key={item.transaction.product.id}>
            <span>{item.transaction.product.description}</span> - price:
            <span>{item.transaction.product.price}</span> -||-
            <span>{item.transaction.user}</span>
          </p>)
      });

    } else { return null }
  }

  render() {
    return (
      <div className="TranactionsWrap">
        <h3>let there be transactions !</h3>
        {this.renderTransactions()}
      </div>
    )
  }
}
