import React from 'react';
import { ICard } from './Card.props';
import './Card.css';

class Card extends React.Component<ICard> {
  constructor(props: ICard) {
    super(props);
  }

  render() {
    const item = this.props;
    return (
      <div className="post" data-testid="post">
        <img src={item.imageUrl} alt={item.title} />
        <h2>{item.title}</h2>
        <p>{item.date}</p>
        <div className="post-brand">
          brand: <span>{item.brand}</span>{' '}
        </div>
        <div className="post-category">
          category: <span>{item.category}</span>{' '}
        </div>
      </div>
    );
  }
}

export { Card };
