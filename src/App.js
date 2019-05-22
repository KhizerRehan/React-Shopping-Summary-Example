import React, { Component } from 'react';
import Subtotal from './components/Subtotal/Subtotal';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);
   this.state= {
     total:100
   }
 }

  render() {
    return (
      <div className="container">
        <header className="purchase-card">
         <Subtotal price={this.state.total.toFixed(2)} />
        </header>
      </div>
    );
  }
}

export default App;
