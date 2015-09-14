import React from 'react';
import {ModalActions, ModalStore} from '../../stores/modal-store';

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
    ModalActions.hide();
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
    const modalStyle = {display: this.state.active ? 'block': 'none'};
    return (
      <div className="Modalbody" style={modalStyle}>
        <button onClick={this.onHide.bind(this)}>x</button>
        {this.renderModalTemplate()}
      </div>
    )
  }
}
