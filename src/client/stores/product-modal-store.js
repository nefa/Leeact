import Reflux from 'reflux';
import AdapterController from '../components/transaction/transaction-adapters';

export const ProductModalActions = Reflux.createActions([
  'processTransaction'
]);

export const ProductModalStore = Reflux.createStore({

  listenables: [ProductModalActions],

  init() {
    this.state = this.getInitialState();
    this.transactionCtrl = new AdapterController();
  },

  getInitialState() {
    return {
      user: null,
      prodct: null
    }
  },

  onProcessTransaction(transaction) {
    this.state.user= transaction.user;
    this.state.product= transaction.product;
    this.transactionCtrl.addTransaction(transaction);
  }
})

