import React, { Component } from "react";
import "./styles.css";

import Header from './components/Header';
import Goods from './components/Goods';
import Cart from './components/Cart';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app__header">
          <Header />
        </header>
        <main class="app__main">
          <div class="app__goods">
            <Goods />
          </div>
          <div class="app__cart">
            <Cart />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
