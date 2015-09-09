import React from 'react';
import products from '../components/transaction/transaction-products';
import AdapterController from '../components/transaction/transaction-adapters';
import {ModalComponent, ModalActions} from '../components/modal/modal-api';


//TODO: should remove this or make it relevant
class Template extends React.Component {

  render() {
    return(
      <p>this will be the template's body</p>
    )
  }
}

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.transaction = new AdapterController('firebase');
  }

  sendData(item) {
    this.transaction.addTransaction(item);
  }

  renderProducts() {
    return products.map( item => {
      return (
        <li key={item.id}>
          <a onClick={ evt => this.sendData(item)} >
            {item.description} --+-- {item.price}
          </a>
        </li>
      )
    })
  }

  onOpenModal() {

  }

  render() {
    return (
      <div>
        <div id="home" className="mw8 center phm phl-ns">
          <h1 className="ptxl tc ttu pbn normal mega-ns f1-ns">halcyon - calm, peaceful</h1>
          {this.renderProducts()}
          <button id="show" onClick={this.onOpenModal.bind(this)}>showModal</button>
        </div>
        <ModalComponent />
      </div>
    );
  }
}

export default Home;
