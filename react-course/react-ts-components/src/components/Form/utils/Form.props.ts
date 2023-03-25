import { ICard } from '../../Card/Card.props';

export interface ICards {
  products: ICard[];
}

export interface IFormValid {
  titleValid: boolean;
  priceValid: boolean;
  imageValid: boolean;
  imageUrl: string;
  dateValid: boolean;
  rulesValid: boolean;
  brandValid: boolean;
  categoryValid: boolean;
  message: boolean;
}
