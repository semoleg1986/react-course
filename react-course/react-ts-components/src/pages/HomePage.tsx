import { SearchBar } from '../components/SearchBar/SearchBar';
import React from 'react';
import { Cards } from '../components/Cards/Cards';
import { IRouter } from '../type';

class HomePage extends React.Component<IRouter> {
  constructor(props: IRouter) {
    super(props);
    this.props.callback(this.props);
  }

  render(): React.ReactNode {
    return (
      <>
        <h2>Home page</h2>
        <SearchBar />
        <Cards />
      </>
    );
  }
}

export { HomePage };
