import { useDispatch, useSelector } from 'react-redux';
import FormInput from '../../components/Form/FormInput';
import { ICard } from '../../components/Card/Card.props';
import '../../components/Cards/Cards.css';
import CardOrd from '../../components/Card/Card_ord';
import { RootState } from '../../store/store';
import { addCard } from '../../store/slices/formSlice';

const Forms = () => {
  const dispatch = useDispatch();
  const products = useSelector((state: RootState) => state.form.cards);

  const updateProduct = (newCard: ICard) => {
    dispatch(addCard(newCard));
  };

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
