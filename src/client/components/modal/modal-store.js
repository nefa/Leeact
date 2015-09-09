import Reflux from 'reflux';

export const ModalActions = Reflux.createAction(['show', 'hide']);

export const ModalStore = Reflux.createStore({

  listenables: [ModalActions],

  init() {
    this.state = this.getInitialState();
  },

  getInitialState() {
    return {
      modalId: null,
      active: false,
      modalTemplate: null,
      templateData: null
    }
  },

  onShow() {
    this.state.active = true;
    this.trigger(this.state)
  },

  onHide() {
    this.state.active = false;
    this.trigger(this.state);
  }
});
