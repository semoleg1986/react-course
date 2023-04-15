import React from 'react';
import { ICard } from './Card.props';
import './Card.css';

interface Card {
  product: ICard;
}

const CardOrd = ({ product }: Card) => {
  return (
    <div className="post" data-testid="post">
      <img src={product.imageURL} alt={product.name} height="200" />
      <h2>
        {product.name} {product.surname}
      </h2>
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
