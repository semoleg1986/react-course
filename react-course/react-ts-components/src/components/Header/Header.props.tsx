export interface IStatePage {
  title: string;
}

export interface IRouter {
  title: string;
  callback: (title: IStatePage) => void;
}
