import React from 'react';
import { IRouter } from '../../components/Header/Header.props';
import { FormInput } from '../../components/Form/FormInput';
import { ICard } from '../../components/Card/Card.props';
import { ICards } from '../../components/Form/utils/Form.props';
import { Card } from '../../components/Form/Card/Card';
import '../../components/Card/Card.css';

class Forms extends React.Component<IRouter, ICards> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
    this.state = {
      products: [],
    };
    this.onAddCard = this.onAddCard.bind(this);
  }

  onAddCard(newCard: ICard) {
    this.setState((prevState) => ({
      products: [...prevState.products, newCard],
    }));
  }
  render(): React.ReactNode {
    return (
      <div>
        <h3>Form</h3>
        <FormInput onAddCard={this.onAddCard} />
        <div className="post-container">
          {this.state.products?.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    );
  }
}

export { Forms };
