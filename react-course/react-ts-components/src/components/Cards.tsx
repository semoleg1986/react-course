import React from 'react';
import dataCard from '../assets/json/cards.json';
import { Card } from './Card';
import './Cards.css';

class Cards extends React.Component {
  states = {
    data: dataCard,
  };

  render(): React.ReactNode {
    return (
      <div className="post-container">
        {this.states.data.products.map((i) => (
          <Card {...i} key={i.id} />
        ))}
      </div>
    );
  }
}

export default Cards;
