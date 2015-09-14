import Reflux from 'reflux';
import AdapterController from '../components/transaction/transaction-adapters';
import TransactionApi from '../components/transaction/transaction-api';
import {ModalActions} from './modal-store';

export const ProductModalActions = Reflux.createActions([
  'processTransaction'
]);

export const ProductModalStore = Reflux.createStore({

  listenables: [ProductModalActions],

  init() {
    this.state = this.getInitialState();
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
    TransactionApi.newTransaction(transaction);
    ModalActions.hide();
  }
})

