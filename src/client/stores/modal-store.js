import Reflux from 'reflux';

export const ModalActions = Reflux.createActions(['show', 'hide']);

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

  onShow(template, itemData) {
    this.state.active = true;
    this.state.templateData = itemData;
    this.state.modalTemplate = template;
    this.trigger(this.state);
  },

  onHide() {
    this.state = this.getInitialState();
    this.trigger(this.state);
  }
});
