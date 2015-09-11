import React from 'react';
import {ModalActions, ModalStore} from './modal-store';
import ProductTemplate from './product-template';

const ModalList = {
  ProductTemplate: ProductTemplate
}

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
    const templateName = this.state.modalTemplate;
    const ModalTemplate = ModalList[templateName];
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
