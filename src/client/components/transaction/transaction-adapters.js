import Firebase from 'firebase';

export class LocalstorageAdapter {
  constructor(localKey= 'localTransaction') {
    this.localKey = localKey;
    this.name = 'localstorage';
  }

  getData() {
    var rawData = window.localStorage.getItem(this.localKey);
    var rawDataArray = rawData.split('|');
    var data = rawDataArray.map(item => JSON.parse(item));
    return data;
  }

  setData(data) {
    var stringData = JSON.stringify({transaction: data});

    var allTransactions = window.localStorage.getItem(this.localKey);
    if (allTransactions == null || allTransactions == undefined) {
      allTransactions = stringData;
    } else {
      allTransactions += `|${stringData}`;
    }

    window.localStorage.setItem(this.localKey, allTransactions);
  }
}

export class FirebaseAdapter {
  constructor(localKey= 'localTransaction') {
    this.localKey = `https://radiant-fire-1429.firebaseio.com/${localKey}`;
    this._firebase = new Firebase(this.localKey);
    this.name = 'firebase';
  }

  _getCollection(snapshot) {
    let data = snapshot.val()
    if (data) this.allData = Object.keys(data).map(key => data[key]);
    console.log(this.allData);
  }

  getData() {
    this._firebase.on('value', this._getCollection.bind(this));
  }

  setData(transaction) {
    this._firebase.push().set(transaction);
  }
}



