import React, { Component } from 'react';
import { ProductProps } from '../utils/Form.type';

export class Card extends Component<ProductProps> {
  constructor(props: ProductProps) {
    super(props);
  }

  render() {
    const item = this.props.product;
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
