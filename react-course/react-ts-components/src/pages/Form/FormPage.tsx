import { useState, useCallback } from 'react';
import FormInput from '../../components/Form/FormInput';
import { ICard } from '../../components/Card/Card.props';
import Card from '../../components/Card/Card';
import '../../components/Cards/Cards.css';

const Forms = () => {
  const [products, setProducts] = useState<ICard[]>([]);
  const updateProduct = useCallback((newCard: ICard) => {
    setProducts((prevProducts) => [...prevProducts, newCard]);
  }, []);

  return (
    <div>
      <h3>Form</h3>
      <FormInput onAddCard={updateProduct} />
      <div className="post-container">
        {products?.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Forms;
