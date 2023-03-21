export interface ICard {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;
}

export interface IStatePage {
  title: string;
}

export interface IRouter {
  title: string;
  callback: (title: IStatePage) => void;
}
