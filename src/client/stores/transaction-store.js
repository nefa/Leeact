import Reflux from 'reflux';
import TransactionApi from '../components/transaction/transaction-api';

export const TransactionActions = Reflux.createActions([
  'getAllTransactions'
]);

export const TransactionStore = Reflux.createStore({

  listenables: [TransactionActions],

  init() {
    this.state = this.getInitialState();
  },

  getInitialState() {
    return {
      allTransactions: null
    }
  },

  onGetAllTransactions() {
    this.state.allTransactions = TransactionApi.allTransactions();
    this.trigger(this.state);
  }
})
