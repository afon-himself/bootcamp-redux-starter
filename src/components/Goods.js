import React, { Component } from "react";
import "../styles.css";

import GoodsItem from './GoodsItem';

class Goods extends Component {
  state = {
    goods: [
      { id: 0, title: 'First', description: 'The first good', quantity: 10, price: 150 },
      { id: 1, title: 'Second', description: 'The second good', quantity: 10, price: 150 },
      { id: 2, title: 'Third', description: 'The third good', quantity: 10, price: 150 },
      { id: 3, title: 'Fourth', description: 'The fourth good', quantity: 10, price: 150 }
    ]
  }
  render() {
    return (
      <div className="goods">
        <h2 className="goods__title">Video Games</h2>
        {this.state.goods.map(item => (
          <ul className="goods__list">
            <li className="goods__list-item" key={item.id}>
              <GoodsItem {...item} />
            </li>
          </ul>
        ))}
      </div>
    );
  }
}

export default Goods;