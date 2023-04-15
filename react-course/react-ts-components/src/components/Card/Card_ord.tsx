import React from 'react';
import { ICard } from './Card.props';
import './Card_ord.css';

interface Card {
  product: ICard;
  onRemove: (id: number) => void;
}

const CardOrd = ({ product, onRemove }: Card) => {
  const handleRemoveClick = () => {
    onRemove(product.id);
  };
  return (
    <div className="post" data-testid="post">
      <span className="post-remove" onClick={handleRemoveClick}>
        &times;
      </span>
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
