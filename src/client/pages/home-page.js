import React from 'react';
import products from '../components/transaction/transaction-products';
import AdapterController from '../components/transaction/transaction-adapters';
import {ModalComponent} from '../components/modal/modal-component';
import {ModalActions} from '../stores/modal-store';
import ProductModal from '../components/modal/product-modal';
//TODO: should remove this or make it relevant

class Home extends React.Component {

  selectItem(item) {
    ModalActions.show(ProductModal, item);
  }

  renderProducts() {
    return products.map( item => {
      return (
        <li key={item.id}>
          <a onClick={ evt => this.selectItem(item)} >
            {item.description} --+-- {item.price}
          </a>
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <div id="home" className="mw8 center phm phl-ns">
          <h1 className="ptxl tc ttu pbn normal mega-ns f1-ns">halcyon - calm, peaceful</h1>
          {this.renderProducts()}
        </div>
        <ModalComponent />
      </div>
    );
  }
}

export default Home;
