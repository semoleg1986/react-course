export interface ICard {
  id: number;
  title: string;
  imageURL: string;
  date: string;
  rules: boolean;
  category: string;
  brand: string;
}

export interface IMovie {
  id: number;
  name: string;
  poster_path: string;
  first_air_date: string;
  overview: string;
}
