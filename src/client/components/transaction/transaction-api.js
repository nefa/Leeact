import {FirebaseAdapter, LocalstorageAdapter} from './transaction-adapters';

const TransactionAdapter = {
  firebase: FirebaseAdapter,
  localstorage: LocalstorageAdapter
};


 class AdapterController {
  constructor(adapter= 'localstorage') {
    this._adapter = new TransactionAdapter[adapter]();
  }

  addTransaction(data) {
    this._adapter.setData(data);
  }

  getAll() {
    return this._adapter.getData();
  }
}

var adapterInstance = null;

export default {

  initialize(adapter) {
    adapterInstance = new AdapterController(adapter);
  },

  allTransactions() {
    return adapterInstance.getAll();
  },

  newTransaction(transaction) {
    adapterInstance.addTransaction(transaction);
  }
}
