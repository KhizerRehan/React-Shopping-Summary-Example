import React, { Component } from 'react';
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
         <h1>Hello World</h1>
        </header>
      </div>
    );
  }
}

export default App;
