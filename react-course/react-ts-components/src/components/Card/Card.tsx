import React from 'react';
import { ICard } from '../type';
import './Card.css';

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    return (
      <div className="post">
        <img src={this.props.imageUrl} alt={this.props.title} />
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <div className="post-price">{this.props.price}</div>
      </div>
    );
  }
}

export { Card };
