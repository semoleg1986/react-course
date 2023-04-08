import { useState, useCallback } from 'react';
import FormInput from '../../components/Form/FormInput';
import { ICard } from '../../components/Card/Card.props';
import '../../components/Cards/Cards.css';
import CardOrd from '../../components/Card/Card_ord';

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
          <CardOrd key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Forms;
