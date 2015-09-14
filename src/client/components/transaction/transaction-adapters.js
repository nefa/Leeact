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
    var stringData = JSON.stringify( data );

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

  getData() {
    this._firebase.on('value', snapshot => {
      let data = snapshot.val();
      if (data) return Object.keys(data).map(key => data[key]);
    });
  }

  setData(transaction) {
    this._firebase.push().set(transaction);
  }
}



