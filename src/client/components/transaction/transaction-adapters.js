import Firebase from 'firebase';

class LocalstorageAdapter {

  constructor(localKey= 'localTransaction') {
    this.localKey = localKey;
    this.name= 'localstorage';
  }

  getData() {
    let allTransactions = window.localStorage.getItem(this.localKey);
  }

  setData(data) {
    var stringData = JSON.stringify({transaction: [data]});
    var allTransactions = window.localStorage.getItem(this.localKey);
    if (allTransactions == null || allTransactions == undefined) {
      allTransactions = stringData;

    } else {
      allTransactions += `, ${stringData}`;
    }

    window.localStorage.setItem(this.localKey, allTransactions);
  }
}

class FirebaseAdapter {

  constructor(localKey= 'localTransaction') {
    this.localKey = `https://radiant-fire-1429.firebaseio.com/${localKey}`;
    this._firebase = new Firebase(this.localKey);
    this.name = 'firebase';
    this._firebase.on('value', this._getCollection.bind(this));
  }

  _getCollection(snapshot) {
    let data = snapshot.val()
    if (data) this.allData = Object.keys(data).map(key =>  data[key]);
  }

  getData() {
    return this.allData || 'no transactios yet';

  }

  setData(transaction) {
    this._firebase.push().set(transaction);
  }
}

const TransactionAdapter = {
  firebase: FirebaseAdapter,
  localstorage: LocalstorageAdapter
};

export default class AdapterController {

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
