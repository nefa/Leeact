import React from 'react';
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

export class ModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = ModalStore.getInitialState();
  }

  componentDidMount() {
    this.storeUpdateHandler = this.onStoreUpdate.bind(this);
    this.storeUnsubscribe = ModalStore.listen(this.storeUpdateHandler);
  }

  componentWillUnmount() {
    this.storeUnsubscribe();
  }

  onStoreUpdate(state) {
    this.setState(state);
  }

  onHide() {
    // change the state.active to false
  }

  renderModalTemplate() {
    const ModalTemplate = this.state.modalTemplate;
    if (ModalTemplate && typeof ModalTemplate === 'function') {
      return (<ModalTemplate {...this.state.templateData} />);
    } else {
      return null;
    }
  }

  render() {
    const modalStyle = {display: none};
    return (
      <div className="Modalbody" style={modalStyle}>
        <button >x</button>
        {this.renderModalTemplate()}
      </div>
    )
  }
}
