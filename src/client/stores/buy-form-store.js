import Reflux from 'reflux';

export const BuyFormActions = Reflux.createActions(['submit']);

export const BuyFormStore = Reflux.createStore({

  listenables: [BuyFormActions],

  init() {
    this.state = this.getInitialState();
  }

  getInitialState() {
    return {};
  }

  onSubmit() {

  }
});
