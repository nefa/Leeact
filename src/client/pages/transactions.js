import React from 'react/addons';
import {TransactionActions, TransactionStore} from '../stores/transaction-store';

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
      return <p ></p>
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
