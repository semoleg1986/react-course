import React from 'react';
import { ICard } from '../Card/Card.props';
import '../Card/Card.css';

interface Card {
  product: ICard;
}

const CardOrd = ({ product }: Card) => {
  return (
    <div className="post" data-testid="post">
      <img src={product.imageURL} alt={product.title} height="200" />
      <h2>{product.title}</h2>
      <p>{product.date}</p>
      <div className="post-brand">
        gender: <span>{product.gender}</span>{' '}
      </div>
      <div className="post-category">
        category: <span>{product.category}</span>{' '}
      </div>
    </div>
  );
};

export default CardOrd;
