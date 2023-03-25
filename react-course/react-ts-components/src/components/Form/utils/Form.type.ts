import { ICard } from '../../Card/Card.props';
export type FormAdd = {
  onAddCard: (newCard: ICard) => void;
};
export type ProductProps = {
  product: ICard;
};
