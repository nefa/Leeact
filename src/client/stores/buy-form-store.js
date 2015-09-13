import Reflux from 'reflux';

export const BuyFormActions = Reflux.createActions([
  'submit',
  'validateName',
  'validateEmail'
]);

export const BuyFormStore = Reflux.createStore({

  listenables: [BuyFormActions],

  init() {
    this.state = this.getInitialState();
  },

  getInitialState() {
    return {
      pristine: true,
      nameInvalid: true,
      emailInvalid: true
    };
  },

  onValidateName(name) {
    if (this.state.pristine) this.state.pristine = false;
    if (name.length <=2) {
      this.state.nameInvalid = false;
    } else {this.state.nameInvalid = true;}

    this.trigger(this.state);
  },

  onValidateEmail(email) {
    if (this.state.pristine) this.state.pristine = false;
    if (email.length <=4) {
      this.state.emailInvalid = false;
    } else {this.state.emailInvalid = true;}

    this.trigger(this.state);
  }
});
