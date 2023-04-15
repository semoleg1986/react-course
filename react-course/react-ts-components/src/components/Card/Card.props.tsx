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
  id: string;
  name: string;
  poster_path: string;
  first_air_date: string;
  overview: string;
  vote_average: number;
}
export interface IMovieResult {
  results: IMovie[];
}