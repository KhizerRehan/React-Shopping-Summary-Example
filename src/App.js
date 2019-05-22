import React, { Component } from 'react';
import Subtotal from './components/Subtotal/Subtotal';
import PickupSavings from './components/PickupSavings/PickupSavings';
import TaxesFees  from './components/TaxesFees/TaxesFees';
import { Container, Row, Col } from 'react-bootstrap';

import './App.css';

class App extends Component {
 constructor(props) {
   super(props);
   this.state= {
     total:100,
     pickupSavings: -3.85,
     taxes:0
   }
 }

  render() {
    return (
      <Container>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            <div className="container">
              <header className="purchase-card">
              <Subtotal price={this.state.total.toFixed(2)} />
              <PickupSavings price={this.state.pickupSavings.toFixed(2)}/>
              <TaxesFees taxes={this.state.taxes.toFixed(2)} />
              </header>
            </div>
            </Col>
            </Row>
      </Container>
    );
  }
}

export default App;
